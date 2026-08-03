// Copyright 2020 - present integereleven. All rights reserved. MIT license.

// import type { IHashable, IHelpful } from '@kz/core/type';

// import {
//   hashException,
//   I11N_DOCS_HOST,
//   I11N_EX2_PATH,
// } from './_internal/mod.ts';

// import type { ExceptionData } from './exception_data.ts';

// export class Exception<Data extends ExceptionData = ExceptionData> extends Error
//   implements IHelpful, IHashable {
//   protected exceptionProps: Data;

//   constructor(message: string);

//   constructor(message: string, data: Data);

//   constructor(message: string, data?: Data) {
//     super(message);

//     const props = data || {} as Data;

//     this.exceptionProps = props;
//   }

//   public readonly code: number = 0x0;

//   public override get name(): string {
//     const { name } = this.constructor;

//     return name;
//   }

//   public getHashCode(): number {
//     return hashException(this);
//   }

//   public get helpUrl(): string {
//     const { message } = this;

//     const baseUrl = this.getHelpBaseUrl();
//     const encodedData = this.getUrlEncodedData();
//     const encodedCause = this.getUrlEncodedCause();

//     const encodedMessage = encodeURIComponent(message);

//     const messageParam = encodedMessage ? `message=${encodedMessage}` : '';
//     const dataParam = encodedData ? `data=${encodedData}` : '';
//     const causeParam = encodedCause ? `cause=${encodedCause}` : '';

//     const parts = [messageParam, dataParam, causeParam];
//     const clearedParts = parts.filter((part) => part);
//     const hasParams = clearedParts.length > 0;

//     if (!hasParams) {
//       return baseUrl;
//     }

//     const urlParams = clearedParts.join('&');
//     const helpUrl = `${baseUrl}?${urlParams}`;

//     return helpUrl;
//   }

//   protected getHelpBaseUrl(): string {
//     const { code } = this;
//     const codeHex = code.toString(16);
//     const codeHexString = `0x${codeHex}`;
//     const baseUrl = `${I11N_DOCS_HOST}/${I11N_EX2_PATH}/${codeHexString}`;

//     return baseUrl;
//   }

//   protected getUrlEncodedData(): string {
//     const { data } = this;
//     const dataString = data ? JSON.stringify(data) : '';
//     const encodedData = encodeURIComponent(dataString);

//     return encodedData;
//   }

//   protected getUrlEncodedCause(): string {
//     const { cause } = this;

//     if (!cause) {
//       return '';
//     }

//     if (cause instanceof Exception) {
//       const causeString = JSON.stringify({ helpUrl: cause.helpUrl });
//       const encodedCause = encodeURIComponent(causeString);

//       return encodedCause;
//     }

//     const causeString = JSON.stringify({
//       message: cause.message,
//       cause: cause.cause,
//     });
//     const encodedCause = encodeURIComponent(causeString);

//     return encodedCause;
//   }

//   public override get cause(): Error | undefined {
//     const { cause } = this.exceptionProps;

//     return cause;
//   }

//   public get data(): Omit<Data, 'cause'> | undefined {
//     const { cause: _cause, ...data } = this.exceptionProps;

//     const hasData = Object.keys(data).length > 0;
//     const result = hasData ? data : undefined;

//     return result;
//   }

//   public override valueOf(): number {
//     const { code } = this;

//     return code;
//   }

//   public override toString(): string {
//     const { name, message } = this;
//     const result = `${name}: ${message}`;

//     return result;
//   }
// }
