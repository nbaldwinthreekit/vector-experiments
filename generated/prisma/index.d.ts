
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model AttributeOption
 * 
 */
export type AttributeOption = $Result.DefaultSelection<Prisma.$AttributeOptionPayload>
/**
 * Model Variant
 * 
 */
export type Variant = $Result.DefaultSelection<Prisma.$VariantPayload>
/**
 * Model ProductAttributeOption
 * 
 */
export type ProductAttributeOption = $Result.DefaultSelection<Prisma.$ProductAttributeOptionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attributeOption`: Exposes CRUD operations for the **AttributeOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributeOptions
    * const attributeOptions = await prisma.attributeOption.findMany()
    * ```
    */
  get attributeOption(): Prisma.AttributeOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **Variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.VariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productAttributeOption`: Exposes CRUD operations for the **ProductAttributeOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductAttributeOptions
    * const productAttributeOptions = await prisma.productAttributeOption.findMany()
    * ```
    */
  get productAttributeOption(): Prisma.ProductAttributeOptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    AttributeOption: 'AttributeOption',
    Variant: 'Variant',
    ProductAttributeOption: 'ProductAttributeOption'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "attributeOption" | "variant" | "productAttributeOption"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      AttributeOption: {
        payload: Prisma.$AttributeOptionPayload<ExtArgs>
        fields: Prisma.AttributeOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          findFirst: {
            args: Prisma.AttributeOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          findMany: {
            args: Prisma.AttributeOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>[]
          }
          create: {
            args: Prisma.AttributeOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          createMany: {
            args: Prisma.AttributeOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>[]
          }
          delete: {
            args: Prisma.AttributeOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          update: {
            args: Prisma.AttributeOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          deleteMany: {
            args: Prisma.AttributeOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>[]
          }
          upsert: {
            args: Prisma.AttributeOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeOptionPayload>
          }
          aggregate: {
            args: Prisma.AttributeOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttributeOption>
          }
          groupBy: {
            args: Prisma.AttributeOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeOptionCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeOptionCountAggregateOutputType> | number
          }
        }
      }
      Variant: {
        payload: Prisma.$VariantPayload<ExtArgs>
        fields: Prisma.VariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findFirst: {
            args: Prisma.VariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findMany: {
            args: Prisma.VariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          create: {
            args: Prisma.VariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          createMany: {
            args: Prisma.VariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          delete: {
            args: Prisma.VariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          update: {
            args: Prisma.VariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          deleteMany: {
            args: Prisma.VariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          upsert: {
            args: Prisma.VariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          aggregate: {
            args: Prisma.VariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariant>
          }
          groupBy: {
            args: Prisma.VariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantCountArgs<ExtArgs>
            result: $Utils.Optional<VariantCountAggregateOutputType> | number
          }
        }
      }
      ProductAttributeOption: {
        payload: Prisma.$ProductAttributeOptionPayload<ExtArgs>
        fields: Prisma.ProductAttributeOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductAttributeOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductAttributeOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload>
          }
          findFirst: {
            args: Prisma.ProductAttributeOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductAttributeOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload>
          }
          findMany: {
            args: Prisma.ProductAttributeOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload>[]
          }
          create: {
            args: Prisma.ProductAttributeOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload>
          }
          createMany: {
            args: Prisma.ProductAttributeOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductAttributeOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload>[]
          }
          delete: {
            args: Prisma.ProductAttributeOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload>
          }
          update: {
            args: Prisma.ProductAttributeOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload>
          }
          deleteMany: {
            args: Prisma.ProductAttributeOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductAttributeOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductAttributeOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload>[]
          }
          upsert: {
            args: Prisma.ProductAttributeOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAttributeOptionPayload>
          }
          aggregate: {
            args: Prisma.ProductAttributeOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductAttributeOption>
          }
          groupBy: {
            args: Prisma.ProductAttributeOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductAttributeOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductAttributeOptionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductAttributeOptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    attributeOption?: AttributeOptionOmit
    variant?: VariantOmit
    productAttributeOption?: ProductAttributeOptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    attributeOptions: number
    variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributeOptions?: boolean | ProductCountOutputTypeCountAttributeOptionsArgs
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAttributeOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAttributeOptionWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
  }


  /**
   * Count Type AttributeOptionCountOutputType
   */

  export type AttributeOptionCountOutputType = {
    products: number
  }

  export type AttributeOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | AttributeOptionCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * AttributeOptionCountOutputType without action
   */
  export type AttributeOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOptionCountOutputType
     */
    select?: AttributeOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeOptionCountOutputType without action
   */
  export type AttributeOptionCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAttributeOptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    productName: string | null
    description: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    productName: string | null
    description: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    productName: number
    description: number
    embedding: number
    metadata: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    productName?: true
    description?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    productName?: true
    description?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    productName?: true
    description?: true
    embedding?: true
    metadata?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    productName: string
    description: string
    embedding: JsonValue
    metadata: JsonValue
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    description?: boolean
    embedding?: boolean
    metadata?: boolean
    attributeOptions?: boolean | Product$attributeOptionsArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    description?: boolean
    embedding?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    description?: boolean
    embedding?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    productName?: boolean
    description?: boolean
    embedding?: boolean
    metadata?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productName" | "description" | "embedding" | "metadata", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributeOptions?: boolean | Product$attributeOptionsArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      attributeOptions: Prisma.$ProductAttributeOptionPayload<ExtArgs>[]
      variants: Prisma.$VariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productName: string
      description: string
      embedding: Prisma.JsonValue
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attributeOptions<T extends Product$attributeOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$attributeOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly productName: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly embedding: FieldRef<"Product", 'Json'>
    readonly metadata: FieldRef<"Product", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.attributeOptions
   */
  export type Product$attributeOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    where?: ProductAttributeOptionWhereInput
    orderBy?: ProductAttributeOptionOrderByWithRelationInput | ProductAttributeOptionOrderByWithRelationInput[]
    cursor?: ProductAttributeOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAttributeOptionScalarFieldEnum | ProductAttributeOptionScalarFieldEnum[]
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model AttributeOption
   */

  export type AggregateAttributeOption = {
    _count: AttributeOptionCountAggregateOutputType | null
    _avg: AttributeOptionAvgAggregateOutputType | null
    _sum: AttributeOptionSumAggregateOutputType | null
    _min: AttributeOptionMinAggregateOutputType | null
    _max: AttributeOptionMaxAggregateOutputType | null
  }

  export type AttributeOptionAvgAggregateOutputType = {
    id: number | null
  }

  export type AttributeOptionSumAggregateOutputType = {
    id: number | null
  }

  export type AttributeOptionMinAggregateOutputType = {
    id: number | null
    attribute: string | null
    attributeOption: string | null
  }

  export type AttributeOptionMaxAggregateOutputType = {
    id: number | null
    attribute: string | null
    attributeOption: string | null
  }

  export type AttributeOptionCountAggregateOutputType = {
    id: number
    attribute: number
    attributeOption: number
    embedding: number
    metadata: number
    _all: number
  }


  export type AttributeOptionAvgAggregateInputType = {
    id?: true
  }

  export type AttributeOptionSumAggregateInputType = {
    id?: true
  }

  export type AttributeOptionMinAggregateInputType = {
    id?: true
    attribute?: true
    attributeOption?: true
  }

  export type AttributeOptionMaxAggregateInputType = {
    id?: true
    attribute?: true
    attributeOption?: true
  }

  export type AttributeOptionCountAggregateInputType = {
    id?: true
    attribute?: true
    attributeOption?: true
    embedding?: true
    metadata?: true
    _all?: true
  }

  export type AttributeOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeOption to aggregate.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributeOptions
    **/
    _count?: true | AttributeOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributeOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributeOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeOptionMaxAggregateInputType
  }

  export type GetAttributeOptionAggregateType<T extends AttributeOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributeOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributeOption[P]>
      : GetScalarType<T[P], AggregateAttributeOption[P]>
  }




  export type AttributeOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeOptionWhereInput
    orderBy?: AttributeOptionOrderByWithAggregationInput | AttributeOptionOrderByWithAggregationInput[]
    by: AttributeOptionScalarFieldEnum[] | AttributeOptionScalarFieldEnum
    having?: AttributeOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeOptionCountAggregateInputType | true
    _avg?: AttributeOptionAvgAggregateInputType
    _sum?: AttributeOptionSumAggregateInputType
    _min?: AttributeOptionMinAggregateInputType
    _max?: AttributeOptionMaxAggregateInputType
  }

  export type AttributeOptionGroupByOutputType = {
    id: number
    attribute: string
    attributeOption: string
    embedding: JsonValue
    metadata: JsonValue
    _count: AttributeOptionCountAggregateOutputType | null
    _avg: AttributeOptionAvgAggregateOutputType | null
    _sum: AttributeOptionSumAggregateOutputType | null
    _min: AttributeOptionMinAggregateOutputType | null
    _max: AttributeOptionMaxAggregateOutputType | null
  }

  type GetAttributeOptionGroupByPayload<T extends AttributeOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeOptionGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeOptionGroupByOutputType[P]>
        }
      >
    >


  export type AttributeOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attribute?: boolean
    attributeOption?: boolean
    embedding?: boolean
    metadata?: boolean
    products?: boolean | AttributeOption$productsArgs<ExtArgs>
    _count?: boolean | AttributeOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeOption"]>

  export type AttributeOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attribute?: boolean
    attributeOption?: boolean
    embedding?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["attributeOption"]>

  export type AttributeOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attribute?: boolean
    attributeOption?: boolean
    embedding?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["attributeOption"]>

  export type AttributeOptionSelectScalar = {
    id?: boolean
    attribute?: boolean
    attributeOption?: boolean
    embedding?: boolean
    metadata?: boolean
  }

  export type AttributeOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attribute" | "attributeOption" | "embedding" | "metadata", ExtArgs["result"]["attributeOption"]>
  export type AttributeOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | AttributeOption$productsArgs<ExtArgs>
    _count?: boolean | AttributeOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttributeOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttributeOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributeOption"
    objects: {
      products: Prisma.$ProductAttributeOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attribute: string
      attributeOption: string
      embedding: Prisma.JsonValue
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["attributeOption"]>
    composites: {}
  }

  type AttributeOptionGetPayload<S extends boolean | null | undefined | AttributeOptionDefaultArgs> = $Result.GetResult<Prisma.$AttributeOptionPayload, S>

  type AttributeOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeOptionCountAggregateInputType | true
    }

  export interface AttributeOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributeOption'], meta: { name: 'AttributeOption' } }
    /**
     * Find zero or one AttributeOption that matches the filter.
     * @param {AttributeOptionFindUniqueArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeOptionFindUniqueArgs>(args: SelectSubset<T, AttributeOptionFindUniqueArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttributeOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeOptionFindUniqueOrThrowArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionFindFirstArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeOptionFindFirstArgs>(args?: SelectSubset<T, AttributeOptionFindFirstArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionFindFirstOrThrowArgs} args - Arguments to find a AttributeOption
     * @example
     * // Get one AttributeOption
     * const attributeOption = await prisma.attributeOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttributeOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributeOptions
     * const attributeOptions = await prisma.attributeOption.findMany()
     * 
     * // Get first 10 AttributeOptions
     * const attributeOptions = await prisma.attributeOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeOptionWithIdOnly = await prisma.attributeOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeOptionFindManyArgs>(args?: SelectSubset<T, AttributeOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttributeOption.
     * @param {AttributeOptionCreateArgs} args - Arguments to create a AttributeOption.
     * @example
     * // Create one AttributeOption
     * const AttributeOption = await prisma.attributeOption.create({
     *   data: {
     *     // ... data to create a AttributeOption
     *   }
     * })
     * 
     */
    create<T extends AttributeOptionCreateArgs>(args: SelectSubset<T, AttributeOptionCreateArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttributeOptions.
     * @param {AttributeOptionCreateManyArgs} args - Arguments to create many AttributeOptions.
     * @example
     * // Create many AttributeOptions
     * const attributeOption = await prisma.attributeOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeOptionCreateManyArgs>(args?: SelectSubset<T, AttributeOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttributeOptions and returns the data saved in the database.
     * @param {AttributeOptionCreateManyAndReturnArgs} args - Arguments to create many AttributeOptions.
     * @example
     * // Create many AttributeOptions
     * const attributeOption = await prisma.attributeOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttributeOptions and only return the `id`
     * const attributeOptionWithIdOnly = await prisma.attributeOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttributeOption.
     * @param {AttributeOptionDeleteArgs} args - Arguments to delete one AttributeOption.
     * @example
     * // Delete one AttributeOption
     * const AttributeOption = await prisma.attributeOption.delete({
     *   where: {
     *     // ... filter to delete one AttributeOption
     *   }
     * })
     * 
     */
    delete<T extends AttributeOptionDeleteArgs>(args: SelectSubset<T, AttributeOptionDeleteArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttributeOption.
     * @param {AttributeOptionUpdateArgs} args - Arguments to update one AttributeOption.
     * @example
     * // Update one AttributeOption
     * const attributeOption = await prisma.attributeOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeOptionUpdateArgs>(args: SelectSubset<T, AttributeOptionUpdateArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttributeOptions.
     * @param {AttributeOptionDeleteManyArgs} args - Arguments to filter AttributeOptions to delete.
     * @example
     * // Delete a few AttributeOptions
     * const { count } = await prisma.attributeOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeOptionDeleteManyArgs>(args?: SelectSubset<T, AttributeOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributeOptions
     * const attributeOption = await prisma.attributeOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeOptionUpdateManyArgs>(args: SelectSubset<T, AttributeOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeOptions and returns the data updated in the database.
     * @param {AttributeOptionUpdateManyAndReturnArgs} args - Arguments to update many AttributeOptions.
     * @example
     * // Update many AttributeOptions
     * const attributeOption = await prisma.attributeOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttributeOptions and only return the `id`
     * const attributeOptionWithIdOnly = await prisma.attributeOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttributeOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttributeOption.
     * @param {AttributeOptionUpsertArgs} args - Arguments to update or create a AttributeOption.
     * @example
     * // Update or create a AttributeOption
     * const attributeOption = await prisma.attributeOption.upsert({
     *   create: {
     *     // ... data to create a AttributeOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributeOption we want to update
     *   }
     * })
     */
    upsert<T extends AttributeOptionUpsertArgs>(args: SelectSubset<T, AttributeOptionUpsertArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttributeOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionCountArgs} args - Arguments to filter AttributeOptions to count.
     * @example
     * // Count the number of AttributeOptions
     * const count = await prisma.attributeOption.count({
     *   where: {
     *     // ... the filter for the AttributeOptions we want to count
     *   }
     * })
    **/
    count<T extends AttributeOptionCountArgs>(
      args?: Subset<T, AttributeOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributeOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttributeOptionAggregateArgs>(args: Subset<T, AttributeOptionAggregateArgs>): Prisma.PrismaPromise<GetAttributeOptionAggregateType<T>>

    /**
     * Group by AttributeOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttributeOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeOptionGroupByArgs['orderBy'] }
        : { orderBy?: AttributeOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttributeOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributeOption model
   */
  readonly fields: AttributeOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributeOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends AttributeOption$productsArgs<ExtArgs> = {}>(args?: Subset<T, AttributeOption$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttributeOption model
   */
  interface AttributeOptionFieldRefs {
    readonly id: FieldRef<"AttributeOption", 'Int'>
    readonly attribute: FieldRef<"AttributeOption", 'String'>
    readonly attributeOption: FieldRef<"AttributeOption", 'String'>
    readonly embedding: FieldRef<"AttributeOption", 'Json'>
    readonly metadata: FieldRef<"AttributeOption", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AttributeOption findUnique
   */
  export type AttributeOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption findUniqueOrThrow
   */
  export type AttributeOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption findFirst
   */
  export type AttributeOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeOptions.
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeOptions.
     */
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption findFirstOrThrow
   */
  export type AttributeOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOption to fetch.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeOptions.
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeOptions.
     */
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption findMany
   */
  export type AttributeOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeOptions to fetch.
     */
    where?: AttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeOptions to fetch.
     */
    orderBy?: AttributeOptionOrderByWithRelationInput | AttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributeOptions.
     */
    cursor?: AttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeOptions.
     */
    skip?: number
    distinct?: AttributeOptionScalarFieldEnum | AttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption create
   */
  export type AttributeOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributeOption.
     */
    data: XOR<AttributeOptionCreateInput, AttributeOptionUncheckedCreateInput>
  }

  /**
   * AttributeOption createMany
   */
  export type AttributeOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributeOptions.
     */
    data: AttributeOptionCreateManyInput | AttributeOptionCreateManyInput[]
  }

  /**
   * AttributeOption createManyAndReturn
   */
  export type AttributeOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * The data used to create many AttributeOptions.
     */
    data: AttributeOptionCreateManyInput | AttributeOptionCreateManyInput[]
  }

  /**
   * AttributeOption update
   */
  export type AttributeOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributeOption.
     */
    data: XOR<AttributeOptionUpdateInput, AttributeOptionUncheckedUpdateInput>
    /**
     * Choose, which AttributeOption to update.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption updateMany
   */
  export type AttributeOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributeOptions.
     */
    data: XOR<AttributeOptionUpdateManyMutationInput, AttributeOptionUncheckedUpdateManyInput>
    /**
     * Filter which AttributeOptions to update
     */
    where?: AttributeOptionWhereInput
    /**
     * Limit how many AttributeOptions to update.
     */
    limit?: number
  }

  /**
   * AttributeOption updateManyAndReturn
   */
  export type AttributeOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * The data used to update AttributeOptions.
     */
    data: XOR<AttributeOptionUpdateManyMutationInput, AttributeOptionUncheckedUpdateManyInput>
    /**
     * Filter which AttributeOptions to update
     */
    where?: AttributeOptionWhereInput
    /**
     * Limit how many AttributeOptions to update.
     */
    limit?: number
  }

  /**
   * AttributeOption upsert
   */
  export type AttributeOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributeOption to update in case it exists.
     */
    where: AttributeOptionWhereUniqueInput
    /**
     * In case the AttributeOption found by the `where` argument doesn't exist, create a new AttributeOption with this data.
     */
    create: XOR<AttributeOptionCreateInput, AttributeOptionUncheckedCreateInput>
    /**
     * In case the AttributeOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeOptionUpdateInput, AttributeOptionUncheckedUpdateInput>
  }

  /**
   * AttributeOption delete
   */
  export type AttributeOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
    /**
     * Filter which AttributeOption to delete.
     */
    where: AttributeOptionWhereUniqueInput
  }

  /**
   * AttributeOption deleteMany
   */
  export type AttributeOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeOptions to delete
     */
    where?: AttributeOptionWhereInput
    /**
     * Limit how many AttributeOptions to delete.
     */
    limit?: number
  }

  /**
   * AttributeOption.products
   */
  export type AttributeOption$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    where?: ProductAttributeOptionWhereInput
    orderBy?: ProductAttributeOptionOrderByWithRelationInput | ProductAttributeOptionOrderByWithRelationInput[]
    cursor?: ProductAttributeOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAttributeOptionScalarFieldEnum | ProductAttributeOptionScalarFieldEnum[]
  }

  /**
   * AttributeOption without action
   */
  export type AttributeOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeOption
     */
    select?: AttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeOption
     */
    omit?: AttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeOptionInclude<ExtArgs> | null
  }


  /**
   * Model Variant
   */

  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type VariantSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type VariantMinAggregateOutputType = {
    id: number | null
    productId: number | null
    productName: string | null
    configuration: string | null
    nlConfiguration: string | null
  }

  export type VariantMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    productName: string | null
    configuration: string | null
    nlConfiguration: string | null
  }

  export type VariantCountAggregateOutputType = {
    id: number
    productId: number
    productName: number
    configuration: number
    nlConfiguration: number
    embedding: number
    metadata: number
    _all: number
  }


  export type VariantAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type VariantSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type VariantMinAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    configuration?: true
    nlConfiguration?: true
  }

  export type VariantMaxAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    configuration?: true
    nlConfiguration?: true
  }

  export type VariantCountAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    configuration?: true
    nlConfiguration?: true
    embedding?: true
    metadata?: true
    _all?: true
  }

  export type VariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variant to aggregate.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type VariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithAggregationInput | VariantOrderByWithAggregationInput[]
    by: VariantScalarFieldEnum[] | VariantScalarFieldEnum
    having?: VariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _avg?: VariantAvgAggregateInputType
    _sum?: VariantSumAggregateInputType
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }

  export type VariantGroupByOutputType = {
    id: number
    productId: number
    productName: string
    configuration: string
    nlConfiguration: string
    embedding: JsonValue
    metadata: JsonValue
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type VariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    configuration?: boolean
    nlConfiguration?: boolean
    embedding?: boolean
    metadata?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    configuration?: boolean
    nlConfiguration?: boolean
    embedding?: boolean
    metadata?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    configuration?: boolean
    nlConfiguration?: boolean
    embedding?: boolean
    metadata?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectScalar = {
    id?: boolean
    productId?: boolean
    productName?: boolean
    configuration?: boolean
    nlConfiguration?: boolean
    embedding?: boolean
    metadata?: boolean
  }

  export type VariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "productName" | "configuration" | "nlConfiguration" | "embedding" | "metadata", ExtArgs["result"]["variant"]>
  export type VariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type VariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type VariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $VariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      productName: string
      configuration: string
      nlConfiguration: string
      embedding: Prisma.JsonValue
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["variant"]>
    composites: {}
  }

  type VariantGetPayload<S extends boolean | null | undefined | VariantDefaultArgs> = $Result.GetResult<Prisma.$VariantPayload, S>

  type VariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantCountAggregateInputType | true
    }

  export interface VariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variant'], meta: { name: 'Variant' } }
    /**
     * Find zero or one Variant that matches the filter.
     * @param {VariantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantFindUniqueArgs>(args: SelectSubset<T, VariantFindUniqueArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantFindFirstArgs>(args?: SelectSubset<T, VariantFindFirstArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantWithIdOnly = await prisma.variant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariantFindManyArgs>(args?: SelectSubset<T, VariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variant.
     * @param {VariantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
     */
    create<T extends VariantCreateArgs>(args: SelectSubset<T, VariantCreateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variants.
     * @param {VariantCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantCreateManyArgs>(args?: SelectSubset<T, VariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variants and returns the data saved in the database.
     * @param {VariantCreateManyAndReturnArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variant.
     * @param {VariantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
     */
    delete<T extends VariantDeleteArgs>(args: SelectSubset<T, VariantDeleteArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variant.
     * @param {VariantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantUpdateArgs>(args: SelectSubset<T, VariantUpdateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variants.
     * @param {VariantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantDeleteManyArgs>(args?: SelectSubset<T, VariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantUpdateManyArgs>(args: SelectSubset<T, VariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants and returns the data updated in the database.
     * @param {VariantUpdateManyAndReturnArgs} args - Arguments to update many Variants.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VariantUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variant.
     * @param {VariantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
     */
    upsert<T extends VariantUpsertArgs>(args: SelectSubset<T, VariantUpsertArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantCountArgs>(
      args?: Subset<T, VariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantGroupByArgs['orderBy'] }
        : { orderBy?: VariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variant model
   */
  readonly fields: VariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Variant model
   */
  interface VariantFieldRefs {
    readonly id: FieldRef<"Variant", 'Int'>
    readonly productId: FieldRef<"Variant", 'Int'>
    readonly productName: FieldRef<"Variant", 'String'>
    readonly configuration: FieldRef<"Variant", 'String'>
    readonly nlConfiguration: FieldRef<"Variant", 'String'>
    readonly embedding: FieldRef<"Variant", 'Json'>
    readonly metadata: FieldRef<"Variant", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Variant findUnique
   */
  export type VariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findUniqueOrThrow
   */
  export type VariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findFirst
   */
  export type VariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findFirstOrThrow
   */
  export type VariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findMany
   */
  export type VariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant create
   */
  export type VariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to create a Variant.
     */
    data: XOR<VariantCreateInput, VariantUncheckedCreateInput>
  }

  /**
   * Variant createMany
   */
  export type VariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
  }

  /**
   * Variant createManyAndReturn
   */
  export type VariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variant update
   */
  export type VariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to update a Variant.
     */
    data: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
    /**
     * Choose, which Variant to update.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant updateMany
   */
  export type VariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to update.
     */
    limit?: number
  }

  /**
   * Variant updateManyAndReturn
   */
  export type VariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variant upsert
   */
  export type VariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The filter to search for the Variant to update in case it exists.
     */
    where: VariantWhereUniqueInput
    /**
     * In case the Variant found by the `where` argument doesn't exist, create a new Variant with this data.
     */
    create: XOR<VariantCreateInput, VariantUncheckedCreateInput>
    /**
     * In case the Variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
  }

  /**
   * Variant delete
   */
  export type VariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter which Variant to delete.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant deleteMany
   */
  export type VariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to delete.
     */
    limit?: number
  }

  /**
   * Variant without action
   */
  export type VariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
  }


  /**
   * Model ProductAttributeOption
   */

  export type AggregateProductAttributeOption = {
    _count: ProductAttributeOptionCountAggregateOutputType | null
    _avg: ProductAttributeOptionAvgAggregateOutputType | null
    _sum: ProductAttributeOptionSumAggregateOutputType | null
    _min: ProductAttributeOptionMinAggregateOutputType | null
    _max: ProductAttributeOptionMaxAggregateOutputType | null
  }

  export type ProductAttributeOptionAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    attributeOptionId: number | null
  }

  export type ProductAttributeOptionSumAggregateOutputType = {
    id: number | null
    productId: number | null
    attributeOptionId: number | null
  }

  export type ProductAttributeOptionMinAggregateOutputType = {
    id: number | null
    productId: number | null
    attributeOptionId: number | null
  }

  export type ProductAttributeOptionMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    attributeOptionId: number | null
  }

  export type ProductAttributeOptionCountAggregateOutputType = {
    id: number
    productId: number
    attributeOptionId: number
    _all: number
  }


  export type ProductAttributeOptionAvgAggregateInputType = {
    id?: true
    productId?: true
    attributeOptionId?: true
  }

  export type ProductAttributeOptionSumAggregateInputType = {
    id?: true
    productId?: true
    attributeOptionId?: true
  }

  export type ProductAttributeOptionMinAggregateInputType = {
    id?: true
    productId?: true
    attributeOptionId?: true
  }

  export type ProductAttributeOptionMaxAggregateInputType = {
    id?: true
    productId?: true
    attributeOptionId?: true
  }

  export type ProductAttributeOptionCountAggregateInputType = {
    id?: true
    productId?: true
    attributeOptionId?: true
    _all?: true
  }

  export type ProductAttributeOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAttributeOption to aggregate.
     */
    where?: ProductAttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributeOptions to fetch.
     */
    orderBy?: ProductAttributeOptionOrderByWithRelationInput | ProductAttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductAttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductAttributeOptions
    **/
    _count?: true | ProductAttributeOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAttributeOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductAttributeOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductAttributeOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductAttributeOptionMaxAggregateInputType
  }

  export type GetProductAttributeOptionAggregateType<T extends ProductAttributeOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductAttributeOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductAttributeOption[P]>
      : GetScalarType<T[P], AggregateProductAttributeOption[P]>
  }




  export type ProductAttributeOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAttributeOptionWhereInput
    orderBy?: ProductAttributeOptionOrderByWithAggregationInput | ProductAttributeOptionOrderByWithAggregationInput[]
    by: ProductAttributeOptionScalarFieldEnum[] | ProductAttributeOptionScalarFieldEnum
    having?: ProductAttributeOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductAttributeOptionCountAggregateInputType | true
    _avg?: ProductAttributeOptionAvgAggregateInputType
    _sum?: ProductAttributeOptionSumAggregateInputType
    _min?: ProductAttributeOptionMinAggregateInputType
    _max?: ProductAttributeOptionMaxAggregateInputType
  }

  export type ProductAttributeOptionGroupByOutputType = {
    id: number
    productId: number
    attributeOptionId: number
    _count: ProductAttributeOptionCountAggregateOutputType | null
    _avg: ProductAttributeOptionAvgAggregateOutputType | null
    _sum: ProductAttributeOptionSumAggregateOutputType | null
    _min: ProductAttributeOptionMinAggregateOutputType | null
    _max: ProductAttributeOptionMaxAggregateOutputType | null
  }

  type GetProductAttributeOptionGroupByPayload<T extends ProductAttributeOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductAttributeOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductAttributeOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductAttributeOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductAttributeOptionGroupByOutputType[P]>
        }
      >
    >


  export type ProductAttributeOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    attributeOptionId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attributeOption?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productAttributeOption"]>

  export type ProductAttributeOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    attributeOptionId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attributeOption?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productAttributeOption"]>

  export type ProductAttributeOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    attributeOptionId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attributeOption?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productAttributeOption"]>

  export type ProductAttributeOptionSelectScalar = {
    id?: boolean
    productId?: boolean
    attributeOptionId?: boolean
  }

  export type ProductAttributeOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "attributeOptionId", ExtArgs["result"]["productAttributeOption"]>
  export type ProductAttributeOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attributeOption?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }
  export type ProductAttributeOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attributeOption?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }
  export type ProductAttributeOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    attributeOption?: boolean | AttributeOptionDefaultArgs<ExtArgs>
  }

  export type $ProductAttributeOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductAttributeOption"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      attributeOption: Prisma.$AttributeOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      attributeOptionId: number
    }, ExtArgs["result"]["productAttributeOption"]>
    composites: {}
  }

  type ProductAttributeOptionGetPayload<S extends boolean | null | undefined | ProductAttributeOptionDefaultArgs> = $Result.GetResult<Prisma.$ProductAttributeOptionPayload, S>

  type ProductAttributeOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductAttributeOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductAttributeOptionCountAggregateInputType | true
    }

  export interface ProductAttributeOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductAttributeOption'], meta: { name: 'ProductAttributeOption' } }
    /**
     * Find zero or one ProductAttributeOption that matches the filter.
     * @param {ProductAttributeOptionFindUniqueArgs} args - Arguments to find a ProductAttributeOption
     * @example
     * // Get one ProductAttributeOption
     * const productAttributeOption = await prisma.productAttributeOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductAttributeOptionFindUniqueArgs>(args: SelectSubset<T, ProductAttributeOptionFindUniqueArgs<ExtArgs>>): Prisma__ProductAttributeOptionClient<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductAttributeOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductAttributeOptionFindUniqueOrThrowArgs} args - Arguments to find a ProductAttributeOption
     * @example
     * // Get one ProductAttributeOption
     * const productAttributeOption = await prisma.productAttributeOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductAttributeOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductAttributeOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductAttributeOptionClient<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAttributeOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeOptionFindFirstArgs} args - Arguments to find a ProductAttributeOption
     * @example
     * // Get one ProductAttributeOption
     * const productAttributeOption = await prisma.productAttributeOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductAttributeOptionFindFirstArgs>(args?: SelectSubset<T, ProductAttributeOptionFindFirstArgs<ExtArgs>>): Prisma__ProductAttributeOptionClient<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAttributeOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeOptionFindFirstOrThrowArgs} args - Arguments to find a ProductAttributeOption
     * @example
     * // Get one ProductAttributeOption
     * const productAttributeOption = await prisma.productAttributeOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductAttributeOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductAttributeOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductAttributeOptionClient<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductAttributeOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductAttributeOptions
     * const productAttributeOptions = await prisma.productAttributeOption.findMany()
     * 
     * // Get first 10 ProductAttributeOptions
     * const productAttributeOptions = await prisma.productAttributeOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productAttributeOptionWithIdOnly = await prisma.productAttributeOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductAttributeOptionFindManyArgs>(args?: SelectSubset<T, ProductAttributeOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductAttributeOption.
     * @param {ProductAttributeOptionCreateArgs} args - Arguments to create a ProductAttributeOption.
     * @example
     * // Create one ProductAttributeOption
     * const ProductAttributeOption = await prisma.productAttributeOption.create({
     *   data: {
     *     // ... data to create a ProductAttributeOption
     *   }
     * })
     * 
     */
    create<T extends ProductAttributeOptionCreateArgs>(args: SelectSubset<T, ProductAttributeOptionCreateArgs<ExtArgs>>): Prisma__ProductAttributeOptionClient<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductAttributeOptions.
     * @param {ProductAttributeOptionCreateManyArgs} args - Arguments to create many ProductAttributeOptions.
     * @example
     * // Create many ProductAttributeOptions
     * const productAttributeOption = await prisma.productAttributeOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductAttributeOptionCreateManyArgs>(args?: SelectSubset<T, ProductAttributeOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductAttributeOptions and returns the data saved in the database.
     * @param {ProductAttributeOptionCreateManyAndReturnArgs} args - Arguments to create many ProductAttributeOptions.
     * @example
     * // Create many ProductAttributeOptions
     * const productAttributeOption = await prisma.productAttributeOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductAttributeOptions and only return the `id`
     * const productAttributeOptionWithIdOnly = await prisma.productAttributeOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductAttributeOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductAttributeOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductAttributeOption.
     * @param {ProductAttributeOptionDeleteArgs} args - Arguments to delete one ProductAttributeOption.
     * @example
     * // Delete one ProductAttributeOption
     * const ProductAttributeOption = await prisma.productAttributeOption.delete({
     *   where: {
     *     // ... filter to delete one ProductAttributeOption
     *   }
     * })
     * 
     */
    delete<T extends ProductAttributeOptionDeleteArgs>(args: SelectSubset<T, ProductAttributeOptionDeleteArgs<ExtArgs>>): Prisma__ProductAttributeOptionClient<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductAttributeOption.
     * @param {ProductAttributeOptionUpdateArgs} args - Arguments to update one ProductAttributeOption.
     * @example
     * // Update one ProductAttributeOption
     * const productAttributeOption = await prisma.productAttributeOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductAttributeOptionUpdateArgs>(args: SelectSubset<T, ProductAttributeOptionUpdateArgs<ExtArgs>>): Prisma__ProductAttributeOptionClient<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductAttributeOptions.
     * @param {ProductAttributeOptionDeleteManyArgs} args - Arguments to filter ProductAttributeOptions to delete.
     * @example
     * // Delete a few ProductAttributeOptions
     * const { count } = await prisma.productAttributeOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductAttributeOptionDeleteManyArgs>(args?: SelectSubset<T, ProductAttributeOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAttributeOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductAttributeOptions
     * const productAttributeOption = await prisma.productAttributeOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductAttributeOptionUpdateManyArgs>(args: SelectSubset<T, ProductAttributeOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAttributeOptions and returns the data updated in the database.
     * @param {ProductAttributeOptionUpdateManyAndReturnArgs} args - Arguments to update many ProductAttributeOptions.
     * @example
     * // Update many ProductAttributeOptions
     * const productAttributeOption = await prisma.productAttributeOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductAttributeOptions and only return the `id`
     * const productAttributeOptionWithIdOnly = await prisma.productAttributeOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductAttributeOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductAttributeOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductAttributeOption.
     * @param {ProductAttributeOptionUpsertArgs} args - Arguments to update or create a ProductAttributeOption.
     * @example
     * // Update or create a ProductAttributeOption
     * const productAttributeOption = await prisma.productAttributeOption.upsert({
     *   create: {
     *     // ... data to create a ProductAttributeOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductAttributeOption we want to update
     *   }
     * })
     */
    upsert<T extends ProductAttributeOptionUpsertArgs>(args: SelectSubset<T, ProductAttributeOptionUpsertArgs<ExtArgs>>): Prisma__ProductAttributeOptionClient<$Result.GetResult<Prisma.$ProductAttributeOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductAttributeOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeOptionCountArgs} args - Arguments to filter ProductAttributeOptions to count.
     * @example
     * // Count the number of ProductAttributeOptions
     * const count = await prisma.productAttributeOption.count({
     *   where: {
     *     // ... the filter for the ProductAttributeOptions we want to count
     *   }
     * })
    **/
    count<T extends ProductAttributeOptionCountArgs>(
      args?: Subset<T, ProductAttributeOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductAttributeOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductAttributeOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAttributeOptionAggregateArgs>(args: Subset<T, ProductAttributeOptionAggregateArgs>): Prisma.PrismaPromise<GetProductAttributeOptionAggregateType<T>>

    /**
     * Group by ProductAttributeOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAttributeOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductAttributeOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductAttributeOptionGroupByArgs['orderBy'] }
        : { orderBy?: ProductAttributeOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductAttributeOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductAttributeOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductAttributeOption model
   */
  readonly fields: ProductAttributeOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductAttributeOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductAttributeOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attributeOption<T extends AttributeOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeOptionDefaultArgs<ExtArgs>>): Prisma__AttributeOptionClient<$Result.GetResult<Prisma.$AttributeOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductAttributeOption model
   */
  interface ProductAttributeOptionFieldRefs {
    readonly id: FieldRef<"ProductAttributeOption", 'Int'>
    readonly productId: FieldRef<"ProductAttributeOption", 'Int'>
    readonly attributeOptionId: FieldRef<"ProductAttributeOption", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductAttributeOption findUnique
   */
  export type ProductAttributeOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttributeOption to fetch.
     */
    where: ProductAttributeOptionWhereUniqueInput
  }

  /**
   * ProductAttributeOption findUniqueOrThrow
   */
  export type ProductAttributeOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttributeOption to fetch.
     */
    where: ProductAttributeOptionWhereUniqueInput
  }

  /**
   * ProductAttributeOption findFirst
   */
  export type ProductAttributeOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttributeOption to fetch.
     */
    where?: ProductAttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributeOptions to fetch.
     */
    orderBy?: ProductAttributeOptionOrderByWithRelationInput | ProductAttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAttributeOptions.
     */
    cursor?: ProductAttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAttributeOptions.
     */
    distinct?: ProductAttributeOptionScalarFieldEnum | ProductAttributeOptionScalarFieldEnum[]
  }

  /**
   * ProductAttributeOption findFirstOrThrow
   */
  export type ProductAttributeOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttributeOption to fetch.
     */
    where?: ProductAttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributeOptions to fetch.
     */
    orderBy?: ProductAttributeOptionOrderByWithRelationInput | ProductAttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAttributeOptions.
     */
    cursor?: ProductAttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributeOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAttributeOptions.
     */
    distinct?: ProductAttributeOptionScalarFieldEnum | ProductAttributeOptionScalarFieldEnum[]
  }

  /**
   * ProductAttributeOption findMany
   */
  export type ProductAttributeOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductAttributeOptions to fetch.
     */
    where?: ProductAttributeOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAttributeOptions to fetch.
     */
    orderBy?: ProductAttributeOptionOrderByWithRelationInput | ProductAttributeOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductAttributeOptions.
     */
    cursor?: ProductAttributeOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAttributeOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAttributeOptions.
     */
    skip?: number
    distinct?: ProductAttributeOptionScalarFieldEnum | ProductAttributeOptionScalarFieldEnum[]
  }

  /**
   * ProductAttributeOption create
   */
  export type ProductAttributeOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductAttributeOption.
     */
    data: XOR<ProductAttributeOptionCreateInput, ProductAttributeOptionUncheckedCreateInput>
  }

  /**
   * ProductAttributeOption createMany
   */
  export type ProductAttributeOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductAttributeOptions.
     */
    data: ProductAttributeOptionCreateManyInput | ProductAttributeOptionCreateManyInput[]
  }

  /**
   * ProductAttributeOption createManyAndReturn
   */
  export type ProductAttributeOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * The data used to create many ProductAttributeOptions.
     */
    data: ProductAttributeOptionCreateManyInput | ProductAttributeOptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAttributeOption update
   */
  export type ProductAttributeOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductAttributeOption.
     */
    data: XOR<ProductAttributeOptionUpdateInput, ProductAttributeOptionUncheckedUpdateInput>
    /**
     * Choose, which ProductAttributeOption to update.
     */
    where: ProductAttributeOptionWhereUniqueInput
  }

  /**
   * ProductAttributeOption updateMany
   */
  export type ProductAttributeOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductAttributeOptions.
     */
    data: XOR<ProductAttributeOptionUpdateManyMutationInput, ProductAttributeOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductAttributeOptions to update
     */
    where?: ProductAttributeOptionWhereInput
    /**
     * Limit how many ProductAttributeOptions to update.
     */
    limit?: number
  }

  /**
   * ProductAttributeOption updateManyAndReturn
   */
  export type ProductAttributeOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * The data used to update ProductAttributeOptions.
     */
    data: XOR<ProductAttributeOptionUpdateManyMutationInput, ProductAttributeOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductAttributeOptions to update
     */
    where?: ProductAttributeOptionWhereInput
    /**
     * Limit how many ProductAttributeOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAttributeOption upsert
   */
  export type ProductAttributeOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductAttributeOption to update in case it exists.
     */
    where: ProductAttributeOptionWhereUniqueInput
    /**
     * In case the ProductAttributeOption found by the `where` argument doesn't exist, create a new ProductAttributeOption with this data.
     */
    create: XOR<ProductAttributeOptionCreateInput, ProductAttributeOptionUncheckedCreateInput>
    /**
     * In case the ProductAttributeOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductAttributeOptionUpdateInput, ProductAttributeOptionUncheckedUpdateInput>
  }

  /**
   * ProductAttributeOption delete
   */
  export type ProductAttributeOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
    /**
     * Filter which ProductAttributeOption to delete.
     */
    where: ProductAttributeOptionWhereUniqueInput
  }

  /**
   * ProductAttributeOption deleteMany
   */
  export type ProductAttributeOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAttributeOptions to delete
     */
    where?: ProductAttributeOptionWhereInput
    /**
     * Limit how many ProductAttributeOptions to delete.
     */
    limit?: number
  }

  /**
   * ProductAttributeOption without action
   */
  export type ProductAttributeOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAttributeOption
     */
    select?: ProductAttributeOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAttributeOption
     */
    omit?: ProductAttributeOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAttributeOptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    productName: 'productName',
    description: 'description',
    embedding: 'embedding',
    metadata: 'metadata'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const AttributeOptionScalarFieldEnum: {
    id: 'id',
    attribute: 'attribute',
    attributeOption: 'attributeOption',
    embedding: 'embedding',
    metadata: 'metadata'
  };

  export type AttributeOptionScalarFieldEnum = (typeof AttributeOptionScalarFieldEnum)[keyof typeof AttributeOptionScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    productName: 'productName',
    configuration: 'configuration',
    nlConfiguration: 'nlConfiguration',
    embedding: 'embedding',
    metadata: 'metadata'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  export const ProductAttributeOptionScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    attributeOptionId: 'attributeOptionId'
  };

  export type ProductAttributeOptionScalarFieldEnum = (typeof ProductAttributeOptionScalarFieldEnum)[keyof typeof ProductAttributeOptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    productName?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    embedding?: JsonFilter<"Product">
    metadata?: JsonFilter<"Product">
    attributeOptions?: ProductAttributeOptionListRelationFilter
    variants?: VariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    embedding?: SortOrder
    metadata?: SortOrder
    attributeOptions?: ProductAttributeOptionOrderByRelationAggregateInput
    variants?: VariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productName?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    description?: StringFilter<"Product"> | string
    embedding?: JsonFilter<"Product">
    metadata?: JsonFilter<"Product">
    attributeOptions?: ProductAttributeOptionListRelationFilter
    variants?: VariantListRelationFilter
  }, "id" | "productName">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    embedding?: SortOrder
    metadata?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    productName?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    embedding?: JsonWithAggregatesFilter<"Product">
    metadata?: JsonWithAggregatesFilter<"Product">
  }

  export type AttributeOptionWhereInput = {
    AND?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    OR?: AttributeOptionWhereInput[]
    NOT?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    id?: IntFilter<"AttributeOption"> | number
    attribute?: StringFilter<"AttributeOption"> | string
    attributeOption?: StringFilter<"AttributeOption"> | string
    embedding?: JsonFilter<"AttributeOption">
    metadata?: JsonFilter<"AttributeOption">
    products?: ProductAttributeOptionListRelationFilter
  }

  export type AttributeOptionOrderByWithRelationInput = {
    id?: SortOrder
    attribute?: SortOrder
    attributeOption?: SortOrder
    embedding?: SortOrder
    metadata?: SortOrder
    products?: ProductAttributeOptionOrderByRelationAggregateInput
  }

  export type AttributeOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    attribute_attributeOption?: AttributeOptionAttributeAttributeOptionCompoundUniqueInput
    AND?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    OR?: AttributeOptionWhereInput[]
    NOT?: AttributeOptionWhereInput | AttributeOptionWhereInput[]
    attribute?: StringFilter<"AttributeOption"> | string
    attributeOption?: StringFilter<"AttributeOption"> | string
    embedding?: JsonFilter<"AttributeOption">
    metadata?: JsonFilter<"AttributeOption">
    products?: ProductAttributeOptionListRelationFilter
  }, "id" | "attribute_attributeOption">

  export type AttributeOptionOrderByWithAggregationInput = {
    id?: SortOrder
    attribute?: SortOrder
    attributeOption?: SortOrder
    embedding?: SortOrder
    metadata?: SortOrder
    _count?: AttributeOptionCountOrderByAggregateInput
    _avg?: AttributeOptionAvgOrderByAggregateInput
    _max?: AttributeOptionMaxOrderByAggregateInput
    _min?: AttributeOptionMinOrderByAggregateInput
    _sum?: AttributeOptionSumOrderByAggregateInput
  }

  export type AttributeOptionScalarWhereWithAggregatesInput = {
    AND?: AttributeOptionScalarWhereWithAggregatesInput | AttributeOptionScalarWhereWithAggregatesInput[]
    OR?: AttributeOptionScalarWhereWithAggregatesInput[]
    NOT?: AttributeOptionScalarWhereWithAggregatesInput | AttributeOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttributeOption"> | number
    attribute?: StringWithAggregatesFilter<"AttributeOption"> | string
    attributeOption?: StringWithAggregatesFilter<"AttributeOption"> | string
    embedding?: JsonWithAggregatesFilter<"AttributeOption">
    metadata?: JsonWithAggregatesFilter<"AttributeOption">
  }

  export type VariantWhereInput = {
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    id?: IntFilter<"Variant"> | number
    productId?: IntFilter<"Variant"> | number
    productName?: StringFilter<"Variant"> | string
    configuration?: StringFilter<"Variant"> | string
    nlConfiguration?: StringFilter<"Variant"> | string
    embedding?: JsonFilter<"Variant">
    metadata?: JsonFilter<"Variant">
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type VariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    configuration?: SortOrder
    nlConfiguration?: SortOrder
    embedding?: SortOrder
    metadata?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type VariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productName_configuration?: VariantProductNameConfigurationCompoundUniqueInput
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    productId?: IntFilter<"Variant"> | number
    productName?: StringFilter<"Variant"> | string
    configuration?: StringFilter<"Variant"> | string
    nlConfiguration?: StringFilter<"Variant"> | string
    embedding?: JsonFilter<"Variant">
    metadata?: JsonFilter<"Variant">
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productName_configuration">

  export type VariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    configuration?: SortOrder
    nlConfiguration?: SortOrder
    embedding?: SortOrder
    metadata?: SortOrder
    _count?: VariantCountOrderByAggregateInput
    _avg?: VariantAvgOrderByAggregateInput
    _max?: VariantMaxOrderByAggregateInput
    _min?: VariantMinOrderByAggregateInput
    _sum?: VariantSumOrderByAggregateInput
  }

  export type VariantScalarWhereWithAggregatesInput = {
    AND?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    OR?: VariantScalarWhereWithAggregatesInput[]
    NOT?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Variant"> | number
    productId?: IntWithAggregatesFilter<"Variant"> | number
    productName?: StringWithAggregatesFilter<"Variant"> | string
    configuration?: StringWithAggregatesFilter<"Variant"> | string
    nlConfiguration?: StringWithAggregatesFilter<"Variant"> | string
    embedding?: JsonWithAggregatesFilter<"Variant">
    metadata?: JsonWithAggregatesFilter<"Variant">
  }

  export type ProductAttributeOptionWhereInput = {
    AND?: ProductAttributeOptionWhereInput | ProductAttributeOptionWhereInput[]
    OR?: ProductAttributeOptionWhereInput[]
    NOT?: ProductAttributeOptionWhereInput | ProductAttributeOptionWhereInput[]
    id?: IntFilter<"ProductAttributeOption"> | number
    productId?: IntFilter<"ProductAttributeOption"> | number
    attributeOptionId?: IntFilter<"ProductAttributeOption"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    attributeOption?: XOR<AttributeOptionScalarRelationFilter, AttributeOptionWhereInput>
  }

  export type ProductAttributeOptionOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeOptionId?: SortOrder
    product?: ProductOrderByWithRelationInput
    attributeOption?: AttributeOptionOrderByWithRelationInput
  }

  export type ProductAttributeOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_attributeOptionId?: ProductAttributeOptionProductIdAttributeOptionIdCompoundUniqueInput
    AND?: ProductAttributeOptionWhereInput | ProductAttributeOptionWhereInput[]
    OR?: ProductAttributeOptionWhereInput[]
    NOT?: ProductAttributeOptionWhereInput | ProductAttributeOptionWhereInput[]
    productId?: IntFilter<"ProductAttributeOption"> | number
    attributeOptionId?: IntFilter<"ProductAttributeOption"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    attributeOption?: XOR<AttributeOptionScalarRelationFilter, AttributeOptionWhereInput>
  }, "id" | "productId_attributeOptionId">

  export type ProductAttributeOptionOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeOptionId?: SortOrder
    _count?: ProductAttributeOptionCountOrderByAggregateInput
    _avg?: ProductAttributeOptionAvgOrderByAggregateInput
    _max?: ProductAttributeOptionMaxOrderByAggregateInput
    _min?: ProductAttributeOptionMinOrderByAggregateInput
    _sum?: ProductAttributeOptionSumOrderByAggregateInput
  }

  export type ProductAttributeOptionScalarWhereWithAggregatesInput = {
    AND?: ProductAttributeOptionScalarWhereWithAggregatesInput | ProductAttributeOptionScalarWhereWithAggregatesInput[]
    OR?: ProductAttributeOptionScalarWhereWithAggregatesInput[]
    NOT?: ProductAttributeOptionScalarWhereWithAggregatesInput | ProductAttributeOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductAttributeOption"> | number
    productId?: IntWithAggregatesFilter<"ProductAttributeOption"> | number
    attributeOptionId?: IntWithAggregatesFilter<"ProductAttributeOption"> | number
  }

  export type ProductCreateInput = {
    productName: string
    description: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
    attributeOptions?: ProductAttributeOptionCreateNestedManyWithoutProductInput
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    productName: string
    description: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
    attributeOptions?: ProductAttributeOptionUncheckedCreateNestedManyWithoutProductInput
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    attributeOptions?: ProductAttributeOptionUpdateManyWithoutProductNestedInput
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    attributeOptions?: ProductAttributeOptionUncheckedUpdateManyWithoutProductNestedInput
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    productName: string
    description: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ProductUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AttributeOptionCreateInput = {
    attribute: string
    attributeOption: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
    products?: ProductAttributeOptionCreateNestedManyWithoutAttributeOptionInput
  }

  export type AttributeOptionUncheckedCreateInput = {
    id?: number
    attribute: string
    attributeOption: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
    products?: ProductAttributeOptionUncheckedCreateNestedManyWithoutAttributeOptionInput
  }

  export type AttributeOptionUpdateInput = {
    attribute?: StringFieldUpdateOperationsInput | string
    attributeOption?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    products?: ProductAttributeOptionUpdateManyWithoutAttributeOptionNestedInput
  }

  export type AttributeOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attribute?: StringFieldUpdateOperationsInput | string
    attributeOption?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    products?: ProductAttributeOptionUncheckedUpdateManyWithoutAttributeOptionNestedInput
  }

  export type AttributeOptionCreateManyInput = {
    id?: number
    attribute: string
    attributeOption: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type AttributeOptionUpdateManyMutationInput = {
    attribute?: StringFieldUpdateOperationsInput | string
    attributeOption?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AttributeOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attribute?: StringFieldUpdateOperationsInput | string
    attributeOption?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type VariantCreateInput = {
    productName: string
    configuration: string
    nlConfiguration: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
    product: ProductCreateNestedOneWithoutVariantsInput
  }

  export type VariantUncheckedCreateInput = {
    id?: number
    productId: number
    productName: string
    configuration: string
    nlConfiguration: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type VariantUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string
    configuration?: StringFieldUpdateOperationsInput | string
    nlConfiguration?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type VariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    configuration?: StringFieldUpdateOperationsInput | string
    nlConfiguration?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type VariantCreateManyInput = {
    id?: number
    productId: number
    productName: string
    configuration: string
    nlConfiguration: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type VariantUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string
    configuration?: StringFieldUpdateOperationsInput | string
    nlConfiguration?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type VariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    configuration?: StringFieldUpdateOperationsInput | string
    nlConfiguration?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ProductAttributeOptionCreateInput = {
    product: ProductCreateNestedOneWithoutAttributeOptionsInput
    attributeOption: AttributeOptionCreateNestedOneWithoutProductsInput
  }

  export type ProductAttributeOptionUncheckedCreateInput = {
    id?: number
    productId: number
    attributeOptionId: number
  }

  export type ProductAttributeOptionUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutAttributeOptionsNestedInput
    attributeOption?: AttributeOptionUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductAttributeOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    attributeOptionId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductAttributeOptionCreateManyInput = {
    id?: number
    productId: number
    attributeOptionId: number
  }

  export type ProductAttributeOptionUpdateManyMutationInput = {

  }

  export type ProductAttributeOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    attributeOptionId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProductAttributeOptionListRelationFilter = {
    every?: ProductAttributeOptionWhereInput
    some?: ProductAttributeOptionWhereInput
    none?: ProductAttributeOptionWhereInput
  }

  export type VariantListRelationFilter = {
    every?: VariantWhereInput
    some?: VariantWhereInput
    none?: VariantWhereInput
  }

  export type ProductAttributeOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    embedding?: SortOrder
    metadata?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type AttributeOptionAttributeAttributeOptionCompoundUniqueInput = {
    attribute: string
    attributeOption: string
  }

  export type AttributeOptionCountOrderByAggregateInput = {
    id?: SortOrder
    attribute?: SortOrder
    attributeOption?: SortOrder
    embedding?: SortOrder
    metadata?: SortOrder
  }

  export type AttributeOptionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AttributeOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    attribute?: SortOrder
    attributeOption?: SortOrder
  }

  export type AttributeOptionMinOrderByAggregateInput = {
    id?: SortOrder
    attribute?: SortOrder
    attributeOption?: SortOrder
  }

  export type AttributeOptionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type VariantProductNameConfigurationCompoundUniqueInput = {
    productName: string
    configuration: string
  }

  export type VariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    configuration?: SortOrder
    nlConfiguration?: SortOrder
    embedding?: SortOrder
    metadata?: SortOrder
  }

  export type VariantAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type VariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    configuration?: SortOrder
    nlConfiguration?: SortOrder
  }

  export type VariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    configuration?: SortOrder
    nlConfiguration?: SortOrder
  }

  export type VariantSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type AttributeOptionScalarRelationFilter = {
    is?: AttributeOptionWhereInput
    isNot?: AttributeOptionWhereInput
  }

  export type ProductAttributeOptionProductIdAttributeOptionIdCompoundUniqueInput = {
    productId: number
    attributeOptionId: number
  }

  export type ProductAttributeOptionCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeOptionId?: SortOrder
  }

  export type ProductAttributeOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeOptionId?: SortOrder
  }

  export type ProductAttributeOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeOptionId?: SortOrder
  }

  export type ProductAttributeOptionMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeOptionId?: SortOrder
  }

  export type ProductAttributeOptionSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    attributeOptionId?: SortOrder
  }

  export type ProductAttributeOptionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAttributeOptionCreateWithoutProductInput, ProductAttributeOptionUncheckedCreateWithoutProductInput> | ProductAttributeOptionCreateWithoutProductInput[] | ProductAttributeOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAttributeOptionCreateOrConnectWithoutProductInput | ProductAttributeOptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductAttributeOptionCreateManyProductInputEnvelope
    connect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
  }

  export type VariantCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type ProductAttributeOptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAttributeOptionCreateWithoutProductInput, ProductAttributeOptionUncheckedCreateWithoutProductInput> | ProductAttributeOptionCreateWithoutProductInput[] | ProductAttributeOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAttributeOptionCreateOrConnectWithoutProductInput | ProductAttributeOptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductAttributeOptionCreateManyProductInputEnvelope
    connect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
  }

  export type VariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductAttributeOptionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAttributeOptionCreateWithoutProductInput, ProductAttributeOptionUncheckedCreateWithoutProductInput> | ProductAttributeOptionCreateWithoutProductInput[] | ProductAttributeOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAttributeOptionCreateOrConnectWithoutProductInput | ProductAttributeOptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductAttributeOptionUpsertWithWhereUniqueWithoutProductInput | ProductAttributeOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAttributeOptionCreateManyProductInputEnvelope
    set?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    disconnect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    delete?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    connect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    update?: ProductAttributeOptionUpdateWithWhereUniqueWithoutProductInput | ProductAttributeOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAttributeOptionUpdateManyWithWhereWithoutProductInput | ProductAttributeOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAttributeOptionScalarWhereInput | ProductAttributeOptionScalarWhereInput[]
  }

  export type VariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductAttributeOptionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAttributeOptionCreateWithoutProductInput, ProductAttributeOptionUncheckedCreateWithoutProductInput> | ProductAttributeOptionCreateWithoutProductInput[] | ProductAttributeOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAttributeOptionCreateOrConnectWithoutProductInput | ProductAttributeOptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductAttributeOptionUpsertWithWhereUniqueWithoutProductInput | ProductAttributeOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAttributeOptionCreateManyProductInputEnvelope
    set?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    disconnect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    delete?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    connect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    update?: ProductAttributeOptionUpdateWithWhereUniqueWithoutProductInput | ProductAttributeOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAttributeOptionUpdateManyWithWhereWithoutProductInput | ProductAttributeOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAttributeOptionScalarWhereInput | ProductAttributeOptionScalarWhereInput[]
  }

  export type VariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type ProductAttributeOptionCreateNestedManyWithoutAttributeOptionInput = {
    create?: XOR<ProductAttributeOptionCreateWithoutAttributeOptionInput, ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput> | ProductAttributeOptionCreateWithoutAttributeOptionInput[] | ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput[]
    connectOrCreate?: ProductAttributeOptionCreateOrConnectWithoutAttributeOptionInput | ProductAttributeOptionCreateOrConnectWithoutAttributeOptionInput[]
    createMany?: ProductAttributeOptionCreateManyAttributeOptionInputEnvelope
    connect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
  }

  export type ProductAttributeOptionUncheckedCreateNestedManyWithoutAttributeOptionInput = {
    create?: XOR<ProductAttributeOptionCreateWithoutAttributeOptionInput, ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput> | ProductAttributeOptionCreateWithoutAttributeOptionInput[] | ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput[]
    connectOrCreate?: ProductAttributeOptionCreateOrConnectWithoutAttributeOptionInput | ProductAttributeOptionCreateOrConnectWithoutAttributeOptionInput[]
    createMany?: ProductAttributeOptionCreateManyAttributeOptionInputEnvelope
    connect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
  }

  export type ProductAttributeOptionUpdateManyWithoutAttributeOptionNestedInput = {
    create?: XOR<ProductAttributeOptionCreateWithoutAttributeOptionInput, ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput> | ProductAttributeOptionCreateWithoutAttributeOptionInput[] | ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput[]
    connectOrCreate?: ProductAttributeOptionCreateOrConnectWithoutAttributeOptionInput | ProductAttributeOptionCreateOrConnectWithoutAttributeOptionInput[]
    upsert?: ProductAttributeOptionUpsertWithWhereUniqueWithoutAttributeOptionInput | ProductAttributeOptionUpsertWithWhereUniqueWithoutAttributeOptionInput[]
    createMany?: ProductAttributeOptionCreateManyAttributeOptionInputEnvelope
    set?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    disconnect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    delete?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    connect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    update?: ProductAttributeOptionUpdateWithWhereUniqueWithoutAttributeOptionInput | ProductAttributeOptionUpdateWithWhereUniqueWithoutAttributeOptionInput[]
    updateMany?: ProductAttributeOptionUpdateManyWithWhereWithoutAttributeOptionInput | ProductAttributeOptionUpdateManyWithWhereWithoutAttributeOptionInput[]
    deleteMany?: ProductAttributeOptionScalarWhereInput | ProductAttributeOptionScalarWhereInput[]
  }

  export type ProductAttributeOptionUncheckedUpdateManyWithoutAttributeOptionNestedInput = {
    create?: XOR<ProductAttributeOptionCreateWithoutAttributeOptionInput, ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput> | ProductAttributeOptionCreateWithoutAttributeOptionInput[] | ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput[]
    connectOrCreate?: ProductAttributeOptionCreateOrConnectWithoutAttributeOptionInput | ProductAttributeOptionCreateOrConnectWithoutAttributeOptionInput[]
    upsert?: ProductAttributeOptionUpsertWithWhereUniqueWithoutAttributeOptionInput | ProductAttributeOptionUpsertWithWhereUniqueWithoutAttributeOptionInput[]
    createMany?: ProductAttributeOptionCreateManyAttributeOptionInputEnvelope
    set?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    disconnect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    delete?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    connect?: ProductAttributeOptionWhereUniqueInput | ProductAttributeOptionWhereUniqueInput[]
    update?: ProductAttributeOptionUpdateWithWhereUniqueWithoutAttributeOptionInput | ProductAttributeOptionUpdateWithWhereUniqueWithoutAttributeOptionInput[]
    updateMany?: ProductAttributeOptionUpdateManyWithWhereWithoutAttributeOptionInput | ProductAttributeOptionUpdateManyWithWhereWithoutAttributeOptionInput[]
    deleteMany?: ProductAttributeOptionScalarWhereInput | ProductAttributeOptionScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductCreateNestedOneWithoutAttributeOptionsInput = {
    create?: XOR<ProductCreateWithoutAttributeOptionsInput, ProductUncheckedCreateWithoutAttributeOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAttributeOptionsInput
    connect?: ProductWhereUniqueInput
  }

  export type AttributeOptionCreateNestedOneWithoutProductsInput = {
    create?: XOR<AttributeOptionCreateWithoutProductsInput, AttributeOptionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutProductsInput
    connect?: AttributeOptionWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutAttributeOptionsNestedInput = {
    create?: XOR<ProductCreateWithoutAttributeOptionsInput, ProductUncheckedCreateWithoutAttributeOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAttributeOptionsInput
    upsert?: ProductUpsertWithoutAttributeOptionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAttributeOptionsInput, ProductUpdateWithoutAttributeOptionsInput>, ProductUncheckedUpdateWithoutAttributeOptionsInput>
  }

  export type AttributeOptionUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<AttributeOptionCreateWithoutProductsInput, AttributeOptionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: AttributeOptionCreateOrConnectWithoutProductsInput
    upsert?: AttributeOptionUpsertWithoutProductsInput
    connect?: AttributeOptionWhereUniqueInput
    update?: XOR<XOR<AttributeOptionUpdateToOneWithWhereWithoutProductsInput, AttributeOptionUpdateWithoutProductsInput>, AttributeOptionUncheckedUpdateWithoutProductsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProductAttributeOptionCreateWithoutProductInput = {
    attributeOption: AttributeOptionCreateNestedOneWithoutProductsInput
  }

  export type ProductAttributeOptionUncheckedCreateWithoutProductInput = {
    id?: number
    attributeOptionId: number
  }

  export type ProductAttributeOptionCreateOrConnectWithoutProductInput = {
    where: ProductAttributeOptionWhereUniqueInput
    create: XOR<ProductAttributeOptionCreateWithoutProductInput, ProductAttributeOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductAttributeOptionCreateManyProductInputEnvelope = {
    data: ProductAttributeOptionCreateManyProductInput | ProductAttributeOptionCreateManyProductInput[]
  }

  export type VariantCreateWithoutProductInput = {
    productName: string
    configuration: string
    nlConfiguration: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type VariantUncheckedCreateWithoutProductInput = {
    id?: number
    productName: string
    configuration: string
    nlConfiguration: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type VariantCreateOrConnectWithoutProductInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantCreateManyProductInputEnvelope = {
    data: VariantCreateManyProductInput | VariantCreateManyProductInput[]
  }

  export type ProductAttributeOptionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductAttributeOptionWhereUniqueInput
    update: XOR<ProductAttributeOptionUpdateWithoutProductInput, ProductAttributeOptionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductAttributeOptionCreateWithoutProductInput, ProductAttributeOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductAttributeOptionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductAttributeOptionWhereUniqueInput
    data: XOR<ProductAttributeOptionUpdateWithoutProductInput, ProductAttributeOptionUncheckedUpdateWithoutProductInput>
  }

  export type ProductAttributeOptionUpdateManyWithWhereWithoutProductInput = {
    where: ProductAttributeOptionScalarWhereInput
    data: XOR<ProductAttributeOptionUpdateManyMutationInput, ProductAttributeOptionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductAttributeOptionScalarWhereInput = {
    AND?: ProductAttributeOptionScalarWhereInput | ProductAttributeOptionScalarWhereInput[]
    OR?: ProductAttributeOptionScalarWhereInput[]
    NOT?: ProductAttributeOptionScalarWhereInput | ProductAttributeOptionScalarWhereInput[]
    id?: IntFilter<"ProductAttributeOption"> | number
    productId?: IntFilter<"ProductAttributeOption"> | number
    attributeOptionId?: IntFilter<"ProductAttributeOption"> | number
  }

  export type VariantUpsertWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
  }

  export type VariantUpdateManyWithWhereWithoutProductInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutProductInput>
  }

  export type VariantScalarWhereInput = {
    AND?: VariantScalarWhereInput | VariantScalarWhereInput[]
    OR?: VariantScalarWhereInput[]
    NOT?: VariantScalarWhereInput | VariantScalarWhereInput[]
    id?: IntFilter<"Variant"> | number
    productId?: IntFilter<"Variant"> | number
    productName?: StringFilter<"Variant"> | string
    configuration?: StringFilter<"Variant"> | string
    nlConfiguration?: StringFilter<"Variant"> | string
    embedding?: JsonFilter<"Variant">
    metadata?: JsonFilter<"Variant">
  }

  export type ProductAttributeOptionCreateWithoutAttributeOptionInput = {
    product: ProductCreateNestedOneWithoutAttributeOptionsInput
  }

  export type ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput = {
    id?: number
    productId: number
  }

  export type ProductAttributeOptionCreateOrConnectWithoutAttributeOptionInput = {
    where: ProductAttributeOptionWhereUniqueInput
    create: XOR<ProductAttributeOptionCreateWithoutAttributeOptionInput, ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput>
  }

  export type ProductAttributeOptionCreateManyAttributeOptionInputEnvelope = {
    data: ProductAttributeOptionCreateManyAttributeOptionInput | ProductAttributeOptionCreateManyAttributeOptionInput[]
  }

  export type ProductAttributeOptionUpsertWithWhereUniqueWithoutAttributeOptionInput = {
    where: ProductAttributeOptionWhereUniqueInput
    update: XOR<ProductAttributeOptionUpdateWithoutAttributeOptionInput, ProductAttributeOptionUncheckedUpdateWithoutAttributeOptionInput>
    create: XOR<ProductAttributeOptionCreateWithoutAttributeOptionInput, ProductAttributeOptionUncheckedCreateWithoutAttributeOptionInput>
  }

  export type ProductAttributeOptionUpdateWithWhereUniqueWithoutAttributeOptionInput = {
    where: ProductAttributeOptionWhereUniqueInput
    data: XOR<ProductAttributeOptionUpdateWithoutAttributeOptionInput, ProductAttributeOptionUncheckedUpdateWithoutAttributeOptionInput>
  }

  export type ProductAttributeOptionUpdateManyWithWhereWithoutAttributeOptionInput = {
    where: ProductAttributeOptionScalarWhereInput
    data: XOR<ProductAttributeOptionUpdateManyMutationInput, ProductAttributeOptionUncheckedUpdateManyWithoutAttributeOptionInput>
  }

  export type ProductCreateWithoutVariantsInput = {
    productName: string
    description: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
    attributeOptions?: ProductAttributeOptionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: number
    productName: string
    description: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
    attributeOptions?: ProductAttributeOptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    attributeOptions?: ProductAttributeOptionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    attributeOptions?: ProductAttributeOptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutAttributeOptionsInput = {
    productName: string
    description: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAttributeOptionsInput = {
    id?: number
    productName: string
    description: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAttributeOptionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAttributeOptionsInput, ProductUncheckedCreateWithoutAttributeOptionsInput>
  }

  export type AttributeOptionCreateWithoutProductsInput = {
    attribute: string
    attributeOption: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type AttributeOptionUncheckedCreateWithoutProductsInput = {
    id?: number
    attribute: string
    attributeOption: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type AttributeOptionCreateOrConnectWithoutProductsInput = {
    where: AttributeOptionWhereUniqueInput
    create: XOR<AttributeOptionCreateWithoutProductsInput, AttributeOptionUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutAttributeOptionsInput = {
    update: XOR<ProductUpdateWithoutAttributeOptionsInput, ProductUncheckedUpdateWithoutAttributeOptionsInput>
    create: XOR<ProductCreateWithoutAttributeOptionsInput, ProductUncheckedCreateWithoutAttributeOptionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAttributeOptionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAttributeOptionsInput, ProductUncheckedUpdateWithoutAttributeOptionsInput>
  }

  export type ProductUpdateWithoutAttributeOptionsInput = {
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAttributeOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type AttributeOptionUpsertWithoutProductsInput = {
    update: XOR<AttributeOptionUpdateWithoutProductsInput, AttributeOptionUncheckedUpdateWithoutProductsInput>
    create: XOR<AttributeOptionCreateWithoutProductsInput, AttributeOptionUncheckedCreateWithoutProductsInput>
    where?: AttributeOptionWhereInput
  }

  export type AttributeOptionUpdateToOneWithWhereWithoutProductsInput = {
    where?: AttributeOptionWhereInput
    data: XOR<AttributeOptionUpdateWithoutProductsInput, AttributeOptionUncheckedUpdateWithoutProductsInput>
  }

  export type AttributeOptionUpdateWithoutProductsInput = {
    attribute?: StringFieldUpdateOperationsInput | string
    attributeOption?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AttributeOptionUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    attribute?: StringFieldUpdateOperationsInput | string
    attributeOption?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ProductAttributeOptionCreateManyProductInput = {
    id?: number
    attributeOptionId: number
  }

  export type VariantCreateManyProductInput = {
    id?: number
    productName: string
    configuration: string
    nlConfiguration: string
    embedding: JsonNullValueInput | InputJsonValue
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ProductAttributeOptionUpdateWithoutProductInput = {
    attributeOption?: AttributeOptionUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductAttributeOptionUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributeOptionId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductAttributeOptionUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributeOptionId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantUpdateWithoutProductInput = {
    productName?: StringFieldUpdateOperationsInput | string
    configuration?: StringFieldUpdateOperationsInput | string
    nlConfiguration?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type VariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    configuration?: StringFieldUpdateOperationsInput | string
    nlConfiguration?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type VariantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    configuration?: StringFieldUpdateOperationsInput | string
    nlConfiguration?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ProductAttributeOptionCreateManyAttributeOptionInput = {
    id?: number
    productId: number
  }

  export type ProductAttributeOptionUpdateWithoutAttributeOptionInput = {
    product?: ProductUpdateOneRequiredWithoutAttributeOptionsNestedInput
  }

  export type ProductAttributeOptionUncheckedUpdateWithoutAttributeOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductAttributeOptionUncheckedUpdateManyWithoutAttributeOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}