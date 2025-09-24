
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
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Voter
 * 
 */
export type Voter = $Result.DefaultSelection<Prisma.$VoterPayload>
/**
 * Model Election
 * 
 */
export type Election = $Result.DefaultSelection<Prisma.$ElectionPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model Career
 * 
 */
export type Career = $Result.DefaultSelection<Prisma.$CareerPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administradors
 * const administradors = await prisma.administrador.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Administradors
   * const administradors = await prisma.administrador.findMany()
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
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voter`: Exposes CRUD operations for the **Voter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voters
    * const voters = await prisma.voter.findMany()
    * ```
    */
  get voter(): Prisma.VoterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.election`: Exposes CRUD operations for the **Election** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elections
    * const elections = await prisma.election.findMany()
    * ```
    */
  get election(): Prisma.ElectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **Career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.CareerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Administrador: 'Administrador',
    Voter: 'Voter',
    Election: 'Election',
    Candidate: 'Candidate',
    Vote: 'Vote',
    Proposal: 'Proposal',
    Career: 'Career',
    Result: 'Result',
    Role: 'Role'
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
      modelProps: "administrador" | "voter" | "election" | "candidate" | "vote" | "proposal" | "career" | "result" | "role"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Voter: {
        payload: Prisma.$VoterPayload<ExtArgs>
        fields: Prisma.VoterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          findFirst: {
            args: Prisma.VoterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          findMany: {
            args: Prisma.VoterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>[]
          }
          create: {
            args: Prisma.VoterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          createMany: {
            args: Prisma.VoterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>[]
          }
          delete: {
            args: Prisma.VoterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          update: {
            args: Prisma.VoterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          deleteMany: {
            args: Prisma.VoterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>[]
          }
          upsert: {
            args: Prisma.VoterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          aggregate: {
            args: Prisma.VoterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoter>
          }
          groupBy: {
            args: Prisma.VoterGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoterGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoterCountArgs<ExtArgs>
            result: $Utils.Optional<VoterCountAggregateOutputType> | number
          }
        }
      }
      Election: {
        payload: Prisma.$ElectionPayload<ExtArgs>
        fields: Prisma.ElectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          findFirst: {
            args: Prisma.ElectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          findMany: {
            args: Prisma.ElectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          create: {
            args: Prisma.ElectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          createMany: {
            args: Prisma.ElectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ElectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          delete: {
            args: Prisma.ElectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          update: {
            args: Prisma.ElectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          deleteMany: {
            args: Prisma.ElectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ElectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ElectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>[]
          }
          upsert: {
            args: Prisma.ElectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ElectionPayload>
          }
          aggregate: {
            args: Prisma.ElectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElection>
          }
          groupBy: {
            args: Prisma.ElectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElectionCountArgs<ExtArgs>
            result: $Utils.Optional<ElectionCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      Career: {
        payload: Prisma.$CareerPayload<ExtArgs>
        fields: Prisma.CareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findFirst: {
            args: Prisma.CareerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findMany: {
            args: Prisma.CareerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          create: {
            args: Prisma.CareerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          createMany: {
            args: Prisma.CareerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          delete: {
            args: Prisma.CareerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          update: {
            args: Prisma.CareerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          deleteMany: {
            args: Prisma.CareerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          upsert: {
            args: Prisma.CareerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.CareerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerCountArgs<ExtArgs>
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    administrador?: AdministradorOmit
    voter?: VoterOmit
    election?: ElectionOmit
    candidate?: CandidateOmit
    vote?: VoteOmit
    proposal?: ProposalOmit
    career?: CareerOmit
    result?: ResultOmit
    role?: RoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AdministradorCountOutputType
   */

  export type AdministradorCountOutputType = {
    elections: number
  }

  export type AdministradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elections?: boolean | AdministradorCountOutputTypeCountElectionsArgs
  }

  // Custom InputTypes
  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministradorCountOutputType
     */
    select?: AdministradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountElectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionWhereInput
  }


  /**
   * Count Type VoterCountOutputType
   */

  export type VoterCountOutputType = {
    vote: number
  }

  export type VoterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vote?: boolean | VoterCountOutputTypeCountVoteArgs
  }

  // Custom InputTypes
  /**
   * VoterCountOutputType without action
   */
  export type VoterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterCountOutputType
     */
    select?: VoterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoterCountOutputType without action
   */
  export type VoterCountOutputTypeCountVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type ElectionCountOutputType
   */

  export type ElectionCountOutputType = {
    candidates: number
    voters: number
    Vote: number
  }

  export type ElectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | ElectionCountOutputTypeCountCandidatesArgs
    voters?: boolean | ElectionCountOutputTypeCountVotersArgs
    Vote?: boolean | ElectionCountOutputTypeCountVoteArgs
  }

  // Custom InputTypes
  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCountOutputType
     */
    select?: ElectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountVotersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoterWhereInput
  }

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    proposals: number
    votes: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposals?: boolean | CandidateCountOutputTypeCountProposalsArgs
    votes?: boolean | CandidateCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type CareerCountOutputType
   */

  export type CareerCountOutputType = {
    voters: number
    candidates: number
  }

  export type CareerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voters?: boolean | CareerCountOutputTypeCountVotersArgs
    candidates?: boolean | CareerCountOutputTypeCountCandidatesArgs
  }

  // Custom InputTypes
  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerCountOutputType
     */
    select?: CareerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountVotersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoterWhereInput
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    voters: number
    candidates: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voters?: boolean | RoleCountOutputTypeCountVotersArgs
    candidates?: boolean | RoleCountOutputTypeCountCandidatesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountVotersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoterWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    id_admin: number | null
    num_doc_admin: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    id_admin: number | null
    num_doc_admin: bigint | null
  }

  export type AdministradorMinAggregateOutputType = {
    id_admin: number | null
    nombre_admin: string | null
    apellido_admin: string | null
    tipo_doc_admin: string | null
    num_doc_admin: bigint | null
    correo_admin: string | null
    contrasena_admin: string | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id_admin: number | null
    nombre_admin: string | null
    apellido_admin: string | null
    tipo_doc_admin: string | null
    num_doc_admin: bigint | null
    correo_admin: string | null
    contrasena_admin: string | null
  }

  export type AdministradorCountAggregateOutputType = {
    id_admin: number
    nombre_admin: number
    apellido_admin: number
    tipo_doc_admin: number
    num_doc_admin: number
    correo_admin: number
    contrasena_admin: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    id_admin?: true
    num_doc_admin?: true
  }

  export type AdministradorSumAggregateInputType = {
    id_admin?: true
    num_doc_admin?: true
  }

  export type AdministradorMinAggregateInputType = {
    id_admin?: true
    nombre_admin?: true
    apellido_admin?: true
    tipo_doc_admin?: true
    num_doc_admin?: true
    correo_admin?: true
    contrasena_admin?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id_admin?: true
    nombre_admin?: true
    apellido_admin?: true
    tipo_doc_admin?: true
    num_doc_admin?: true
    correo_admin?: true
    contrasena_admin?: true
  }

  export type AdministradorCountAggregateInputType = {
    id_admin?: true
    nombre_admin?: true
    apellido_admin?: true
    tipo_doc_admin?: true
    num_doc_admin?: true
    correo_admin?: true
    contrasena_admin?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id_admin: number
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: bigint
    correo_admin: string
    contrasena_admin: string
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    nombre_admin?: boolean
    apellido_admin?: boolean
    tipo_doc_admin?: boolean
    num_doc_admin?: boolean
    correo_admin?: boolean
    contrasena_admin?: boolean
    elections?: boolean | Administrador$electionsArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    nombre_admin?: boolean
    apellido_admin?: boolean
    tipo_doc_admin?: boolean
    num_doc_admin?: boolean
    correo_admin?: boolean
    contrasena_admin?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    nombre_admin?: boolean
    apellido_admin?: boolean
    tipo_doc_admin?: boolean
    num_doc_admin?: boolean
    correo_admin?: boolean
    contrasena_admin?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    id_admin?: boolean
    nombre_admin?: boolean
    apellido_admin?: boolean
    tipo_doc_admin?: boolean
    num_doc_admin?: boolean
    correo_admin?: boolean
    contrasena_admin?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_admin" | "nombre_admin" | "apellido_admin" | "tipo_doc_admin" | "num_doc_admin" | "correo_admin" | "contrasena_admin", ExtArgs["result"]["administrador"]>
  export type AdministradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elections?: boolean | Administrador$electionsArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdministradorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdministradorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {
      elections: Prisma.$ElectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_admin: number
      nombre_admin: string
      apellido_admin: string
      tipo_doc_admin: string
      num_doc_admin: bigint
      correo_admin: string
      contrasena_admin: string
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id_admin`
     * const administradorWithId_adminOnly = await prisma.administrador.findMany({ select: { id_admin: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradors and returns the data saved in the database.
     * @param {AdministradorCreateManyAndReturnArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradors and only return the `id_admin`
     * const administradorWithId_adminOnly = await prisma.administrador.createManyAndReturn({
     *   select: { id_admin: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministradorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors and returns the data updated in the database.
     * @param {AdministradorUpdateManyAndReturnArgs} args - Arguments to update many Administradors.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administradors and only return the `id_admin`
     * const administradorWithId_adminOnly = await prisma.administrador.updateManyAndReturn({
     *   select: { id_admin: true },
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
    updateManyAndReturn<T extends AdministradorUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
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
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elections<T extends Administrador$electionsArgs<ExtArgs> = {}>(args?: Subset<T, Administrador$electionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Administrador model
   */
  interface AdministradorFieldRefs {
    readonly id_admin: FieldRef<"Administrador", 'Int'>
    readonly nombre_admin: FieldRef<"Administrador", 'String'>
    readonly apellido_admin: FieldRef<"Administrador", 'String'>
    readonly tipo_doc_admin: FieldRef<"Administrador", 'String'>
    readonly num_doc_admin: FieldRef<"Administrador", 'BigInt'>
    readonly correo_admin: FieldRef<"Administrador", 'String'>
    readonly contrasena_admin: FieldRef<"Administrador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador createManyAndReturn
   */
  export type AdministradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador updateManyAndReturn
   */
  export type AdministradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to delete.
     */
    limit?: number
  }

  /**
   * Administrador.elections
   */
  export type Administrador$electionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    where?: ElectionWhereInput
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    cursor?: ElectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
  }


  /**
   * Model Voter
   */

  export type AggregateVoter = {
    _count: VoterCountAggregateOutputType | null
    _avg: VoterAvgAggregateOutputType | null
    _sum: VoterSumAggregateOutputType | null
    _min: VoterMinAggregateOutputType | null
    _max: VoterMaxAggregateOutputType | null
  }

  export type VoterAvgAggregateOutputType = {
    id_voter: number | null
    num_doc_voter: number | null
    roleId: number | null
    electionId: number | null
    careerId: number | null
  }

  export type VoterSumAggregateOutputType = {
    id_voter: number | null
    num_doc_voter: bigint | null
    roleId: number | null
    electionId: number | null
    careerId: number | null
  }

  export type VoterMinAggregateOutputType = {
    id_voter: number | null
    nombre_voter: string | null
    apellido_voter: string | null
    tipo_doc_voter: string | null
    num_doc_voter: bigint | null
    correo_voter: string | null
    estado_voter: string | null
    contrasena_voter: string | null
    roleId: number | null
    electionId: number | null
    careerId: number | null
  }

  export type VoterMaxAggregateOutputType = {
    id_voter: number | null
    nombre_voter: string | null
    apellido_voter: string | null
    tipo_doc_voter: string | null
    num_doc_voter: bigint | null
    correo_voter: string | null
    estado_voter: string | null
    contrasena_voter: string | null
    roleId: number | null
    electionId: number | null
    careerId: number | null
  }

  export type VoterCountAggregateOutputType = {
    id_voter: number
    nombre_voter: number
    apellido_voter: number
    tipo_doc_voter: number
    num_doc_voter: number
    correo_voter: number
    estado_voter: number
    contrasena_voter: number
    roleId: number
    electionId: number
    careerId: number
    _all: number
  }


  export type VoterAvgAggregateInputType = {
    id_voter?: true
    num_doc_voter?: true
    roleId?: true
    electionId?: true
    careerId?: true
  }

  export type VoterSumAggregateInputType = {
    id_voter?: true
    num_doc_voter?: true
    roleId?: true
    electionId?: true
    careerId?: true
  }

  export type VoterMinAggregateInputType = {
    id_voter?: true
    nombre_voter?: true
    apellido_voter?: true
    tipo_doc_voter?: true
    num_doc_voter?: true
    correo_voter?: true
    estado_voter?: true
    contrasena_voter?: true
    roleId?: true
    electionId?: true
    careerId?: true
  }

  export type VoterMaxAggregateInputType = {
    id_voter?: true
    nombre_voter?: true
    apellido_voter?: true
    tipo_doc_voter?: true
    num_doc_voter?: true
    correo_voter?: true
    estado_voter?: true
    contrasena_voter?: true
    roleId?: true
    electionId?: true
    careerId?: true
  }

  export type VoterCountAggregateInputType = {
    id_voter?: true
    nombre_voter?: true
    apellido_voter?: true
    tipo_doc_voter?: true
    num_doc_voter?: true
    correo_voter?: true
    estado_voter?: true
    contrasena_voter?: true
    roleId?: true
    electionId?: true
    careerId?: true
    _all?: true
  }

  export type VoterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voter to aggregate.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Voters
    **/
    _count?: true | VoterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoterMaxAggregateInputType
  }

  export type GetVoterAggregateType<T extends VoterAggregateArgs> = {
        [P in keyof T & keyof AggregateVoter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoter[P]>
      : GetScalarType<T[P], AggregateVoter[P]>
  }




  export type VoterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoterWhereInput
    orderBy?: VoterOrderByWithAggregationInput | VoterOrderByWithAggregationInput[]
    by: VoterScalarFieldEnum[] | VoterScalarFieldEnum
    having?: VoterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoterCountAggregateInputType | true
    _avg?: VoterAvgAggregateInputType
    _sum?: VoterSumAggregateInputType
    _min?: VoterMinAggregateInputType
    _max?: VoterMaxAggregateInputType
  }

  export type VoterGroupByOutputType = {
    id_voter: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    roleId: number
    electionId: number | null
    careerId: number
    _count: VoterCountAggregateOutputType | null
    _avg: VoterAvgAggregateOutputType | null
    _sum: VoterSumAggregateOutputType | null
    _min: VoterMinAggregateOutputType | null
    _max: VoterMaxAggregateOutputType | null
  }

  type GetVoterGroupByPayload<T extends VoterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoterGroupByOutputType[P]>
            : GetScalarType<T[P], VoterGroupByOutputType[P]>
        }
      >
    >


  export type VoterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voter?: boolean
    nombre_voter?: boolean
    apellido_voter?: boolean
    tipo_doc_voter?: boolean
    num_doc_voter?: boolean
    correo_voter?: boolean
    estado_voter?: boolean
    contrasena_voter?: boolean
    roleId?: boolean
    electionId?: boolean
    careerId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    election?: boolean | Voter$electionArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    vote?: boolean | Voter$voteArgs<ExtArgs>
    _count?: boolean | VoterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voter"]>

  export type VoterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voter?: boolean
    nombre_voter?: boolean
    apellido_voter?: boolean
    tipo_doc_voter?: boolean
    num_doc_voter?: boolean
    correo_voter?: boolean
    estado_voter?: boolean
    contrasena_voter?: boolean
    roleId?: boolean
    electionId?: boolean
    careerId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    election?: boolean | Voter$electionArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voter"]>

  export type VoterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voter?: boolean
    nombre_voter?: boolean
    apellido_voter?: boolean
    tipo_doc_voter?: boolean
    num_doc_voter?: boolean
    correo_voter?: boolean
    estado_voter?: boolean
    contrasena_voter?: boolean
    roleId?: boolean
    electionId?: boolean
    careerId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    election?: boolean | Voter$electionArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voter"]>

  export type VoterSelectScalar = {
    id_voter?: boolean
    nombre_voter?: boolean
    apellido_voter?: boolean
    tipo_doc_voter?: boolean
    num_doc_voter?: boolean
    correo_voter?: boolean
    estado_voter?: boolean
    contrasena_voter?: boolean
    roleId?: boolean
    electionId?: boolean
    careerId?: boolean
  }

  export type VoterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_voter" | "nombre_voter" | "apellido_voter" | "tipo_doc_voter" | "num_doc_voter" | "correo_voter" | "estado_voter" | "contrasena_voter" | "roleId" | "electionId" | "careerId", ExtArgs["result"]["voter"]>
  export type VoterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    election?: boolean | Voter$electionArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    vote?: boolean | Voter$voteArgs<ExtArgs>
    _count?: boolean | VoterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    election?: boolean | Voter$electionArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }
  export type VoterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    election?: boolean | Voter$electionArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }

  export type $VoterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voter"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      election: Prisma.$ElectionPayload<ExtArgs> | null
      career: Prisma.$CareerPayload<ExtArgs>
      vote: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_voter: number
      nombre_voter: string
      apellido_voter: string
      tipo_doc_voter: string
      num_doc_voter: bigint
      correo_voter: string
      estado_voter: string
      contrasena_voter: string
      roleId: number
      electionId: number | null
      careerId: number
    }, ExtArgs["result"]["voter"]>
    composites: {}
  }

  type VoterGetPayload<S extends boolean | null | undefined | VoterDefaultArgs> = $Result.GetResult<Prisma.$VoterPayload, S>

  type VoterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoterCountAggregateInputType | true
    }

  export interface VoterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voter'], meta: { name: 'Voter' } }
    /**
     * Find zero or one Voter that matches the filter.
     * @param {VoterFindUniqueArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoterFindUniqueArgs>(args: SelectSubset<T, VoterFindUniqueArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoterFindUniqueOrThrowArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoterFindUniqueOrThrowArgs>(args: SelectSubset<T, VoterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterFindFirstArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoterFindFirstArgs>(args?: SelectSubset<T, VoterFindFirstArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterFindFirstOrThrowArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoterFindFirstOrThrowArgs>(args?: SelectSubset<T, VoterFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voters
     * const voters = await prisma.voter.findMany()
     * 
     * // Get first 10 Voters
     * const voters = await prisma.voter.findMany({ take: 10 })
     * 
     * // Only select the `id_voter`
     * const voterWithId_voterOnly = await prisma.voter.findMany({ select: { id_voter: true } })
     * 
     */
    findMany<T extends VoterFindManyArgs>(args?: SelectSubset<T, VoterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voter.
     * @param {VoterCreateArgs} args - Arguments to create a Voter.
     * @example
     * // Create one Voter
     * const Voter = await prisma.voter.create({
     *   data: {
     *     // ... data to create a Voter
     *   }
     * })
     * 
     */
    create<T extends VoterCreateArgs>(args: SelectSubset<T, VoterCreateArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voters.
     * @param {VoterCreateManyArgs} args - Arguments to create many Voters.
     * @example
     * // Create many Voters
     * const voter = await prisma.voter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoterCreateManyArgs>(args?: SelectSubset<T, VoterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voters and returns the data saved in the database.
     * @param {VoterCreateManyAndReturnArgs} args - Arguments to create many Voters.
     * @example
     * // Create many Voters
     * const voter = await prisma.voter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voters and only return the `id_voter`
     * const voterWithId_voterOnly = await prisma.voter.createManyAndReturn({
     *   select: { id_voter: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoterCreateManyAndReturnArgs>(args?: SelectSubset<T, VoterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voter.
     * @param {VoterDeleteArgs} args - Arguments to delete one Voter.
     * @example
     * // Delete one Voter
     * const Voter = await prisma.voter.delete({
     *   where: {
     *     // ... filter to delete one Voter
     *   }
     * })
     * 
     */
    delete<T extends VoterDeleteArgs>(args: SelectSubset<T, VoterDeleteArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voter.
     * @param {VoterUpdateArgs} args - Arguments to update one Voter.
     * @example
     * // Update one Voter
     * const voter = await prisma.voter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoterUpdateArgs>(args: SelectSubset<T, VoterUpdateArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voters.
     * @param {VoterDeleteManyArgs} args - Arguments to filter Voters to delete.
     * @example
     * // Delete a few Voters
     * const { count } = await prisma.voter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoterDeleteManyArgs>(args?: SelectSubset<T, VoterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voters
     * const voter = await prisma.voter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoterUpdateManyArgs>(args: SelectSubset<T, VoterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voters and returns the data updated in the database.
     * @param {VoterUpdateManyAndReturnArgs} args - Arguments to update many Voters.
     * @example
     * // Update many Voters
     * const voter = await prisma.voter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voters and only return the `id_voter`
     * const voterWithId_voterOnly = await prisma.voter.updateManyAndReturn({
     *   select: { id_voter: true },
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
    updateManyAndReturn<T extends VoterUpdateManyAndReturnArgs>(args: SelectSubset<T, VoterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voter.
     * @param {VoterUpsertArgs} args - Arguments to update or create a Voter.
     * @example
     * // Update or create a Voter
     * const voter = await prisma.voter.upsert({
     *   create: {
     *     // ... data to create a Voter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voter we want to update
     *   }
     * })
     */
    upsert<T extends VoterUpsertArgs>(args: SelectSubset<T, VoterUpsertArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterCountArgs} args - Arguments to filter Voters to count.
     * @example
     * // Count the number of Voters
     * const count = await prisma.voter.count({
     *   where: {
     *     // ... the filter for the Voters we want to count
     *   }
     * })
    **/
    count<T extends VoterCountArgs>(
      args?: Subset<T, VoterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoterAggregateArgs>(args: Subset<T, VoterAggregateArgs>): Prisma.PrismaPromise<GetVoterAggregateType<T>>

    /**
     * Group by Voter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterGroupByArgs} args - Group by arguments.
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
      T extends VoterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoterGroupByArgs['orderBy'] }
        : { orderBy?: VoterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voter model
   */
  readonly fields: VoterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    election<T extends Voter$electionArgs<ExtArgs> = {}>(args?: Subset<T, Voter$electionArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vote<T extends Voter$voteArgs<ExtArgs> = {}>(args?: Subset<T, Voter$voteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Voter model
   */
  interface VoterFieldRefs {
    readonly id_voter: FieldRef<"Voter", 'Int'>
    readonly nombre_voter: FieldRef<"Voter", 'String'>
    readonly apellido_voter: FieldRef<"Voter", 'String'>
    readonly tipo_doc_voter: FieldRef<"Voter", 'String'>
    readonly num_doc_voter: FieldRef<"Voter", 'BigInt'>
    readonly correo_voter: FieldRef<"Voter", 'String'>
    readonly estado_voter: FieldRef<"Voter", 'String'>
    readonly contrasena_voter: FieldRef<"Voter", 'String'>
    readonly roleId: FieldRef<"Voter", 'Int'>
    readonly electionId: FieldRef<"Voter", 'Int'>
    readonly careerId: FieldRef<"Voter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Voter findUnique
   */
  export type VoterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter findUniqueOrThrow
   */
  export type VoterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter findFirst
   */
  export type VoterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voters.
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voters.
     */
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Voter findFirstOrThrow
   */
  export type VoterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voters.
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voters.
     */
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Voter findMany
   */
  export type VoterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voters to fetch.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Voters.
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Voter create
   */
  export type VoterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * The data needed to create a Voter.
     */
    data: XOR<VoterCreateInput, VoterUncheckedCreateInput>
  }

  /**
   * Voter createMany
   */
  export type VoterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Voters.
     */
    data: VoterCreateManyInput | VoterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voter createManyAndReturn
   */
  export type VoterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * The data used to create many Voters.
     */
    data: VoterCreateManyInput | VoterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voter update
   */
  export type VoterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * The data needed to update a Voter.
     */
    data: XOR<VoterUpdateInput, VoterUncheckedUpdateInput>
    /**
     * Choose, which Voter to update.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter updateMany
   */
  export type VoterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Voters.
     */
    data: XOR<VoterUpdateManyMutationInput, VoterUncheckedUpdateManyInput>
    /**
     * Filter which Voters to update
     */
    where?: VoterWhereInput
    /**
     * Limit how many Voters to update.
     */
    limit?: number
  }

  /**
   * Voter updateManyAndReturn
   */
  export type VoterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * The data used to update Voters.
     */
    data: XOR<VoterUpdateManyMutationInput, VoterUncheckedUpdateManyInput>
    /**
     * Filter which Voters to update
     */
    where?: VoterWhereInput
    /**
     * Limit how many Voters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voter upsert
   */
  export type VoterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * The filter to search for the Voter to update in case it exists.
     */
    where: VoterWhereUniqueInput
    /**
     * In case the Voter found by the `where` argument doesn't exist, create a new Voter with this data.
     */
    create: XOR<VoterCreateInput, VoterUncheckedCreateInput>
    /**
     * In case the Voter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoterUpdateInput, VoterUncheckedUpdateInput>
  }

  /**
   * Voter delete
   */
  export type VoterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter which Voter to delete.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter deleteMany
   */
  export type VoterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voters to delete
     */
    where?: VoterWhereInput
    /**
     * Limit how many Voters to delete.
     */
    limit?: number
  }

  /**
   * Voter.election
   */
  export type Voter$electionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    where?: ElectionWhereInput
  }

  /**
   * Voter.vote
   */
  export type Voter$voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Voter without action
   */
  export type VoterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
  }


  /**
   * Model Election
   */

  export type AggregateElection = {
    _count: ElectionCountAggregateOutputType | null
    _avg: ElectionAvgAggregateOutputType | null
    _sum: ElectionSumAggregateOutputType | null
    _min: ElectionMinAggregateOutputType | null
    _max: ElectionMaxAggregateOutputType | null
  }

  export type ElectionAvgAggregateOutputType = {
    id_election: number | null
    admin_id: number | null
  }

  export type ElectionSumAggregateOutputType = {
    id_election: number | null
    admin_id: number | null
  }

  export type ElectionMinAggregateOutputType = {
    id_election: number | null
    nombre_election: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    estado_election: string | null
    admin_id: number | null
  }

  export type ElectionMaxAggregateOutputType = {
    id_election: number | null
    nombre_election: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    estado_election: string | null
    admin_id: number | null
  }

  export type ElectionCountAggregateOutputType = {
    id_election: number
    nombre_election: number
    fecha_inicio: number
    fecha_fin: number
    estado_election: number
    admin_id: number
    _all: number
  }


  export type ElectionAvgAggregateInputType = {
    id_election?: true
    admin_id?: true
  }

  export type ElectionSumAggregateInputType = {
    id_election?: true
    admin_id?: true
  }

  export type ElectionMinAggregateInputType = {
    id_election?: true
    nombre_election?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado_election?: true
    admin_id?: true
  }

  export type ElectionMaxAggregateInputType = {
    id_election?: true
    nombre_election?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado_election?: true
    admin_id?: true
  }

  export type ElectionCountAggregateInputType = {
    id_election?: true
    nombre_election?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado_election?: true
    admin_id?: true
    _all?: true
  }

  export type ElectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Election to aggregate.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Elections
    **/
    _count?: true | ElectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionMaxAggregateInputType
  }

  export type GetElectionAggregateType<T extends ElectionAggregateArgs> = {
        [P in keyof T & keyof AggregateElection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElection[P]>
      : GetScalarType<T[P], AggregateElection[P]>
  }




  export type ElectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionWhereInput
    orderBy?: ElectionOrderByWithAggregationInput | ElectionOrderByWithAggregationInput[]
    by: ElectionScalarFieldEnum[] | ElectionScalarFieldEnum
    having?: ElectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionCountAggregateInputType | true
    _avg?: ElectionAvgAggregateInputType
    _sum?: ElectionSumAggregateInputType
    _min?: ElectionMinAggregateInputType
    _max?: ElectionMaxAggregateInputType
  }

  export type ElectionGroupByOutputType = {
    id_election: number
    nombre_election: string
    fecha_inicio: Date
    fecha_fin: Date
    estado_election: string
    admin_id: number
    _count: ElectionCountAggregateOutputType | null
    _avg: ElectionAvgAggregateOutputType | null
    _sum: ElectionSumAggregateOutputType | null
    _min: ElectionMinAggregateOutputType | null
    _max: ElectionMaxAggregateOutputType | null
  }

  type GetElectionGroupByPayload<T extends ElectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionGroupByOutputType[P]>
        }
      >
    >


  export type ElectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_election?: boolean
    nombre_election?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado_election?: boolean
    admin_id?: boolean
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
    candidates?: boolean | Election$candidatesArgs<ExtArgs>
    voters?: boolean | Election$votersArgs<ExtArgs>
    result?: boolean | Election$resultArgs<ExtArgs>
    Vote?: boolean | Election$VoteArgs<ExtArgs>
    _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_election?: boolean
    nombre_election?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado_election?: boolean
    admin_id?: boolean
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_election?: boolean
    nombre_election?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado_election?: boolean
    admin_id?: boolean
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["election"]>

  export type ElectionSelectScalar = {
    id_election?: boolean
    nombre_election?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado_election?: boolean
    admin_id?: boolean
  }

  export type ElectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_election" | "nombre_election" | "fecha_inicio" | "fecha_fin" | "estado_election" | "admin_id", ExtArgs["result"]["election"]>
  export type ElectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
    candidates?: boolean | Election$candidatesArgs<ExtArgs>
    voters?: boolean | Election$votersArgs<ExtArgs>
    result?: boolean | Election$resultArgs<ExtArgs>
    Vote?: boolean | Election$VoteArgs<ExtArgs>
    _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ElectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
  }
  export type ElectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
  }

  export type $ElectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Election"
    objects: {
      administrador: Prisma.$AdministradorPayload<ExtArgs>
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
      voters: Prisma.$VoterPayload<ExtArgs>[]
      result: Prisma.$ResultPayload<ExtArgs> | null
      Vote: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_election: number
      nombre_election: string
      fecha_inicio: Date
      fecha_fin: Date
      estado_election: string
      admin_id: number
    }, ExtArgs["result"]["election"]>
    composites: {}
  }

  type ElectionGetPayload<S extends boolean | null | undefined | ElectionDefaultArgs> = $Result.GetResult<Prisma.$ElectionPayload, S>

  type ElectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ElectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectionCountAggregateInputType | true
    }

  export interface ElectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Election'], meta: { name: 'Election' } }
    /**
     * Find zero or one Election that matches the filter.
     * @param {ElectionFindUniqueArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElectionFindUniqueArgs>(args: SelectSubset<T, ElectionFindUniqueArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Election that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElectionFindUniqueOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ElectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Election that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindFirstArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElectionFindFirstArgs>(args?: SelectSubset<T, ElectionFindFirstArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Election that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindFirstOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ElectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elections
     * const elections = await prisma.election.findMany()
     * 
     * // Get first 10 Elections
     * const elections = await prisma.election.findMany({ take: 10 })
     * 
     * // Only select the `id_election`
     * const electionWithId_electionOnly = await prisma.election.findMany({ select: { id_election: true } })
     * 
     */
    findMany<T extends ElectionFindManyArgs>(args?: SelectSubset<T, ElectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Election.
     * @param {ElectionCreateArgs} args - Arguments to create a Election.
     * @example
     * // Create one Election
     * const Election = await prisma.election.create({
     *   data: {
     *     // ... data to create a Election
     *   }
     * })
     * 
     */
    create<T extends ElectionCreateArgs>(args: SelectSubset<T, ElectionCreateArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elections.
     * @param {ElectionCreateManyArgs} args - Arguments to create many Elections.
     * @example
     * // Create many Elections
     * const election = await prisma.election.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ElectionCreateManyArgs>(args?: SelectSubset<T, ElectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Elections and returns the data saved in the database.
     * @param {ElectionCreateManyAndReturnArgs} args - Arguments to create many Elections.
     * @example
     * // Create many Elections
     * const election = await prisma.election.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Elections and only return the `id_election`
     * const electionWithId_electionOnly = await prisma.election.createManyAndReturn({
     *   select: { id_election: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ElectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ElectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Election.
     * @param {ElectionDeleteArgs} args - Arguments to delete one Election.
     * @example
     * // Delete one Election
     * const Election = await prisma.election.delete({
     *   where: {
     *     // ... filter to delete one Election
     *   }
     * })
     * 
     */
    delete<T extends ElectionDeleteArgs>(args: SelectSubset<T, ElectionDeleteArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Election.
     * @param {ElectionUpdateArgs} args - Arguments to update one Election.
     * @example
     * // Update one Election
     * const election = await prisma.election.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ElectionUpdateArgs>(args: SelectSubset<T, ElectionUpdateArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elections.
     * @param {ElectionDeleteManyArgs} args - Arguments to filter Elections to delete.
     * @example
     * // Delete a few Elections
     * const { count } = await prisma.election.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ElectionDeleteManyArgs>(args?: SelectSubset<T, ElectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elections
     * const election = await prisma.election.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ElectionUpdateManyArgs>(args: SelectSubset<T, ElectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections and returns the data updated in the database.
     * @param {ElectionUpdateManyAndReturnArgs} args - Arguments to update many Elections.
     * @example
     * // Update many Elections
     * const election = await prisma.election.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Elections and only return the `id_election`
     * const electionWithId_electionOnly = await prisma.election.updateManyAndReturn({
     *   select: { id_election: true },
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
    updateManyAndReturn<T extends ElectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ElectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Election.
     * @param {ElectionUpsertArgs} args - Arguments to update or create a Election.
     * @example
     * // Update or create a Election
     * const election = await prisma.election.upsert({
     *   create: {
     *     // ... data to create a Election
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Election we want to update
     *   }
     * })
     */
    upsert<T extends ElectionUpsertArgs>(args: SelectSubset<T, ElectionUpsertArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionCountArgs} args - Arguments to filter Elections to count.
     * @example
     * // Count the number of Elections
     * const count = await prisma.election.count({
     *   where: {
     *     // ... the filter for the Elections we want to count
     *   }
     * })
    **/
    count<T extends ElectionCountArgs>(
      args?: Subset<T, ElectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElectionAggregateArgs>(args: Subset<T, ElectionAggregateArgs>): Prisma.PrismaPromise<GetElectionAggregateType<T>>

    /**
     * Group by Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionGroupByArgs} args - Group by arguments.
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
      T extends ElectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectionGroupByArgs['orderBy'] }
        : { orderBy?: ElectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ElectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Election model
   */
  readonly fields: ElectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Election.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends AdministradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdministradorDefaultArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidates<T extends Election$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Election$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voters<T extends Election$votersArgs<ExtArgs> = {}>(args?: Subset<T, Election$votersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    result<T extends Election$resultArgs<ExtArgs> = {}>(args?: Subset<T, Election$resultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Vote<T extends Election$VoteArgs<ExtArgs> = {}>(args?: Subset<T, Election$VoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Election model
   */
  interface ElectionFieldRefs {
    readonly id_election: FieldRef<"Election", 'Int'>
    readonly nombre_election: FieldRef<"Election", 'String'>
    readonly fecha_inicio: FieldRef<"Election", 'DateTime'>
    readonly fecha_fin: FieldRef<"Election", 'DateTime'>
    readonly estado_election: FieldRef<"Election", 'String'>
    readonly admin_id: FieldRef<"Election", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Election findUnique
   */
  export type ElectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election findUniqueOrThrow
   */
  export type ElectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election findFirst
   */
  export type ElectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election findFirstOrThrow
   */
  export type ElectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Election to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election findMany
   */
  export type ElectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter, which Elections to fetch.
     */
    where?: ElectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionOrderByWithRelationInput | ElectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Elections.
     */
    cursor?: ElectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[]
  }

  /**
   * Election create
   */
  export type ElectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Election.
     */
    data: XOR<ElectionCreateInput, ElectionUncheckedCreateInput>
  }

  /**
   * Election createMany
   */
  export type ElectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Elections.
     */
    data: ElectionCreateManyInput | ElectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Election createManyAndReturn
   */
  export type ElectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * The data used to create many Elections.
     */
    data: ElectionCreateManyInput | ElectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Election update
   */
  export type ElectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Election.
     */
    data: XOR<ElectionUpdateInput, ElectionUncheckedUpdateInput>
    /**
     * Choose, which Election to update.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election updateMany
   */
  export type ElectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Elections.
     */
    data: XOR<ElectionUpdateManyMutationInput, ElectionUncheckedUpdateManyInput>
    /**
     * Filter which Elections to update
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to update.
     */
    limit?: number
  }

  /**
   * Election updateManyAndReturn
   */
  export type ElectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * The data used to update Elections.
     */
    data: XOR<ElectionUpdateManyMutationInput, ElectionUncheckedUpdateManyInput>
    /**
     * Filter which Elections to update
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Election upsert
   */
  export type ElectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Election to update in case it exists.
     */
    where: ElectionWhereUniqueInput
    /**
     * In case the Election found by the `where` argument doesn't exist, create a new Election with this data.
     */
    create: XOR<ElectionCreateInput, ElectionUncheckedCreateInput>
    /**
     * In case the Election was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectionUpdateInput, ElectionUncheckedUpdateInput>
  }

  /**
   * Election delete
   */
  export type ElectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    /**
     * Filter which Election to delete.
     */
    where: ElectionWhereUniqueInput
  }

  /**
   * Election deleteMany
   */
  export type ElectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elections to delete
     */
    where?: ElectionWhereInput
    /**
     * Limit how many Elections to delete.
     */
    limit?: number
  }

  /**
   * Election.candidates
   */
  export type Election$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Election.voters
   */
  export type Election$votersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    where?: VoterWhereInput
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    cursor?: VoterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Election.result
   */
  export type Election$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
  }

  /**
   * Election.Vote
   */
  export type Election$VoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Election without action
   */
  export type ElectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateAvgAggregateOutputType = {
    id_candidate: number | null
    num_doc_candidate: number | null
    roleId: number | null
    careerId: number | null
    electionId: number | null
  }

  export type CandidateSumAggregateOutputType = {
    id_candidate: number | null
    num_doc_candidate: bigint | null
    roleId: number | null
    careerId: number | null
    electionId: number | null
  }

  export type CandidateMinAggregateOutputType = {
    id_candidate: number | null
    nombre_candidate: string | null
    apellido_candidate: string | null
    tipo_doc_candidate: string | null
    num_doc_candidate: bigint | null
    correo_candidate: string | null
    estado_candidate: string | null
    foto_candidate: string | null
    contrasena_candidate: string | null
    roleId: number | null
    careerId: number | null
    electionId: number | null
  }

  export type CandidateMaxAggregateOutputType = {
    id_candidate: number | null
    nombre_candidate: string | null
    apellido_candidate: string | null
    tipo_doc_candidate: string | null
    num_doc_candidate: bigint | null
    correo_candidate: string | null
    estado_candidate: string | null
    foto_candidate: string | null
    contrasena_candidate: string | null
    roleId: number | null
    careerId: number | null
    electionId: number | null
  }

  export type CandidateCountAggregateOutputType = {
    id_candidate: number
    nombre_candidate: number
    apellido_candidate: number
    tipo_doc_candidate: number
    num_doc_candidate: number
    correo_candidate: number
    estado_candidate: number
    foto_candidate: number
    contrasena_candidate: number
    roleId: number
    careerId: number
    electionId: number
    _all: number
  }


  export type CandidateAvgAggregateInputType = {
    id_candidate?: true
    num_doc_candidate?: true
    roleId?: true
    careerId?: true
    electionId?: true
  }

  export type CandidateSumAggregateInputType = {
    id_candidate?: true
    num_doc_candidate?: true
    roleId?: true
    careerId?: true
    electionId?: true
  }

  export type CandidateMinAggregateInputType = {
    id_candidate?: true
    nombre_candidate?: true
    apellido_candidate?: true
    tipo_doc_candidate?: true
    num_doc_candidate?: true
    correo_candidate?: true
    estado_candidate?: true
    foto_candidate?: true
    contrasena_candidate?: true
    roleId?: true
    careerId?: true
    electionId?: true
  }

  export type CandidateMaxAggregateInputType = {
    id_candidate?: true
    nombre_candidate?: true
    apellido_candidate?: true
    tipo_doc_candidate?: true
    num_doc_candidate?: true
    correo_candidate?: true
    estado_candidate?: true
    foto_candidate?: true
    contrasena_candidate?: true
    roleId?: true
    careerId?: true
    electionId?: true
  }

  export type CandidateCountAggregateInputType = {
    id_candidate?: true
    nombre_candidate?: true
    apellido_candidate?: true
    tipo_doc_candidate?: true
    num_doc_candidate?: true
    correo_candidate?: true
    estado_candidate?: true
    foto_candidate?: true
    contrasena_candidate?: true
    roleId?: true
    careerId?: true
    electionId?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _avg?: CandidateAvgAggregateInputType
    _sum?: CandidateSumAggregateInputType
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id_candidate: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint
    correo_candidate: string
    estado_candidate: string
    foto_candidate: string | null
    contrasena_candidate: string
    roleId: number
    careerId: number
    electionId: number | null
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_candidate?: boolean
    nombre_candidate?: boolean
    apellido_candidate?: boolean
    tipo_doc_candidate?: boolean
    num_doc_candidate?: boolean
    correo_candidate?: boolean
    estado_candidate?: boolean
    foto_candidate?: boolean
    contrasena_candidate?: boolean
    roleId?: boolean
    careerId?: boolean
    electionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    election?: boolean | Candidate$electionArgs<ExtArgs>
    proposals?: boolean | Candidate$proposalsArgs<ExtArgs>
    result?: boolean | Candidate$resultArgs<ExtArgs>
    votes?: boolean | Candidate$votesArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_candidate?: boolean
    nombre_candidate?: boolean
    apellido_candidate?: boolean
    tipo_doc_candidate?: boolean
    num_doc_candidate?: boolean
    correo_candidate?: boolean
    estado_candidate?: boolean
    foto_candidate?: boolean
    contrasena_candidate?: boolean
    roleId?: boolean
    careerId?: boolean
    electionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    election?: boolean | Candidate$electionArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_candidate?: boolean
    nombre_candidate?: boolean
    apellido_candidate?: boolean
    tipo_doc_candidate?: boolean
    num_doc_candidate?: boolean
    correo_candidate?: boolean
    estado_candidate?: boolean
    foto_candidate?: boolean
    contrasena_candidate?: boolean
    roleId?: boolean
    careerId?: boolean
    electionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    election?: boolean | Candidate$electionArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id_candidate?: boolean
    nombre_candidate?: boolean
    apellido_candidate?: boolean
    tipo_doc_candidate?: boolean
    num_doc_candidate?: boolean
    correo_candidate?: boolean
    estado_candidate?: boolean
    foto_candidate?: boolean
    contrasena_candidate?: boolean
    roleId?: boolean
    careerId?: boolean
    electionId?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_candidate" | "nombre_candidate" | "apellido_candidate" | "tipo_doc_candidate" | "num_doc_candidate" | "correo_candidate" | "estado_candidate" | "foto_candidate" | "contrasena_candidate" | "roleId" | "careerId" | "electionId", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    election?: boolean | Candidate$electionArgs<ExtArgs>
    proposals?: boolean | Candidate$proposalsArgs<ExtArgs>
    result?: boolean | Candidate$resultArgs<ExtArgs>
    votes?: boolean | Candidate$votesArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    election?: boolean | Candidate$electionArgs<ExtArgs>
  }
  export type CandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
    election?: boolean | Candidate$electionArgs<ExtArgs>
  }

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      career: Prisma.$CareerPayload<ExtArgs>
      election: Prisma.$ElectionPayload<ExtArgs> | null
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
      result: Prisma.$ResultPayload<ExtArgs> | null
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_candidate: number
      nombre_candidate: string
      apellido_candidate: string
      tipo_doc_candidate: string
      num_doc_candidate: bigint
      correo_candidate: string
      estado_candidate: string
      foto_candidate: string | null
      contrasena_candidate: string
      roleId: number
      careerId: number
      electionId: number | null
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id_candidate`
     * const candidateWithId_candidateOnly = await prisma.candidate.findMany({ select: { id_candidate: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id_candidate`
     * const candidateWithId_candidateOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id_candidate: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id_candidate`
     * const candidateWithId_candidateOnly = await prisma.candidate.updateManyAndReturn({
     *   select: { id_candidate: true },
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
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
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
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    election<T extends Candidate$electionArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$electionArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proposals<T extends Candidate$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    result<T extends Candidate$resultArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$resultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    votes<T extends Candidate$votesArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id_candidate: FieldRef<"Candidate", 'Int'>
    readonly nombre_candidate: FieldRef<"Candidate", 'String'>
    readonly apellido_candidate: FieldRef<"Candidate", 'String'>
    readonly tipo_doc_candidate: FieldRef<"Candidate", 'String'>
    readonly num_doc_candidate: FieldRef<"Candidate", 'BigInt'>
    readonly correo_candidate: FieldRef<"Candidate", 'String'>
    readonly estado_candidate: FieldRef<"Candidate", 'String'>
    readonly foto_candidate: FieldRef<"Candidate", 'String'>
    readonly contrasena_candidate: FieldRef<"Candidate", 'String'>
    readonly roleId: FieldRef<"Candidate", 'Int'>
    readonly careerId: FieldRef<"Candidate", 'Int'>
    readonly electionId: FieldRef<"Candidate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.election
   */
  export type Candidate$electionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    where?: ElectionWhereInput
  }

  /**
   * Candidate.proposals
   */
  export type Candidate$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Candidate.result
   */
  export type Candidate$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
  }

  /**
   * Candidate.votes
   */
  export type Candidate$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteAvgAggregateOutputType = {
    id_vote: number | null
    voterId: number | null
    candidateId: number | null
    electionId: number | null
  }

  export type VoteSumAggregateOutputType = {
    id_vote: number | null
    voterId: number | null
    candidateId: number | null
    electionId: number | null
  }

  export type VoteMinAggregateOutputType = {
    id_vote: number | null
    fecha_vote: Date | null
    hora_vote: Date | null
    voterId: number | null
    candidateId: number | null
    electionId: number | null
  }

  export type VoteMaxAggregateOutputType = {
    id_vote: number | null
    fecha_vote: Date | null
    hora_vote: Date | null
    voterId: number | null
    candidateId: number | null
    electionId: number | null
  }

  export type VoteCountAggregateOutputType = {
    id_vote: number
    fecha_vote: number
    hora_vote: number
    voterId: number
    candidateId: number
    electionId: number
    _all: number
  }


  export type VoteAvgAggregateInputType = {
    id_vote?: true
    voterId?: true
    candidateId?: true
    electionId?: true
  }

  export type VoteSumAggregateInputType = {
    id_vote?: true
    voterId?: true
    candidateId?: true
    electionId?: true
  }

  export type VoteMinAggregateInputType = {
    id_vote?: true
    fecha_vote?: true
    hora_vote?: true
    voterId?: true
    candidateId?: true
    electionId?: true
  }

  export type VoteMaxAggregateInputType = {
    id_vote?: true
    fecha_vote?: true
    hora_vote?: true
    voterId?: true
    candidateId?: true
    electionId?: true
  }

  export type VoteCountAggregateInputType = {
    id_vote?: true
    fecha_vote?: true
    hora_vote?: true
    voterId?: true
    candidateId?: true
    electionId?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _avg?: VoteAvgAggregateInputType
    _sum?: VoteSumAggregateInputType
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id_vote: number
    fecha_vote: Date
    hora_vote: Date
    voterId: number
    candidateId: number | null
    electionId: number | null
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vote?: boolean
    fecha_vote?: boolean
    hora_vote?: boolean
    voterId?: boolean
    candidateId?: boolean
    electionId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | Vote$candidateArgs<ExtArgs>
    election?: boolean | Vote$electionArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vote?: boolean
    fecha_vote?: boolean
    hora_vote?: boolean
    voterId?: boolean
    candidateId?: boolean
    electionId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | Vote$candidateArgs<ExtArgs>
    election?: boolean | Vote$electionArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vote?: boolean
    fecha_vote?: boolean
    hora_vote?: boolean
    voterId?: boolean
    candidateId?: boolean
    electionId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | Vote$candidateArgs<ExtArgs>
    election?: boolean | Vote$electionArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id_vote?: boolean
    fecha_vote?: boolean
    hora_vote?: boolean
    voterId?: boolean
    candidateId?: boolean
    electionId?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_vote" | "fecha_vote" | "hora_vote" | "voterId" | "candidateId" | "electionId", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | Vote$candidateArgs<ExtArgs>
    election?: boolean | Vote$electionArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | Vote$candidateArgs<ExtArgs>
    election?: boolean | Vote$electionArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
    candidate?: boolean | Vote$candidateArgs<ExtArgs>
    election?: boolean | Vote$electionArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      voter: Prisma.$VoterPayload<ExtArgs>
      candidate: Prisma.$CandidatePayload<ExtArgs> | null
      election: Prisma.$ElectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_vote: number
      fecha_vote: Date
      hora_vote: Date
      voterId: number
      candidateId: number | null
      electionId: number | null
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id_vote`
     * const voteWithId_voteOnly = await prisma.vote.findMany({ select: { id_vote: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id_vote`
     * const voteWithId_voteOnly = await prisma.vote.createManyAndReturn({
     *   select: { id_vote: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id_vote`
     * const voteWithId_voteOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id_vote: true },
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
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
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
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voter<T extends VoterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoterDefaultArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate<T extends Vote$candidateArgs<ExtArgs> = {}>(args?: Subset<T, Vote$candidateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    election<T extends Vote$electionArgs<ExtArgs> = {}>(args?: Subset<T, Vote$electionArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id_vote: FieldRef<"Vote", 'Int'>
    readonly fecha_vote: FieldRef<"Vote", 'DateTime'>
    readonly hora_vote: FieldRef<"Vote", 'DateTime'>
    readonly voterId: FieldRef<"Vote", 'Int'>
    readonly candidateId: FieldRef<"Vote", 'Int'>
    readonly electionId: FieldRef<"Vote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote.candidate
   */
  export type Vote$candidateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
  }

  /**
   * Vote.election
   */
  export type Vote$electionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Election
     */
    select?: ElectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Election
     */
    omit?: ElectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionInclude<ExtArgs> | null
    where?: ElectionWhereInput
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    id_proposal: number | null
    candidateId: number | null
  }

  export type ProposalSumAggregateOutputType = {
    id_proposal: number | null
    candidateId: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id_proposal: number | null
    titulo_proposal: string | null
    descripcion_proposal: string | null
    estado_proposal: string | null
    candidateId: number | null
  }

  export type ProposalMaxAggregateOutputType = {
    id_proposal: number | null
    titulo_proposal: string | null
    descripcion_proposal: string | null
    estado_proposal: string | null
    candidateId: number | null
  }

  export type ProposalCountAggregateOutputType = {
    id_proposal: number
    titulo_proposal: number
    descripcion_proposal: number
    estado_proposal: number
    candidateId: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    id_proposal?: true
    candidateId?: true
  }

  export type ProposalSumAggregateInputType = {
    id_proposal?: true
    candidateId?: true
  }

  export type ProposalMinAggregateInputType = {
    id_proposal?: true
    titulo_proposal?: true
    descripcion_proposal?: true
    estado_proposal?: true
    candidateId?: true
  }

  export type ProposalMaxAggregateInputType = {
    id_proposal?: true
    titulo_proposal?: true
    descripcion_proposal?: true
    estado_proposal?: true
    candidateId?: true
  }

  export type ProposalCountAggregateInputType = {
    id_proposal?: true
    titulo_proposal?: true
    descripcion_proposal?: true
    estado_proposal?: true
    candidateId?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id_proposal: number
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
    candidateId: number
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposal?: boolean
    titulo_proposal?: boolean
    descripcion_proposal?: boolean
    estado_proposal?: boolean
    candidateId?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposal?: boolean
    titulo_proposal?: boolean
    descripcion_proposal?: boolean
    estado_proposal?: boolean
    candidateId?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposal?: boolean
    titulo_proposal?: boolean
    descripcion_proposal?: boolean
    estado_proposal?: boolean
    candidateId?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectScalar = {
    id_proposal?: boolean
    titulo_proposal?: boolean
    descripcion_proposal?: boolean
    estado_proposal?: boolean
    candidateId?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proposal" | "titulo_proposal" | "descripcion_proposal" | "estado_proposal" | "candidateId", ExtArgs["result"]["proposal"]>
  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proposal: number
      titulo_proposal: string
      descripcion_proposal: string
      estado_proposal: string
      candidateId: number
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id_proposal`
     * const proposalWithId_proposalOnly = await prisma.proposal.findMany({ select: { id_proposal: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {ProposalCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposals and only return the `id_proposal`
     * const proposalWithId_proposalOnly = await prisma.proposal.createManyAndReturn({
     *   select: { id_proposal: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals and returns the data updated in the database.
     * @param {ProposalUpdateManyAndReturnArgs} args - Arguments to update many Proposals.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proposals and only return the `id_proposal`
     * const proposalWithId_proposalOnly = await prisma.proposal.updateManyAndReturn({
     *   select: { id_proposal: true },
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
    updateManyAndReturn<T extends ProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
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
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id_proposal: FieldRef<"Proposal", 'Int'>
    readonly titulo_proposal: FieldRef<"Proposal", 'String'>
    readonly descripcion_proposal: FieldRef<"Proposal", 'String'>
    readonly estado_proposal: FieldRef<"Proposal", 'String'>
    readonly candidateId: FieldRef<"Proposal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal createManyAndReturn
   */
  export type ProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal updateManyAndReturn
   */
  export type ProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to delete.
     */
    limit?: number
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
  }


  /**
   * Model Career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerAvgAggregateOutputType = {
    id_career: number | null
  }

  export type CareerSumAggregateOutputType = {
    id_career: number | null
  }

  export type CareerMinAggregateOutputType = {
    id_career: number | null
    nombre_career: string | null
    facultad_career: string | null
  }

  export type CareerMaxAggregateOutputType = {
    id_career: number | null
    nombre_career: string | null
    facultad_career: string | null
  }

  export type CareerCountAggregateOutputType = {
    id_career: number
    nombre_career: number
    facultad_career: number
    _all: number
  }


  export type CareerAvgAggregateInputType = {
    id_career?: true
  }

  export type CareerSumAggregateInputType = {
    id_career?: true
  }

  export type CareerMinAggregateInputType = {
    id_career?: true
    nombre_career?: true
    facultad_career?: true
  }

  export type CareerMaxAggregateInputType = {
    id_career?: true
    nombre_career?: true
    facultad_career?: true
  }

  export type CareerCountAggregateInputType = {
    id_career?: true
    nombre_career?: true
    facultad_career?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Career to aggregate.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type CareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithAggregationInput | CareerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: CareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _avg?: CareerAvgAggregateInputType
    _sum?: CareerSumAggregateInputType
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    id_career: number
    nombre_career: string
    facultad_career: string
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends CareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type CareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_career?: boolean
    nombre_career?: boolean
    facultad_career?: boolean
    voters?: boolean | Career$votersArgs<ExtArgs>
    candidates?: boolean | Career$candidatesArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_career?: boolean
    nombre_career?: boolean
    facultad_career?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_career?: boolean
    nombre_career?: boolean
    facultad_career?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectScalar = {
    id_career?: boolean
    nombre_career?: boolean
    facultad_career?: boolean
  }

  export type CareerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_career" | "nombre_career" | "facultad_career", ExtArgs["result"]["career"]>
  export type CareerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voters?: boolean | Career$votersArgs<ExtArgs>
    candidates?: boolean | Career$candidatesArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CareerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Career"
    objects: {
      voters: Prisma.$VoterPayload<ExtArgs>[]
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_career: number
      nombre_career: string
      facultad_career: string
    }, ExtArgs["result"]["career"]>
    composites: {}
  }

  type CareerGetPayload<S extends boolean | null | undefined | CareerDefaultArgs> = $Result.GetResult<Prisma.$CareerPayload, S>

  type CareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface CareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Career'], meta: { name: 'Career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {CareerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerFindUniqueArgs>(args: SelectSubset<T, CareerFindUniqueArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Career that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerFindFirstArgs>(args?: SelectSubset<T, CareerFindFirstArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id_career`
     * const careerWithId_careerOnly = await prisma.career.findMany({ select: { id_career: true } })
     * 
     */
    findMany<T extends CareerFindManyArgs>(args?: SelectSubset<T, CareerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Career.
     * @param {CareerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
     */
    create<T extends CareerCreateArgs>(args: SelectSubset<T, CareerCreateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {CareerCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerCreateManyArgs>(args?: SelectSubset<T, CareerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Careers and returns the data saved in the database.
     * @param {CareerCreateManyAndReturnArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Careers and only return the `id_career`
     * const careerWithId_careerOnly = await prisma.career.createManyAndReturn({
     *   select: { id_career: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Career.
     * @param {CareerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
     */
    delete<T extends CareerDeleteArgs>(args: SelectSubset<T, CareerDeleteArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Career.
     * @param {CareerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerUpdateArgs>(args: SelectSubset<T, CareerUpdateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {CareerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerDeleteManyArgs>(args?: SelectSubset<T, CareerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerUpdateManyArgs>(args: SelectSubset<T, CareerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers and returns the data updated in the database.
     * @param {CareerUpdateManyAndReturnArgs} args - Arguments to update many Careers.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Careers and only return the `id_career`
     * const careerWithId_careerOnly = await prisma.career.updateManyAndReturn({
     *   select: { id_career: true },
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
    updateManyAndReturn<T extends CareerUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Career.
     * @param {CareerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
     */
    upsert<T extends CareerUpsertArgs>(args: SelectSubset<T, CareerUpsertArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareerCountArgs>(
      args?: Subset<T, CareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerGroupByArgs} args - Group by arguments.
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
      T extends CareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerGroupByArgs['orderBy'] }
        : { orderBy?: CareerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Career model
   */
  readonly fields: CareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voters<T extends Career$votersArgs<ExtArgs> = {}>(args?: Subset<T, Career$votersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidates<T extends Career$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Career$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Career model
   */
  interface CareerFieldRefs {
    readonly id_career: FieldRef<"Career", 'Int'>
    readonly nombre_career: FieldRef<"Career", 'String'>
    readonly facultad_career: FieldRef<"Career", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Career findUnique
   */
  export type CareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findUniqueOrThrow
   */
  export type CareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findFirst
   */
  export type CareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findFirstOrThrow
   */
  export type CareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findMany
   */
  export type CareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career create
   */
  export type CareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to create a Career.
     */
    data: XOR<CareerCreateInput, CareerUncheckedCreateInput>
  }

  /**
   * Career createMany
   */
  export type CareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career createManyAndReturn
   */
  export type CareerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career update
   */
  export type CareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to update a Career.
     */
    data: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
    /**
     * Choose, which Career to update.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career updateMany
   */
  export type CareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career updateManyAndReturn
   */
  export type CareerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career upsert
   */
  export type CareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The filter to search for the Career to update in case it exists.
     */
    where: CareerWhereUniqueInput
    /**
     * In case the Career found by the `where` argument doesn't exist, create a new Career with this data.
     */
    create: XOR<CareerCreateInput, CareerUncheckedCreateInput>
    /**
     * In case the Career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
  }

  /**
   * Career delete
   */
  export type CareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter which Career to delete.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career deleteMany
   */
  export type CareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Careers to delete
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to delete.
     */
    limit?: number
  }

  /**
   * Career.voters
   */
  export type Career$votersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    where?: VoterWhereInput
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    cursor?: VoterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Career.candidates
   */
  export type Career$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Career without action
   */
  export type CareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
  }


  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    id_result: number | null
    total_votes: number | null
    electionId: number | null
    candidateId: number | null
  }

  export type ResultSumAggregateOutputType = {
    id_result: number | null
    total_votes: number | null
    electionId: number | null
    candidateId: number | null
  }

  export type ResultMinAggregateOutputType = {
    id_result: number | null
    total_votes: number | null
    electionId: number | null
    candidateId: number | null
  }

  export type ResultMaxAggregateOutputType = {
    id_result: number | null
    total_votes: number | null
    electionId: number | null
    candidateId: number | null
  }

  export type ResultCountAggregateOutputType = {
    id_result: number
    total_votes: number
    electionId: number
    candidateId: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    id_result?: true
    total_votes?: true
    electionId?: true
    candidateId?: true
  }

  export type ResultSumAggregateInputType = {
    id_result?: true
    total_votes?: true
    electionId?: true
    candidateId?: true
  }

  export type ResultMinAggregateInputType = {
    id_result?: true
    total_votes?: true
    electionId?: true
    candidateId?: true
  }

  export type ResultMaxAggregateInputType = {
    id_result?: true
    total_votes?: true
    electionId?: true
    candidateId?: true
  }

  export type ResultCountAggregateInputType = {
    id_result?: true
    total_votes?: true
    electionId?: true
    candidateId?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id_result: number
    total_votes: number
    electionId: number
    candidateId: number
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_result?: boolean
    total_votes?: boolean
    electionId?: boolean
    candidateId?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_result?: boolean
    total_votes?: boolean
    electionId?: boolean
    candidateId?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_result?: boolean
    total_votes?: boolean
    electionId?: boolean
    candidateId?: boolean
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectScalar = {
    id_result?: boolean
    total_votes?: boolean
    electionId?: boolean
    candidateId?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_result" | "total_votes" | "electionId" | "candidateId", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type ResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type ResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionDefaultArgs<ExtArgs>
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      election: Prisma.$ElectionPayload<ExtArgs>
      candidate: Prisma.$CandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_result: number
      total_votes: number
      electionId: number
      candidateId: number
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id_result`
     * const resultWithId_resultOnly = await prisma.result.findMany({ select: { id_result: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Results and returns the data saved in the database.
     * @param {ResultCreateManyAndReturnArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Results and only return the `id_result`
     * const resultWithId_resultOnly = await prisma.result.createManyAndReturn({
     *   select: { id_result: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results and returns the data updated in the database.
     * @param {ResultUpdateManyAndReturnArgs} args - Arguments to update many Results.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Results and only return the `id_result`
     * const resultWithId_resultOnly = await prisma.result.updateManyAndReturn({
     *   select: { id_result: true },
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
    updateManyAndReturn<T extends ResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
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
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    election<T extends ElectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionDefaultArgs<ExtArgs>>): Prisma__ElectionClient<$Result.GetResult<Prisma.$ElectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Result model
   */
  interface ResultFieldRefs {
    readonly id_result: FieldRef<"Result", 'Int'>
    readonly total_votes: FieldRef<"Result", 'Int'>
    readonly electionId: FieldRef<"Result", 'Int'>
    readonly candidateId: FieldRef<"Result", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Result createManyAndReturn
   */
  export type ResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
  }

  /**
   * Result updateManyAndReturn
   */
  export type ResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to delete.
     */
    limit?: number
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id_role: number | null
  }

  export type RoleSumAggregateOutputType = {
    id_role: number | null
  }

  export type RoleMinAggregateOutputType = {
    id_role: number | null
    nombre_role: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id_role: number | null
    nombre_role: string | null
  }

  export type RoleCountAggregateOutputType = {
    id_role: number
    nombre_role: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id_role?: true
  }

  export type RoleSumAggregateInputType = {
    id_role?: true
  }

  export type RoleMinAggregateInputType = {
    id_role?: true
    nombre_role?: true
  }

  export type RoleMaxAggregateInputType = {
    id_role?: true
    nombre_role?: true
  }

  export type RoleCountAggregateInputType = {
    id_role?: true
    nombre_role?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id_role: number
    nombre_role: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    nombre_role?: boolean
    voters?: boolean | Role$votersArgs<ExtArgs>
    candidates?: boolean | Role$candidatesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    nombre_role?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    nombre_role?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id_role?: boolean
    nombre_role?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_role" | "nombre_role", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voters?: boolean | Role$votersArgs<ExtArgs>
    candidates?: boolean | Role$candidatesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      voters: Prisma.$VoterPayload<ExtArgs>[]
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_role: number
      nombre_role: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id_role`
     * const roleWithId_roleOnly = await prisma.role.findMany({ select: { id_role: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id_role`
     * const roleWithId_roleOnly = await prisma.role.createManyAndReturn({
     *   select: { id_role: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id_role`
     * const roleWithId_roleOnly = await prisma.role.updateManyAndReturn({
     *   select: { id_role: true },
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voters<T extends Role$votersArgs<ExtArgs> = {}>(args?: Subset<T, Role$votersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidates<T extends Role$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Role$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id_role: FieldRef<"Role", 'Int'>
    readonly nombre_role: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.voters
   */
  export type Role$votersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    where?: VoterWhereInput
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    cursor?: VoterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Role.candidates
   */
  export type Role$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdministradorScalarFieldEnum: {
    id_admin: 'id_admin',
    nombre_admin: 'nombre_admin',
    apellido_admin: 'apellido_admin',
    tipo_doc_admin: 'tipo_doc_admin',
    num_doc_admin: 'num_doc_admin',
    correo_admin: 'correo_admin',
    contrasena_admin: 'contrasena_admin'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const VoterScalarFieldEnum: {
    id_voter: 'id_voter',
    nombre_voter: 'nombre_voter',
    apellido_voter: 'apellido_voter',
    tipo_doc_voter: 'tipo_doc_voter',
    num_doc_voter: 'num_doc_voter',
    correo_voter: 'correo_voter',
    estado_voter: 'estado_voter',
    contrasena_voter: 'contrasena_voter',
    roleId: 'roleId',
    electionId: 'electionId',
    careerId: 'careerId'
  };

  export type VoterScalarFieldEnum = (typeof VoterScalarFieldEnum)[keyof typeof VoterScalarFieldEnum]


  export const ElectionScalarFieldEnum: {
    id_election: 'id_election',
    nombre_election: 'nombre_election',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    estado_election: 'estado_election',
    admin_id: 'admin_id'
  };

  export type ElectionScalarFieldEnum = (typeof ElectionScalarFieldEnum)[keyof typeof ElectionScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id_candidate: 'id_candidate',
    nombre_candidate: 'nombre_candidate',
    apellido_candidate: 'apellido_candidate',
    tipo_doc_candidate: 'tipo_doc_candidate',
    num_doc_candidate: 'num_doc_candidate',
    correo_candidate: 'correo_candidate',
    estado_candidate: 'estado_candidate',
    foto_candidate: 'foto_candidate',
    contrasena_candidate: 'contrasena_candidate',
    roleId: 'roleId',
    careerId: 'careerId',
    electionId: 'electionId'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id_vote: 'id_vote',
    fecha_vote: 'fecha_vote',
    hora_vote: 'hora_vote',
    voterId: 'voterId',
    candidateId: 'candidateId',
    electionId: 'electionId'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id_proposal: 'id_proposal',
    titulo_proposal: 'titulo_proposal',
    descripcion_proposal: 'descripcion_proposal',
    estado_proposal: 'estado_proposal',
    candidateId: 'candidateId'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id_career: 'id_career',
    nombre_career: 'nombre_career',
    facultad_career: 'facultad_career'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id_result: 'id_result',
    total_votes: 'total_votes',
    electionId: 'electionId',
    candidateId: 'candidateId'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id_role: 'id_role',
    nombre_role: 'nombre_role'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id_admin?: IntFilter<"Administrador"> | number
    nombre_admin?: StringFilter<"Administrador"> | string
    apellido_admin?: StringFilter<"Administrador"> | string
    tipo_doc_admin?: StringFilter<"Administrador"> | string
    num_doc_admin?: BigIntFilter<"Administrador"> | bigint | number
    correo_admin?: StringFilter<"Administrador"> | string
    contrasena_admin?: StringFilter<"Administrador"> | string
    elections?: ElectionListRelationFilter
  }

  export type AdministradorOrderByWithRelationInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
    elections?: ElectionOrderByRelationAggregateInput
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id_admin?: number
    correo_admin?: string
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    nombre_admin?: StringFilter<"Administrador"> | string
    apellido_admin?: StringFilter<"Administrador"> | string
    tipo_doc_admin?: StringFilter<"Administrador"> | string
    num_doc_admin?: BigIntFilter<"Administrador"> | bigint | number
    contrasena_admin?: StringFilter<"Administrador"> | string
    elections?: ElectionListRelationFilter
  }, "id_admin" | "correo_admin">

  export type AdministradorOrderByWithAggregationInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id_admin?: IntWithAggregatesFilter<"Administrador"> | number
    nombre_admin?: StringWithAggregatesFilter<"Administrador"> | string
    apellido_admin?: StringWithAggregatesFilter<"Administrador"> | string
    tipo_doc_admin?: StringWithAggregatesFilter<"Administrador"> | string
    num_doc_admin?: BigIntWithAggregatesFilter<"Administrador"> | bigint | number
    correo_admin?: StringWithAggregatesFilter<"Administrador"> | string
    contrasena_admin?: StringWithAggregatesFilter<"Administrador"> | string
  }

  export type VoterWhereInput = {
    AND?: VoterWhereInput | VoterWhereInput[]
    OR?: VoterWhereInput[]
    NOT?: VoterWhereInput | VoterWhereInput[]
    id_voter?: IntFilter<"Voter"> | number
    nombre_voter?: StringFilter<"Voter"> | string
    apellido_voter?: StringFilter<"Voter"> | string
    tipo_doc_voter?: StringFilter<"Voter"> | string
    num_doc_voter?: BigIntFilter<"Voter"> | bigint | number
    correo_voter?: StringFilter<"Voter"> | string
    estado_voter?: StringFilter<"Voter"> | string
    contrasena_voter?: StringFilter<"Voter"> | string
    roleId?: IntFilter<"Voter"> | number
    electionId?: IntNullableFilter<"Voter"> | number | null
    careerId?: IntFilter<"Voter"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    election?: XOR<ElectionNullableScalarRelationFilter, ElectionWhereInput> | null
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    vote?: VoteListRelationFilter
  }

  export type VoterOrderByWithRelationInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
    roleId?: SortOrder
    electionId?: SortOrderInput | SortOrder
    careerId?: SortOrder
    role?: RoleOrderByWithRelationInput
    election?: ElectionOrderByWithRelationInput
    career?: CareerOrderByWithRelationInput
    vote?: VoteOrderByRelationAggregateInput
  }

  export type VoterWhereUniqueInput = Prisma.AtLeast<{
    id_voter?: number
    num_doc_voter?: bigint | number
    correo_voter?: string
    AND?: VoterWhereInput | VoterWhereInput[]
    OR?: VoterWhereInput[]
    NOT?: VoterWhereInput | VoterWhereInput[]
    nombre_voter?: StringFilter<"Voter"> | string
    apellido_voter?: StringFilter<"Voter"> | string
    tipo_doc_voter?: StringFilter<"Voter"> | string
    estado_voter?: StringFilter<"Voter"> | string
    contrasena_voter?: StringFilter<"Voter"> | string
    roleId?: IntFilter<"Voter"> | number
    electionId?: IntNullableFilter<"Voter"> | number | null
    careerId?: IntFilter<"Voter"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    election?: XOR<ElectionNullableScalarRelationFilter, ElectionWhereInput> | null
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    vote?: VoteListRelationFilter
  }, "id_voter" | "num_doc_voter" | "correo_voter">

  export type VoterOrderByWithAggregationInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
    roleId?: SortOrder
    electionId?: SortOrderInput | SortOrder
    careerId?: SortOrder
    _count?: VoterCountOrderByAggregateInput
    _avg?: VoterAvgOrderByAggregateInput
    _max?: VoterMaxOrderByAggregateInput
    _min?: VoterMinOrderByAggregateInput
    _sum?: VoterSumOrderByAggregateInput
  }

  export type VoterScalarWhereWithAggregatesInput = {
    AND?: VoterScalarWhereWithAggregatesInput | VoterScalarWhereWithAggregatesInput[]
    OR?: VoterScalarWhereWithAggregatesInput[]
    NOT?: VoterScalarWhereWithAggregatesInput | VoterScalarWhereWithAggregatesInput[]
    id_voter?: IntWithAggregatesFilter<"Voter"> | number
    nombre_voter?: StringWithAggregatesFilter<"Voter"> | string
    apellido_voter?: StringWithAggregatesFilter<"Voter"> | string
    tipo_doc_voter?: StringWithAggregatesFilter<"Voter"> | string
    num_doc_voter?: BigIntWithAggregatesFilter<"Voter"> | bigint | number
    correo_voter?: StringWithAggregatesFilter<"Voter"> | string
    estado_voter?: StringWithAggregatesFilter<"Voter"> | string
    contrasena_voter?: StringWithAggregatesFilter<"Voter"> | string
    roleId?: IntWithAggregatesFilter<"Voter"> | number
    electionId?: IntNullableWithAggregatesFilter<"Voter"> | number | null
    careerId?: IntWithAggregatesFilter<"Voter"> | number
  }

  export type ElectionWhereInput = {
    AND?: ElectionWhereInput | ElectionWhereInput[]
    OR?: ElectionWhereInput[]
    NOT?: ElectionWhereInput | ElectionWhereInput[]
    id_election?: IntFilter<"Election"> | number
    nombre_election?: StringFilter<"Election"> | string
    fecha_inicio?: DateTimeFilter<"Election"> | Date | string
    fecha_fin?: DateTimeFilter<"Election"> | Date | string
    estado_election?: StringFilter<"Election"> | string
    admin_id?: IntFilter<"Election"> | number
    administrador?: XOR<AdministradorScalarRelationFilter, AdministradorWhereInput>
    candidates?: CandidateListRelationFilter
    voters?: VoterListRelationFilter
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
    Vote?: VoteListRelationFilter
  }

  export type ElectionOrderByWithRelationInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
    administrador?: AdministradorOrderByWithRelationInput
    candidates?: CandidateOrderByRelationAggregateInput
    voters?: VoterOrderByRelationAggregateInput
    result?: ResultOrderByWithRelationInput
    Vote?: VoteOrderByRelationAggregateInput
  }

  export type ElectionWhereUniqueInput = Prisma.AtLeast<{
    id_election?: number
    AND?: ElectionWhereInput | ElectionWhereInput[]
    OR?: ElectionWhereInput[]
    NOT?: ElectionWhereInput | ElectionWhereInput[]
    nombre_election?: StringFilter<"Election"> | string
    fecha_inicio?: DateTimeFilter<"Election"> | Date | string
    fecha_fin?: DateTimeFilter<"Election"> | Date | string
    estado_election?: StringFilter<"Election"> | string
    admin_id?: IntFilter<"Election"> | number
    administrador?: XOR<AdministradorScalarRelationFilter, AdministradorWhereInput>
    candidates?: CandidateListRelationFilter
    voters?: VoterListRelationFilter
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
    Vote?: VoteListRelationFilter
  }, "id_election">

  export type ElectionOrderByWithAggregationInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
    _count?: ElectionCountOrderByAggregateInput
    _avg?: ElectionAvgOrderByAggregateInput
    _max?: ElectionMaxOrderByAggregateInput
    _min?: ElectionMinOrderByAggregateInput
    _sum?: ElectionSumOrderByAggregateInput
  }

  export type ElectionScalarWhereWithAggregatesInput = {
    AND?: ElectionScalarWhereWithAggregatesInput | ElectionScalarWhereWithAggregatesInput[]
    OR?: ElectionScalarWhereWithAggregatesInput[]
    NOT?: ElectionScalarWhereWithAggregatesInput | ElectionScalarWhereWithAggregatesInput[]
    id_election?: IntWithAggregatesFilter<"Election"> | number
    nombre_election?: StringWithAggregatesFilter<"Election"> | string
    fecha_inicio?: DateTimeWithAggregatesFilter<"Election"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"Election"> | Date | string
    estado_election?: StringWithAggregatesFilter<"Election"> | string
    admin_id?: IntWithAggregatesFilter<"Election"> | number
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id_candidate?: IntFilter<"Candidate"> | number
    nombre_candidate?: StringFilter<"Candidate"> | string
    apellido_candidate?: StringFilter<"Candidate"> | string
    tipo_doc_candidate?: StringFilter<"Candidate"> | string
    num_doc_candidate?: BigIntFilter<"Candidate"> | bigint | number
    correo_candidate?: StringFilter<"Candidate"> | string
    estado_candidate?: StringFilter<"Candidate"> | string
    foto_candidate?: StringNullableFilter<"Candidate"> | string | null
    contrasena_candidate?: StringFilter<"Candidate"> | string
    roleId?: IntFilter<"Candidate"> | number
    careerId?: IntFilter<"Candidate"> | number
    electionId?: IntNullableFilter<"Candidate"> | number | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    election?: XOR<ElectionNullableScalarRelationFilter, ElectionWhereInput> | null
    proposals?: ProposalListRelationFilter
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
    votes?: VoteListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrderInput | SortOrder
    contrasena_candidate?: SortOrder
    roleId?: SortOrder
    careerId?: SortOrder
    electionId?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    career?: CareerOrderByWithRelationInput
    election?: ElectionOrderByWithRelationInput
    proposals?: ProposalOrderByRelationAggregateInput
    result?: ResultOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id_candidate?: number
    num_doc_candidate?: bigint | number
    correo_candidate?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    nombre_candidate?: StringFilter<"Candidate"> | string
    apellido_candidate?: StringFilter<"Candidate"> | string
    tipo_doc_candidate?: StringFilter<"Candidate"> | string
    estado_candidate?: StringFilter<"Candidate"> | string
    foto_candidate?: StringNullableFilter<"Candidate"> | string | null
    contrasena_candidate?: StringFilter<"Candidate"> | string
    roleId?: IntFilter<"Candidate"> | number
    careerId?: IntFilter<"Candidate"> | number
    electionId?: IntNullableFilter<"Candidate"> | number | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    election?: XOR<ElectionNullableScalarRelationFilter, ElectionWhereInput> | null
    proposals?: ProposalListRelationFilter
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
    votes?: VoteListRelationFilter
  }, "id_candidate" | "num_doc_candidate" | "correo_candidate">

  export type CandidateOrderByWithAggregationInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrderInput | SortOrder
    contrasena_candidate?: SortOrder
    roleId?: SortOrder
    careerId?: SortOrder
    electionId?: SortOrderInput | SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _avg?: CandidateAvgOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
    _sum?: CandidateSumOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id_candidate?: IntWithAggregatesFilter<"Candidate"> | number
    nombre_candidate?: StringWithAggregatesFilter<"Candidate"> | string
    apellido_candidate?: StringWithAggregatesFilter<"Candidate"> | string
    tipo_doc_candidate?: StringWithAggregatesFilter<"Candidate"> | string
    num_doc_candidate?: BigIntWithAggregatesFilter<"Candidate"> | bigint | number
    correo_candidate?: StringWithAggregatesFilter<"Candidate"> | string
    estado_candidate?: StringWithAggregatesFilter<"Candidate"> | string
    foto_candidate?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    contrasena_candidate?: StringWithAggregatesFilter<"Candidate"> | string
    roleId?: IntWithAggregatesFilter<"Candidate"> | number
    careerId?: IntWithAggregatesFilter<"Candidate"> | number
    electionId?: IntNullableWithAggregatesFilter<"Candidate"> | number | null
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id_vote?: IntFilter<"Vote"> | number
    fecha_vote?: DateTimeFilter<"Vote"> | Date | string
    hora_vote?: DateTimeFilter<"Vote"> | Date | string
    voterId?: IntFilter<"Vote"> | number
    candidateId?: IntNullableFilter<"Vote"> | number | null
    electionId?: IntNullableFilter<"Vote"> | number | null
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
    candidate?: XOR<CandidateNullableScalarRelationFilter, CandidateWhereInput> | null
    election?: XOR<ElectionNullableScalarRelationFilter, ElectionWhereInput> | null
  }

  export type VoteOrderByWithRelationInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrderInput | SortOrder
    electionId?: SortOrderInput | SortOrder
    voter?: VoterOrderByWithRelationInput
    candidate?: CandidateOrderByWithRelationInput
    election?: ElectionOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id_vote?: number
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    fecha_vote?: DateTimeFilter<"Vote"> | Date | string
    hora_vote?: DateTimeFilter<"Vote"> | Date | string
    voterId?: IntFilter<"Vote"> | number
    candidateId?: IntNullableFilter<"Vote"> | number | null
    electionId?: IntNullableFilter<"Vote"> | number | null
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
    candidate?: XOR<CandidateNullableScalarRelationFilter, CandidateWhereInput> | null
    election?: XOR<ElectionNullableScalarRelationFilter, ElectionWhereInput> | null
  }, "id_vote">

  export type VoteOrderByWithAggregationInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrderInput | SortOrder
    electionId?: SortOrderInput | SortOrder
    _count?: VoteCountOrderByAggregateInput
    _avg?: VoteAvgOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
    _sum?: VoteSumOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id_vote?: IntWithAggregatesFilter<"Vote"> | number
    fecha_vote?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
    hora_vote?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
    voterId?: IntWithAggregatesFilter<"Vote"> | number
    candidateId?: IntNullableWithAggregatesFilter<"Vote"> | number | null
    electionId?: IntNullableWithAggregatesFilter<"Vote"> | number | null
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id_proposal?: IntFilter<"Proposal"> | number
    titulo_proposal?: StringFilter<"Proposal"> | string
    descripcion_proposal?: StringFilter<"Proposal"> | string
    estado_proposal?: StringFilter<"Proposal"> | string
    candidateId?: IntFilter<"Proposal"> | number
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type ProposalOrderByWithRelationInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
    candidateId?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id_proposal?: number
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    titulo_proposal?: StringFilter<"Proposal"> | string
    descripcion_proposal?: StringFilter<"Proposal"> | string
    estado_proposal?: StringFilter<"Proposal"> | string
    candidateId?: IntFilter<"Proposal"> | number
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }, "id_proposal">

  export type ProposalOrderByWithAggregationInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
    candidateId?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _avg?: ProposalAvgOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
    _sum?: ProposalSumOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id_proposal?: IntWithAggregatesFilter<"Proposal"> | number
    titulo_proposal?: StringWithAggregatesFilter<"Proposal"> | string
    descripcion_proposal?: StringWithAggregatesFilter<"Proposal"> | string
    estado_proposal?: StringWithAggregatesFilter<"Proposal"> | string
    candidateId?: IntWithAggregatesFilter<"Proposal"> | number
  }

  export type CareerWhereInput = {
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    id_career?: IntFilter<"Career"> | number
    nombre_career?: StringFilter<"Career"> | string
    facultad_career?: StringFilter<"Career"> | string
    voters?: VoterListRelationFilter
    candidates?: CandidateListRelationFilter
  }

  export type CareerOrderByWithRelationInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
    voters?: VoterOrderByRelationAggregateInput
    candidates?: CandidateOrderByRelationAggregateInput
  }

  export type CareerWhereUniqueInput = Prisma.AtLeast<{
    id_career?: number
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    nombre_career?: StringFilter<"Career"> | string
    facultad_career?: StringFilter<"Career"> | string
    voters?: VoterListRelationFilter
    candidates?: CandidateListRelationFilter
  }, "id_career">

  export type CareerOrderByWithAggregationInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
    _count?: CareerCountOrderByAggregateInput
    _avg?: CareerAvgOrderByAggregateInput
    _max?: CareerMaxOrderByAggregateInput
    _min?: CareerMinOrderByAggregateInput
    _sum?: CareerSumOrderByAggregateInput
  }

  export type CareerScalarWhereWithAggregatesInput = {
    AND?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    OR?: CareerScalarWhereWithAggregatesInput[]
    NOT?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    id_career?: IntWithAggregatesFilter<"Career"> | number
    nombre_career?: StringWithAggregatesFilter<"Career"> | string
    facultad_career?: StringWithAggregatesFilter<"Career"> | string
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id_result?: IntFilter<"Result"> | number
    total_votes?: IntFilter<"Result"> | number
    electionId?: IntFilter<"Result"> | number
    candidateId?: IntFilter<"Result"> | number
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type ResultOrderByWithRelationInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
    electionId?: SortOrder
    candidateId?: SortOrder
    election?: ElectionOrderByWithRelationInput
    candidate?: CandidateOrderByWithRelationInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id_result?: number
    electionId?: number
    candidateId?: number
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    total_votes?: IntFilter<"Result"> | number
    election?: XOR<ElectionScalarRelationFilter, ElectionWhereInput>
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }, "id_result" | "electionId" | "candidateId">

  export type ResultOrderByWithAggregationInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
    electionId?: SortOrder
    candidateId?: SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id_result?: IntWithAggregatesFilter<"Result"> | number
    total_votes?: IntWithAggregatesFilter<"Result"> | number
    electionId?: IntWithAggregatesFilter<"Result"> | number
    candidateId?: IntWithAggregatesFilter<"Result"> | number
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id_role?: IntFilter<"Role"> | number
    nombre_role?: StringFilter<"Role"> | string
    voters?: VoterListRelationFilter
    candidates?: CandidateListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
    voters?: VoterOrderByRelationAggregateInput
    candidates?: CandidateOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id_role?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    nombre_role?: StringFilter<"Role"> | string
    voters?: VoterListRelationFilter
    candidates?: CandidateListRelationFilter
  }, "id_role">

  export type RoleOrderByWithAggregationInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id_role?: IntWithAggregatesFilter<"Role"> | number
    nombre_role?: StringWithAggregatesFilter<"Role"> | string
  }

  export type AdministradorCreateInput = {
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: bigint | number
    correo_admin: string
    contrasena_admin: string
    elections?: ElectionCreateNestedManyWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateInput = {
    id_admin?: number
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: bigint | number
    correo_admin: string
    contrasena_admin: string
    elections?: ElectionUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type AdministradorUpdateInput = {
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
    elections?: ElectionUpdateManyWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
    elections?: ElectionUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type AdministradorCreateManyInput = {
    id_admin?: number
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: bigint | number
    correo_admin: string
    contrasena_admin: string
  }

  export type AdministradorUpdateManyMutationInput = {
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
  }

  export type AdministradorUncheckedUpdateManyInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
  }

  export type VoterCreateInput = {
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    role: RoleCreateNestedOneWithoutVotersInput
    election?: ElectionCreateNestedOneWithoutVotersInput
    career: CareerCreateNestedOneWithoutVotersInput
    vote?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    roleId: number
    electionId?: number | null
    careerId: number
    vote?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterUpdateInput = {
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutVotersNestedInput
    election?: ElectionUpdateOneWithoutVotersNestedInput
    career?: CareerUpdateOneRequiredWithoutVotersNestedInput
    vote?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    careerId?: IntFieldUpdateOperationsInput | number
    vote?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterCreateManyInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    roleId: number
    electionId?: number | null
    careerId: number
  }

  export type VoterUpdateManyMutationInput = {
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
  }

  export type VoterUncheckedUpdateManyInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type ElectionCreateInput = {
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    administrador: AdministradorCreateNestedOneWithoutElectionsInput
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    voters?: VoterCreateNestedManyWithoutElectionInput
    result?: ResultCreateNestedOneWithoutElectionInput
    Vote?: VoteCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    admin_id: number
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    voters?: VoterUncheckedCreateNestedManyWithoutElectionInput
    result?: ResultUncheckedCreateNestedOneWithoutElectionInput
    Vote?: VoteUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionUpdateInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    administrador?: AdministradorUpdateOneRequiredWithoutElectionsNestedInput
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    voters?: VoterUpdateManyWithoutElectionNestedInput
    result?: ResultUpdateOneWithoutElectionNestedInput
    Vote?: VoteUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    voters?: VoterUncheckedUpdateManyWithoutElectionNestedInput
    result?: ResultUncheckedUpdateOneWithoutElectionNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionCreateManyInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    admin_id: number
  }

  export type ElectionUpdateManyMutationInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
  }

  export type ElectionUncheckedUpdateManyInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateCreateInput = {
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    role: RoleCreateNestedOneWithoutCandidatesInput
    career: CareerCreateNestedOneWithoutCandidatesInput
    election?: ElectionCreateNestedOneWithoutCandidatesInput
    proposals?: ProposalCreateNestedManyWithoutCandidateInput
    result?: ResultCreateNestedOneWithoutCandidateInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    roleId: number
    careerId: number
    electionId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutCandidateInput
    result?: ResultUncheckedCreateNestedOneWithoutCandidateInput
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUpdateInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutCandidatesNestedInput
    career?: CareerUpdateOneRequiredWithoutCandidatesNestedInput
    election?: ElectionUpdateOneWithoutCandidatesNestedInput
    proposals?: ProposalUpdateManyWithoutCandidateNestedInput
    result?: ResultUpdateOneWithoutCandidateNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutCandidateNestedInput
    result?: ResultUncheckedUpdateOneWithoutCandidateNestedInput
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    roleId: number
    careerId: number
    electionId?: number | null
  }

  export type CandidateUpdateManyMutationInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateUncheckedUpdateManyInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VoteCreateInput = {
    fecha_vote: Date | string
    hora_vote: Date | string
    voter: VoterCreateNestedOneWithoutVoteInput
    candidate?: CandidateCreateNestedOneWithoutVotesInput
    election?: ElectionCreateNestedOneWithoutVoteInput
  }

  export type VoteUncheckedCreateInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
    voterId: number
    candidateId?: number | null
    electionId?: number | null
  }

  export type VoteUpdateInput = {
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutVoteNestedInput
    candidate?: CandidateUpdateOneWithoutVotesNestedInput
    election?: ElectionUpdateOneWithoutVoteNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    voterId?: IntFieldUpdateOperationsInput | number
    candidateId?: NullableIntFieldUpdateOperationsInput | number | null
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VoteCreateManyInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
    voterId: number
    candidateId?: number | null
    electionId?: number | null
  }

  export type VoteUpdateManyMutationInput = {
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    voterId?: IntFieldUpdateOperationsInput | number
    candidateId?: NullableIntFieldUpdateOperationsInput | number | null
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProposalCreateInput = {
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
    candidate: CandidateCreateNestedOneWithoutProposalsInput
  }

  export type ProposalUncheckedCreateInput = {
    id_proposal?: number
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
    candidateId: number
  }

  export type ProposalUpdateInput = {
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
    candidate?: CandidateUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id_proposal?: IntFieldUpdateOperationsInput | number
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type ProposalCreateManyInput = {
    id_proposal?: number
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
    candidateId: number
  }

  export type ProposalUpdateManyMutationInput = {
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalUncheckedUpdateManyInput = {
    id_proposal?: IntFieldUpdateOperationsInput | number
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerCreateInput = {
    nombre_career: string
    facultad_career: string
    voters?: VoterCreateNestedManyWithoutCareerInput
    candidates?: CandidateCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateInput = {
    id_career?: number
    nombre_career: string
    facultad_career: string
    voters?: VoterUncheckedCreateNestedManyWithoutCareerInput
    candidates?: CandidateUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerUpdateInput = {
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
    voters?: VoterUpdateManyWithoutCareerNestedInput
    candidates?: CandidateUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateInput = {
    id_career?: IntFieldUpdateOperationsInput | number
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
    voters?: VoterUncheckedUpdateManyWithoutCareerNestedInput
    candidates?: CandidateUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareerCreateManyInput = {
    id_career?: number
    nombre_career: string
    facultad_career: string
  }

  export type CareerUpdateManyMutationInput = {
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
  }

  export type CareerUncheckedUpdateManyInput = {
    id_career?: IntFieldUpdateOperationsInput | number
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
  }

  export type ResultCreateInput = {
    total_votes: number
    election: ElectionCreateNestedOneWithoutResultInput
    candidate: CandidateCreateNestedOneWithoutResultInput
  }

  export type ResultUncheckedCreateInput = {
    id_result?: number
    total_votes: number
    electionId: number
    candidateId: number
  }

  export type ResultUpdateInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
    election?: ElectionUpdateOneRequiredWithoutResultNestedInput
    candidate?: CandidateUpdateOneRequiredWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id_result?: IntFieldUpdateOperationsInput | number
    total_votes?: IntFieldUpdateOperationsInput | number
    electionId?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type ResultCreateManyInput = {
    id_result?: number
    total_votes: number
    electionId: number
    candidateId: number
  }

  export type ResultUpdateManyMutationInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
  }

  export type ResultUncheckedUpdateManyInput = {
    id_result?: IntFieldUpdateOperationsInput | number
    total_votes?: IntFieldUpdateOperationsInput | number
    electionId?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleCreateInput = {
    nombre_role: string
    voters?: VoterCreateNestedManyWithoutRoleInput
    candidates?: CandidateCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id_role?: number
    nombre_role: string
    voters?: VoterUncheckedCreateNestedManyWithoutRoleInput
    candidates?: CandidateUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    nombre_role?: StringFieldUpdateOperationsInput | string
    voters?: VoterUpdateManyWithoutRoleNestedInput
    candidates?: CandidateUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    nombre_role?: StringFieldUpdateOperationsInput | string
    voters?: VoterUncheckedUpdateManyWithoutRoleNestedInput
    candidates?: CandidateUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id_role?: number
    nombre_role: string
  }

  export type RoleUpdateManyMutationInput = {
    nombre_role?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    nombre_role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ElectionListRelationFilter = {
    every?: ElectionWhereInput
    some?: ElectionWhereInput
    none?: ElectionWhereInput
  }

  export type ElectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdministradorCountOrderByAggregateInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    id_admin?: SortOrder
    num_doc_admin?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    id_admin?: SortOrder
    num_doc_admin?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ElectionNullableScalarRelationFilter = {
    is?: ElectionWhereInput | null
    isNot?: ElectionWhereInput | null
  }

  export type CareerScalarRelationFilter = {
    is?: CareerWhereInput
    isNot?: CareerWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoterCountOrderByAggregateInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
    roleId?: SortOrder
    electionId?: SortOrder
    careerId?: SortOrder
  }

  export type VoterAvgOrderByAggregateInput = {
    id_voter?: SortOrder
    num_doc_voter?: SortOrder
    roleId?: SortOrder
    electionId?: SortOrder
    careerId?: SortOrder
  }

  export type VoterMaxOrderByAggregateInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
    roleId?: SortOrder
    electionId?: SortOrder
    careerId?: SortOrder
  }

  export type VoterMinOrderByAggregateInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
    roleId?: SortOrder
    electionId?: SortOrder
    careerId?: SortOrder
  }

  export type VoterSumOrderByAggregateInput = {
    id_voter?: SortOrder
    num_doc_voter?: SortOrder
    roleId?: SortOrder
    electionId?: SortOrder
    careerId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdministradorScalarRelationFilter = {
    is?: AdministradorWhereInput
    isNot?: AdministradorWhereInput
  }

  export type CandidateListRelationFilter = {
    every?: CandidateWhereInput
    some?: CandidateWhereInput
    none?: CandidateWhereInput
  }

  export type VoterListRelationFilter = {
    every?: VoterWhereInput
    some?: VoterWhereInput
    none?: VoterWhereInput
  }

  export type ResultNullableScalarRelationFilter = {
    is?: ResultWhereInput | null
    isNot?: ResultWhereInput | null
  }

  export type CandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectionCountOrderByAggregateInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
  }

  export type ElectionAvgOrderByAggregateInput = {
    id_election?: SortOrder
    admin_id?: SortOrder
  }

  export type ElectionMaxOrderByAggregateInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
  }

  export type ElectionMinOrderByAggregateInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
  }

  export type ElectionSumOrderByAggregateInput = {
    id_election?: SortOrder
    admin_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateCountOrderByAggregateInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrder
    contrasena_candidate?: SortOrder
    roleId?: SortOrder
    careerId?: SortOrder
    electionId?: SortOrder
  }

  export type CandidateAvgOrderByAggregateInput = {
    id_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    roleId?: SortOrder
    careerId?: SortOrder
    electionId?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrder
    contrasena_candidate?: SortOrder
    roleId?: SortOrder
    careerId?: SortOrder
    electionId?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrder
    contrasena_candidate?: SortOrder
    roleId?: SortOrder
    careerId?: SortOrder
    electionId?: SortOrder
  }

  export type CandidateSumOrderByAggregateInput = {
    id_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    roleId?: SortOrder
    careerId?: SortOrder
    electionId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VoterScalarRelationFilter = {
    is?: VoterWhereInput
    isNot?: VoterWhereInput
  }

  export type CandidateNullableScalarRelationFilter = {
    is?: CandidateWhereInput | null
    isNot?: CandidateWhereInput | null
  }

  export type VoteCountOrderByAggregateInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
  }

  export type VoteAvgOrderByAggregateInput = {
    id_vote?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
  }

  export type VoteSumOrderByAggregateInput = {
    id_vote?: SortOrder
    voterId?: SortOrder
    candidateId?: SortOrder
    electionId?: SortOrder
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
  }

  export type ProposalCountOrderByAggregateInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
    candidateId?: SortOrder
  }

  export type ProposalAvgOrderByAggregateInput = {
    id_proposal?: SortOrder
    candidateId?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
    candidateId?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
    candidateId?: SortOrder
  }

  export type ProposalSumOrderByAggregateInput = {
    id_proposal?: SortOrder
    candidateId?: SortOrder
  }

  export type CareerCountOrderByAggregateInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
  }

  export type CareerAvgOrderByAggregateInput = {
    id_career?: SortOrder
  }

  export type CareerMaxOrderByAggregateInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
  }

  export type CareerMinOrderByAggregateInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
  }

  export type CareerSumOrderByAggregateInput = {
    id_career?: SortOrder
  }

  export type ElectionScalarRelationFilter = {
    is?: ElectionWhereInput
    isNot?: ElectionWhereInput
  }

  export type ResultCountOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
    electionId?: SortOrder
    candidateId?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
    electionId?: SortOrder
    candidateId?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
    electionId?: SortOrder
    candidateId?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
    electionId?: SortOrder
    candidateId?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
    electionId?: SortOrder
    candidateId?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type ElectionCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<ElectionCreateWithoutAdministradorInput, ElectionUncheckedCreateWithoutAdministradorInput> | ElectionCreateWithoutAdministradorInput[] | ElectionUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: ElectionCreateOrConnectWithoutAdministradorInput | ElectionCreateOrConnectWithoutAdministradorInput[]
    createMany?: ElectionCreateManyAdministradorInputEnvelope
    connect?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
  }

  export type ElectionUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<ElectionCreateWithoutAdministradorInput, ElectionUncheckedCreateWithoutAdministradorInput> | ElectionCreateWithoutAdministradorInput[] | ElectionUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: ElectionCreateOrConnectWithoutAdministradorInput | ElectionCreateOrConnectWithoutAdministradorInput[]
    createMany?: ElectionCreateManyAdministradorInputEnvelope
    connect?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ElectionUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<ElectionCreateWithoutAdministradorInput, ElectionUncheckedCreateWithoutAdministradorInput> | ElectionCreateWithoutAdministradorInput[] | ElectionUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: ElectionCreateOrConnectWithoutAdministradorInput | ElectionCreateOrConnectWithoutAdministradorInput[]
    upsert?: ElectionUpsertWithWhereUniqueWithoutAdministradorInput | ElectionUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: ElectionCreateManyAdministradorInputEnvelope
    set?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
    disconnect?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
    delete?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
    connect?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
    update?: ElectionUpdateWithWhereUniqueWithoutAdministradorInput | ElectionUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: ElectionUpdateManyWithWhereWithoutAdministradorInput | ElectionUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: ElectionScalarWhereInput | ElectionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ElectionUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<ElectionCreateWithoutAdministradorInput, ElectionUncheckedCreateWithoutAdministradorInput> | ElectionCreateWithoutAdministradorInput[] | ElectionUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: ElectionCreateOrConnectWithoutAdministradorInput | ElectionCreateOrConnectWithoutAdministradorInput[]
    upsert?: ElectionUpsertWithWhereUniqueWithoutAdministradorInput | ElectionUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: ElectionCreateManyAdministradorInputEnvelope
    set?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
    disconnect?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
    delete?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
    connect?: ElectionWhereUniqueInput | ElectionWhereUniqueInput[]
    update?: ElectionUpdateWithWhereUniqueWithoutAdministradorInput | ElectionUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: ElectionUpdateManyWithWhereWithoutAdministradorInput | ElectionUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: ElectionScalarWhereInput | ElectionScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutVotersInput = {
    create?: XOR<RoleCreateWithoutVotersInput, RoleUncheckedCreateWithoutVotersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutVotersInput
    connect?: RoleWhereUniqueInput
  }

  export type ElectionCreateNestedOneWithoutVotersInput = {
    create?: XOR<ElectionCreateWithoutVotersInput, ElectionUncheckedCreateWithoutVotersInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVotersInput
    connect?: ElectionWhereUniqueInput
  }

  export type CareerCreateNestedOneWithoutVotersInput = {
    create?: XOR<CareerCreateWithoutVotersInput, CareerUncheckedCreateWithoutVotersInput>
    connectOrCreate?: CareerCreateOrConnectWithoutVotersInput
    connect?: CareerWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type RoleUpdateOneRequiredWithoutVotersNestedInput = {
    create?: XOR<RoleCreateWithoutVotersInput, RoleUncheckedCreateWithoutVotersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutVotersInput
    upsert?: RoleUpsertWithoutVotersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutVotersInput, RoleUpdateWithoutVotersInput>, RoleUncheckedUpdateWithoutVotersInput>
  }

  export type ElectionUpdateOneWithoutVotersNestedInput = {
    create?: XOR<ElectionCreateWithoutVotersInput, ElectionUncheckedCreateWithoutVotersInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVotersInput
    upsert?: ElectionUpsertWithoutVotersInput
    disconnect?: ElectionWhereInput | boolean
    delete?: ElectionWhereInput | boolean
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutVotersInput, ElectionUpdateWithoutVotersInput>, ElectionUncheckedUpdateWithoutVotersInput>
  }

  export type CareerUpdateOneRequiredWithoutVotersNestedInput = {
    create?: XOR<CareerCreateWithoutVotersInput, CareerUncheckedCreateWithoutVotersInput>
    connectOrCreate?: CareerCreateOrConnectWithoutVotersInput
    upsert?: CareerUpsertWithoutVotersInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutVotersInput, CareerUpdateWithoutVotersInput>, CareerUncheckedUpdateWithoutVotersInput>
  }

  export type VoteUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VoteUncheckedUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type AdministradorCreateNestedOneWithoutElectionsInput = {
    create?: XOR<AdministradorCreateWithoutElectionsInput, AdministradorUncheckedCreateWithoutElectionsInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutElectionsInput
    connect?: AdministradorWhereUniqueInput
  }

  export type CandidateCreateNestedManyWithoutElectionInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoterCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoterCreateWithoutElectionInput, VoterUncheckedCreateWithoutElectionInput> | VoterCreateWithoutElectionInput[] | VoterUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutElectionInput | VoterCreateOrConnectWithoutElectionInput[]
    createMany?: VoterCreateManyElectionInputEnvelope
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
  }

  export type ResultCreateNestedOneWithoutElectionInput = {
    create?: XOR<ResultCreateWithoutElectionInput, ResultUncheckedCreateWithoutElectionInput>
    connectOrCreate?: ResultCreateOrConnectWithoutElectionInput
    connect?: ResultWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoterUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoterCreateWithoutElectionInput, VoterUncheckedCreateWithoutElectionInput> | VoterCreateWithoutElectionInput[] | VoterUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutElectionInput | VoterCreateOrConnectWithoutElectionInput[]
    createMany?: VoterCreateManyElectionInputEnvelope
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedOneWithoutElectionInput = {
    create?: XOR<ResultCreateWithoutElectionInput, ResultUncheckedCreateWithoutElectionInput>
    connectOrCreate?: ResultCreateOrConnectWithoutElectionInput
    connect?: ResultWhereUniqueInput
  }

  export type VoteUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdministradorUpdateOneRequiredWithoutElectionsNestedInput = {
    create?: XOR<AdministradorCreateWithoutElectionsInput, AdministradorUncheckedCreateWithoutElectionsInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutElectionsInput
    upsert?: AdministradorUpsertWithoutElectionsInput
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutElectionsInput, AdministradorUpdateWithoutElectionsInput>, AdministradorUncheckedUpdateWithoutElectionsInput>
  }

  export type CandidateUpdateManyWithoutElectionNestedInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutElectionInput | CandidateUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutElectionInput | CandidateUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutElectionInput | CandidateUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type VoterUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoterCreateWithoutElectionInput, VoterUncheckedCreateWithoutElectionInput> | VoterCreateWithoutElectionInput[] | VoterUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutElectionInput | VoterCreateOrConnectWithoutElectionInput[]
    upsert?: VoterUpsertWithWhereUniqueWithoutElectionInput | VoterUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoterCreateManyElectionInputEnvelope
    set?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    disconnect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    delete?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    update?: VoterUpdateWithWhereUniqueWithoutElectionInput | VoterUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoterUpdateManyWithWhereWithoutElectionInput | VoterUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoterScalarWhereInput | VoterScalarWhereInput[]
  }

  export type ResultUpdateOneWithoutElectionNestedInput = {
    create?: XOR<ResultCreateWithoutElectionInput, ResultUncheckedCreateWithoutElectionInput>
    connectOrCreate?: ResultCreateOrConnectWithoutElectionInput
    upsert?: ResultUpsertWithoutElectionInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutElectionInput, ResultUpdateWithoutElectionInput>, ResultUncheckedUpdateWithoutElectionInput>
  }

  export type VoteUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutElectionInput | VoteUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutElectionInput | VoteUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutElectionInput | VoteUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CandidateUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput> | CandidateCreateWithoutElectionInput[] | CandidateUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutElectionInput | CandidateCreateOrConnectWithoutElectionInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutElectionInput | CandidateUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: CandidateCreateManyElectionInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutElectionInput | CandidateUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutElectionInput | CandidateUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type VoterUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoterCreateWithoutElectionInput, VoterUncheckedCreateWithoutElectionInput> | VoterCreateWithoutElectionInput[] | VoterUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutElectionInput | VoterCreateOrConnectWithoutElectionInput[]
    upsert?: VoterUpsertWithWhereUniqueWithoutElectionInput | VoterUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoterCreateManyElectionInputEnvelope
    set?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    disconnect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    delete?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    update?: VoterUpdateWithWhereUniqueWithoutElectionInput | VoterUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoterUpdateManyWithWhereWithoutElectionInput | VoterUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoterScalarWhereInput | VoterScalarWhereInput[]
  }

  export type ResultUncheckedUpdateOneWithoutElectionNestedInput = {
    create?: XOR<ResultCreateWithoutElectionInput, ResultUncheckedCreateWithoutElectionInput>
    connectOrCreate?: ResultCreateOrConnectWithoutElectionInput
    upsert?: ResultUpsertWithoutElectionInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutElectionInput, ResultUpdateWithoutElectionInput>, ResultUncheckedUpdateWithoutElectionInput>
  }

  export type VoteUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput> | VoteCreateWithoutElectionInput[] | VoteUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutElectionInput | VoteCreateOrConnectWithoutElectionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutElectionInput | VoteUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VoteCreateManyElectionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutElectionInput | VoteUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutElectionInput | VoteUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<RoleCreateWithoutCandidatesInput, RoleUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutCandidatesInput
    connect?: RoleWhereUniqueInput
  }

  export type CareerCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<CareerCreateWithoutCandidatesInput, CareerUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: CareerCreateOrConnectWithoutCandidatesInput
    connect?: CareerWhereUniqueInput
  }

  export type ElectionCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutCandidatesInput
    connect?: ElectionWhereUniqueInput
  }

  export type ProposalCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ProposalCreateWithoutCandidateInput, ProposalUncheckedCreateWithoutCandidateInput> | ProposalCreateWithoutCandidateInput[] | ProposalUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutCandidateInput | ProposalCreateOrConnectWithoutCandidateInput[]
    createMany?: ProposalCreateManyCandidateInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ResultCreateNestedOneWithoutCandidateInput = {
    create?: XOR<ResultCreateWithoutCandidateInput, ResultUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: ResultCreateOrConnectWithoutCandidateInput
    connect?: ResultWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutCandidateInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ProposalCreateWithoutCandidateInput, ProposalUncheckedCreateWithoutCandidateInput> | ProposalCreateWithoutCandidateInput[] | ProposalUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutCandidateInput | ProposalCreateOrConnectWithoutCandidateInput[]
    createMany?: ProposalCreateManyCandidateInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedOneWithoutCandidateInput = {
    create?: XOR<ResultCreateWithoutCandidateInput, ResultUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: ResultCreateOrConnectWithoutCandidateInput
    connect?: ResultWhereUniqueInput
  }

  export type VoteUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoleUpdateOneRequiredWithoutCandidatesNestedInput = {
    create?: XOR<RoleCreateWithoutCandidatesInput, RoleUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutCandidatesInput
    upsert?: RoleUpsertWithoutCandidatesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutCandidatesInput, RoleUpdateWithoutCandidatesInput>, RoleUncheckedUpdateWithoutCandidatesInput>
  }

  export type CareerUpdateOneRequiredWithoutCandidatesNestedInput = {
    create?: XOR<CareerCreateWithoutCandidatesInput, CareerUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: CareerCreateOrConnectWithoutCandidatesInput
    upsert?: CareerUpsertWithoutCandidatesInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutCandidatesInput, CareerUpdateWithoutCandidatesInput>, CareerUncheckedUpdateWithoutCandidatesInput>
  }

  export type ElectionUpdateOneWithoutCandidatesNestedInput = {
    create?: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutCandidatesInput
    upsert?: ElectionUpsertWithoutCandidatesInput
    disconnect?: ElectionWhereInput | boolean
    delete?: ElectionWhereInput | boolean
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutCandidatesInput, ElectionUpdateWithoutCandidatesInput>, ElectionUncheckedUpdateWithoutCandidatesInput>
  }

  export type ProposalUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ProposalCreateWithoutCandidateInput, ProposalUncheckedCreateWithoutCandidateInput> | ProposalCreateWithoutCandidateInput[] | ProposalUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutCandidateInput | ProposalCreateOrConnectWithoutCandidateInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutCandidateInput | ProposalUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ProposalCreateManyCandidateInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutCandidateInput | ProposalUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutCandidateInput | ProposalUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ResultUpdateOneWithoutCandidateNestedInput = {
    create?: XOR<ResultCreateWithoutCandidateInput, ResultUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: ResultCreateOrConnectWithoutCandidateInput
    upsert?: ResultUpsertWithoutCandidateInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutCandidateInput, ResultUpdateWithoutCandidateInput>, ResultUncheckedUpdateWithoutCandidateInput>
  }

  export type VoteUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutCandidateInput | VoteUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutCandidateInput | VoteUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutCandidateInput | VoteUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ProposalCreateWithoutCandidateInput, ProposalUncheckedCreateWithoutCandidateInput> | ProposalCreateWithoutCandidateInput[] | ProposalUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutCandidateInput | ProposalCreateOrConnectWithoutCandidateInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutCandidateInput | ProposalUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ProposalCreateManyCandidateInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutCandidateInput | ProposalUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutCandidateInput | ProposalUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ResultUncheckedUpdateOneWithoutCandidateNestedInput = {
    create?: XOR<ResultCreateWithoutCandidateInput, ResultUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: ResultCreateOrConnectWithoutCandidateInput
    upsert?: ResultUpsertWithoutCandidateInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutCandidateInput, ResultUpdateWithoutCandidateInput>, ResultUncheckedUpdateWithoutCandidateInput>
  }

  export type VoteUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput> | VoteCreateWithoutCandidateInput[] | VoteUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCandidateInput | VoteCreateOrConnectWithoutCandidateInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutCandidateInput | VoteUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: VoteCreateManyCandidateInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutCandidateInput | VoteUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutCandidateInput | VoteUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoterCreateNestedOneWithoutVoteInput = {
    create?: XOR<VoterCreateWithoutVoteInput, VoterUncheckedCreateWithoutVoteInput>
    connectOrCreate?: VoterCreateOrConnectWithoutVoteInput
    connect?: VoterWhereUniqueInput
  }

  export type CandidateCreateNestedOneWithoutVotesInput = {
    create?: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutVotesInput
    connect?: CandidateWhereUniqueInput
  }

  export type ElectionCreateNestedOneWithoutVoteInput = {
    create?: XOR<ElectionCreateWithoutVoteInput, ElectionUncheckedCreateWithoutVoteInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVoteInput
    connect?: ElectionWhereUniqueInput
  }

  export type VoterUpdateOneRequiredWithoutVoteNestedInput = {
    create?: XOR<VoterCreateWithoutVoteInput, VoterUncheckedCreateWithoutVoteInput>
    connectOrCreate?: VoterCreateOrConnectWithoutVoteInput
    upsert?: VoterUpsertWithoutVoteInput
    connect?: VoterWhereUniqueInput
    update?: XOR<XOR<VoterUpdateToOneWithWhereWithoutVoteInput, VoterUpdateWithoutVoteInput>, VoterUncheckedUpdateWithoutVoteInput>
  }

  export type CandidateUpdateOneWithoutVotesNestedInput = {
    create?: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutVotesInput
    upsert?: CandidateUpsertWithoutVotesInput
    disconnect?: CandidateWhereInput | boolean
    delete?: CandidateWhereInput | boolean
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutVotesInput, CandidateUpdateWithoutVotesInput>, CandidateUncheckedUpdateWithoutVotesInput>
  }

  export type ElectionUpdateOneWithoutVoteNestedInput = {
    create?: XOR<ElectionCreateWithoutVoteInput, ElectionUncheckedCreateWithoutVoteInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutVoteInput
    upsert?: ElectionUpsertWithoutVoteInput
    disconnect?: ElectionWhereInput | boolean
    delete?: ElectionWhereInput | boolean
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutVoteInput, ElectionUpdateWithoutVoteInput>, ElectionUncheckedUpdateWithoutVoteInput>
  }

  export type CandidateCreateNestedOneWithoutProposalsInput = {
    create?: XOR<CandidateCreateWithoutProposalsInput, CandidateUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutProposalsInput
    connect?: CandidateWhereUniqueInput
  }

  export type CandidateUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<CandidateCreateWithoutProposalsInput, CandidateUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutProposalsInput
    upsert?: CandidateUpsertWithoutProposalsInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutProposalsInput, CandidateUpdateWithoutProposalsInput>, CandidateUncheckedUpdateWithoutProposalsInput>
  }

  export type VoterCreateNestedManyWithoutCareerInput = {
    create?: XOR<VoterCreateWithoutCareerInput, VoterUncheckedCreateWithoutCareerInput> | VoterCreateWithoutCareerInput[] | VoterUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutCareerInput | VoterCreateOrConnectWithoutCareerInput[]
    createMany?: VoterCreateManyCareerInputEnvelope
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
  }

  export type CandidateCreateNestedManyWithoutCareerInput = {
    create?: XOR<CandidateCreateWithoutCareerInput, CandidateUncheckedCreateWithoutCareerInput> | CandidateCreateWithoutCareerInput[] | CandidateUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutCareerInput | CandidateCreateOrConnectWithoutCareerInput[]
    createMany?: CandidateCreateManyCareerInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoterUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<VoterCreateWithoutCareerInput, VoterUncheckedCreateWithoutCareerInput> | VoterCreateWithoutCareerInput[] | VoterUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutCareerInput | VoterCreateOrConnectWithoutCareerInput[]
    createMany?: VoterCreateManyCareerInputEnvelope
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<CandidateCreateWithoutCareerInput, CandidateUncheckedCreateWithoutCareerInput> | CandidateCreateWithoutCareerInput[] | CandidateUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutCareerInput | CandidateCreateOrConnectWithoutCareerInput[]
    createMany?: CandidateCreateManyCareerInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoterUpdateManyWithoutCareerNestedInput = {
    create?: XOR<VoterCreateWithoutCareerInput, VoterUncheckedCreateWithoutCareerInput> | VoterCreateWithoutCareerInput[] | VoterUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutCareerInput | VoterCreateOrConnectWithoutCareerInput[]
    upsert?: VoterUpsertWithWhereUniqueWithoutCareerInput | VoterUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: VoterCreateManyCareerInputEnvelope
    set?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    disconnect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    delete?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    update?: VoterUpdateWithWhereUniqueWithoutCareerInput | VoterUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: VoterUpdateManyWithWhereWithoutCareerInput | VoterUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: VoterScalarWhereInput | VoterScalarWhereInput[]
  }

  export type CandidateUpdateManyWithoutCareerNestedInput = {
    create?: XOR<CandidateCreateWithoutCareerInput, CandidateUncheckedCreateWithoutCareerInput> | CandidateCreateWithoutCareerInput[] | CandidateUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutCareerInput | CandidateCreateOrConnectWithoutCareerInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutCareerInput | CandidateUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: CandidateCreateManyCareerInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutCareerInput | CandidateUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutCareerInput | CandidateUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type VoterUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<VoterCreateWithoutCareerInput, VoterUncheckedCreateWithoutCareerInput> | VoterCreateWithoutCareerInput[] | VoterUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutCareerInput | VoterCreateOrConnectWithoutCareerInput[]
    upsert?: VoterUpsertWithWhereUniqueWithoutCareerInput | VoterUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: VoterCreateManyCareerInputEnvelope
    set?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    disconnect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    delete?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    update?: VoterUpdateWithWhereUniqueWithoutCareerInput | VoterUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: VoterUpdateManyWithWhereWithoutCareerInput | VoterUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: VoterScalarWhereInput | VoterScalarWhereInput[]
  }

  export type CandidateUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<CandidateCreateWithoutCareerInput, CandidateUncheckedCreateWithoutCareerInput> | CandidateCreateWithoutCareerInput[] | CandidateUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutCareerInput | CandidateCreateOrConnectWithoutCareerInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutCareerInput | CandidateUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: CandidateCreateManyCareerInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutCareerInput | CandidateUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutCareerInput | CandidateUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type ElectionCreateNestedOneWithoutResultInput = {
    create?: XOR<ElectionCreateWithoutResultInput, ElectionUncheckedCreateWithoutResultInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutResultInput
    connect?: ElectionWhereUniqueInput
  }

  export type CandidateCreateNestedOneWithoutResultInput = {
    create?: XOR<CandidateCreateWithoutResultInput, CandidateUncheckedCreateWithoutResultInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutResultInput
    connect?: CandidateWhereUniqueInput
  }

  export type ElectionUpdateOneRequiredWithoutResultNestedInput = {
    create?: XOR<ElectionCreateWithoutResultInput, ElectionUncheckedCreateWithoutResultInput>
    connectOrCreate?: ElectionCreateOrConnectWithoutResultInput
    upsert?: ElectionUpsertWithoutResultInput
    connect?: ElectionWhereUniqueInput
    update?: XOR<XOR<ElectionUpdateToOneWithWhereWithoutResultInput, ElectionUpdateWithoutResultInput>, ElectionUncheckedUpdateWithoutResultInput>
  }

  export type CandidateUpdateOneRequiredWithoutResultNestedInput = {
    create?: XOR<CandidateCreateWithoutResultInput, CandidateUncheckedCreateWithoutResultInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutResultInput
    upsert?: CandidateUpsertWithoutResultInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutResultInput, CandidateUpdateWithoutResultInput>, CandidateUncheckedUpdateWithoutResultInput>
  }

  export type VoterCreateNestedManyWithoutRoleInput = {
    create?: XOR<VoterCreateWithoutRoleInput, VoterUncheckedCreateWithoutRoleInput> | VoterCreateWithoutRoleInput[] | VoterUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutRoleInput | VoterCreateOrConnectWithoutRoleInput[]
    createMany?: VoterCreateManyRoleInputEnvelope
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
  }

  export type CandidateCreateNestedManyWithoutRoleInput = {
    create?: XOR<CandidateCreateWithoutRoleInput, CandidateUncheckedCreateWithoutRoleInput> | CandidateCreateWithoutRoleInput[] | CandidateUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutRoleInput | CandidateCreateOrConnectWithoutRoleInput[]
    createMany?: CandidateCreateManyRoleInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoterUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<VoterCreateWithoutRoleInput, VoterUncheckedCreateWithoutRoleInput> | VoterCreateWithoutRoleInput[] | VoterUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutRoleInput | VoterCreateOrConnectWithoutRoleInput[]
    createMany?: VoterCreateManyRoleInputEnvelope
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<CandidateCreateWithoutRoleInput, CandidateUncheckedCreateWithoutRoleInput> | CandidateCreateWithoutRoleInput[] | CandidateUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutRoleInput | CandidateCreateOrConnectWithoutRoleInput[]
    createMany?: CandidateCreateManyRoleInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type VoterUpdateManyWithoutRoleNestedInput = {
    create?: XOR<VoterCreateWithoutRoleInput, VoterUncheckedCreateWithoutRoleInput> | VoterCreateWithoutRoleInput[] | VoterUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutRoleInput | VoterCreateOrConnectWithoutRoleInput[]
    upsert?: VoterUpsertWithWhereUniqueWithoutRoleInput | VoterUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: VoterCreateManyRoleInputEnvelope
    set?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    disconnect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    delete?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    update?: VoterUpdateWithWhereUniqueWithoutRoleInput | VoterUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: VoterUpdateManyWithWhereWithoutRoleInput | VoterUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: VoterScalarWhereInput | VoterScalarWhereInput[]
  }

  export type CandidateUpdateManyWithoutRoleNestedInput = {
    create?: XOR<CandidateCreateWithoutRoleInput, CandidateUncheckedCreateWithoutRoleInput> | CandidateCreateWithoutRoleInput[] | CandidateUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutRoleInput | CandidateCreateOrConnectWithoutRoleInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutRoleInput | CandidateUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: CandidateCreateManyRoleInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutRoleInput | CandidateUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutRoleInput | CandidateUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type VoterUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<VoterCreateWithoutRoleInput, VoterUncheckedCreateWithoutRoleInput> | VoterCreateWithoutRoleInput[] | VoterUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: VoterCreateOrConnectWithoutRoleInput | VoterCreateOrConnectWithoutRoleInput[]
    upsert?: VoterUpsertWithWhereUniqueWithoutRoleInput | VoterUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: VoterCreateManyRoleInputEnvelope
    set?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    disconnect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    delete?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    connect?: VoterWhereUniqueInput | VoterWhereUniqueInput[]
    update?: VoterUpdateWithWhereUniqueWithoutRoleInput | VoterUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: VoterUpdateManyWithWhereWithoutRoleInput | VoterUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: VoterScalarWhereInput | VoterScalarWhereInput[]
  }

  export type CandidateUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<CandidateCreateWithoutRoleInput, CandidateUncheckedCreateWithoutRoleInput> | CandidateCreateWithoutRoleInput[] | CandidateUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutRoleInput | CandidateCreateOrConnectWithoutRoleInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutRoleInput | CandidateUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: CandidateCreateManyRoleInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutRoleInput | CandidateUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutRoleInput | CandidateUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ElectionCreateWithoutAdministradorInput = {
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    voters?: VoterCreateNestedManyWithoutElectionInput
    result?: ResultCreateNestedOneWithoutElectionInput
    Vote?: VoteCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutAdministradorInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    voters?: VoterUncheckedCreateNestedManyWithoutElectionInput
    result?: ResultUncheckedCreateNestedOneWithoutElectionInput
    Vote?: VoteUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutAdministradorInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutAdministradorInput, ElectionUncheckedCreateWithoutAdministradorInput>
  }

  export type ElectionCreateManyAdministradorInputEnvelope = {
    data: ElectionCreateManyAdministradorInput | ElectionCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type ElectionUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: ElectionWhereUniqueInput
    update: XOR<ElectionUpdateWithoutAdministradorInput, ElectionUncheckedUpdateWithoutAdministradorInput>
    create: XOR<ElectionCreateWithoutAdministradorInput, ElectionUncheckedCreateWithoutAdministradorInput>
  }

  export type ElectionUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: ElectionWhereUniqueInput
    data: XOR<ElectionUpdateWithoutAdministradorInput, ElectionUncheckedUpdateWithoutAdministradorInput>
  }

  export type ElectionUpdateManyWithWhereWithoutAdministradorInput = {
    where: ElectionScalarWhereInput
    data: XOR<ElectionUpdateManyMutationInput, ElectionUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type ElectionScalarWhereInput = {
    AND?: ElectionScalarWhereInput | ElectionScalarWhereInput[]
    OR?: ElectionScalarWhereInput[]
    NOT?: ElectionScalarWhereInput | ElectionScalarWhereInput[]
    id_election?: IntFilter<"Election"> | number
    nombre_election?: StringFilter<"Election"> | string
    fecha_inicio?: DateTimeFilter<"Election"> | Date | string
    fecha_fin?: DateTimeFilter<"Election"> | Date | string
    estado_election?: StringFilter<"Election"> | string
    admin_id?: IntFilter<"Election"> | number
  }

  export type RoleCreateWithoutVotersInput = {
    nombre_role: string
    candidates?: CandidateCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutVotersInput = {
    id_role?: number
    nombre_role: string
    candidates?: CandidateUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutVotersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutVotersInput, RoleUncheckedCreateWithoutVotersInput>
  }

  export type ElectionCreateWithoutVotersInput = {
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    administrador: AdministradorCreateNestedOneWithoutElectionsInput
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    result?: ResultCreateNestedOneWithoutElectionInput
    Vote?: VoteCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutVotersInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    admin_id: number
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    result?: ResultUncheckedCreateNestedOneWithoutElectionInput
    Vote?: VoteUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutVotersInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutVotersInput, ElectionUncheckedCreateWithoutVotersInput>
  }

  export type CareerCreateWithoutVotersInput = {
    nombre_career: string
    facultad_career: string
    candidates?: CandidateCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutVotersInput = {
    id_career?: number
    nombre_career: string
    facultad_career: string
    candidates?: CandidateUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutVotersInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutVotersInput, CareerUncheckedCreateWithoutVotersInput>
  }

  export type VoteCreateWithoutVoterInput = {
    fecha_vote: Date | string
    hora_vote: Date | string
    candidate?: CandidateCreateNestedOneWithoutVotesInput
    election?: ElectionCreateNestedOneWithoutVoteInput
  }

  export type VoteUncheckedCreateWithoutVoterInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
    candidateId?: number | null
    electionId?: number | null
  }

  export type VoteCreateOrConnectWithoutVoterInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteCreateManyVoterInputEnvelope = {
    data: VoteCreateManyVoterInput | VoteCreateManyVoterInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutVotersInput = {
    update: XOR<RoleUpdateWithoutVotersInput, RoleUncheckedUpdateWithoutVotersInput>
    create: XOR<RoleCreateWithoutVotersInput, RoleUncheckedCreateWithoutVotersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutVotersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutVotersInput, RoleUncheckedUpdateWithoutVotersInput>
  }

  export type RoleUpdateWithoutVotersInput = {
    nombre_role?: StringFieldUpdateOperationsInput | string
    candidates?: CandidateUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutVotersInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    nombre_role?: StringFieldUpdateOperationsInput | string
    candidates?: CandidateUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ElectionUpsertWithoutVotersInput = {
    update: XOR<ElectionUpdateWithoutVotersInput, ElectionUncheckedUpdateWithoutVotersInput>
    create: XOR<ElectionCreateWithoutVotersInput, ElectionUncheckedCreateWithoutVotersInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutVotersInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutVotersInput, ElectionUncheckedUpdateWithoutVotersInput>
  }

  export type ElectionUpdateWithoutVotersInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    administrador?: AdministradorUpdateOneRequiredWithoutElectionsNestedInput
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    result?: ResultUpdateOneWithoutElectionNestedInput
    Vote?: VoteUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutVotersInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    result?: ResultUncheckedUpdateOneWithoutElectionNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type CareerUpsertWithoutVotersInput = {
    update: XOR<CareerUpdateWithoutVotersInput, CareerUncheckedUpdateWithoutVotersInput>
    create: XOR<CareerCreateWithoutVotersInput, CareerUncheckedCreateWithoutVotersInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutVotersInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutVotersInput, CareerUncheckedUpdateWithoutVotersInput>
  }

  export type CareerUpdateWithoutVotersInput = {
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
    candidates?: CandidateUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutVotersInput = {
    id_career?: IntFieldUpdateOperationsInput | number
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
    candidates?: CandidateUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type VoteUpsertWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
  }

  export type VoteUpdateManyWithWhereWithoutVoterInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutVoterInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id_vote?: IntFilter<"Vote"> | number
    fecha_vote?: DateTimeFilter<"Vote"> | Date | string
    hora_vote?: DateTimeFilter<"Vote"> | Date | string
    voterId?: IntFilter<"Vote"> | number
    candidateId?: IntNullableFilter<"Vote"> | number | null
    electionId?: IntNullableFilter<"Vote"> | number | null
  }

  export type AdministradorCreateWithoutElectionsInput = {
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: bigint | number
    correo_admin: string
    contrasena_admin: string
  }

  export type AdministradorUncheckedCreateWithoutElectionsInput = {
    id_admin?: number
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: bigint | number
    correo_admin: string
    contrasena_admin: string
  }

  export type AdministradorCreateOrConnectWithoutElectionsInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutElectionsInput, AdministradorUncheckedCreateWithoutElectionsInput>
  }

  export type CandidateCreateWithoutElectionInput = {
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    role: RoleCreateNestedOneWithoutCandidatesInput
    career: CareerCreateNestedOneWithoutCandidatesInput
    proposals?: ProposalCreateNestedManyWithoutCandidateInput
    result?: ResultCreateNestedOneWithoutCandidateInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutElectionInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    roleId: number
    careerId: number
    proposals?: ProposalUncheckedCreateNestedManyWithoutCandidateInput
    result?: ResultUncheckedCreateNestedOneWithoutCandidateInput
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutElectionInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput>
  }

  export type CandidateCreateManyElectionInputEnvelope = {
    data: CandidateCreateManyElectionInput | CandidateCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type VoterCreateWithoutElectionInput = {
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    role: RoleCreateNestedOneWithoutVotersInput
    career: CareerCreateNestedOneWithoutVotersInput
    vote?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutElectionInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    roleId: number
    careerId: number
    vote?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutElectionInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutElectionInput, VoterUncheckedCreateWithoutElectionInput>
  }

  export type VoterCreateManyElectionInputEnvelope = {
    data: VoterCreateManyElectionInput | VoterCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type ResultCreateWithoutElectionInput = {
    total_votes: number
    candidate: CandidateCreateNestedOneWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutElectionInput = {
    id_result?: number
    total_votes: number
    candidateId: number
  }

  export type ResultCreateOrConnectWithoutElectionInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutElectionInput, ResultUncheckedCreateWithoutElectionInput>
  }

  export type VoteCreateWithoutElectionInput = {
    fecha_vote: Date | string
    hora_vote: Date | string
    voter: VoterCreateNestedOneWithoutVoteInput
    candidate?: CandidateCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutElectionInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
    voterId: number
    candidateId?: number | null
  }

  export type VoteCreateOrConnectWithoutElectionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput>
  }

  export type VoteCreateManyElectionInputEnvelope = {
    data: VoteCreateManyElectionInput | VoteCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type AdministradorUpsertWithoutElectionsInput = {
    update: XOR<AdministradorUpdateWithoutElectionsInput, AdministradorUncheckedUpdateWithoutElectionsInput>
    create: XOR<AdministradorCreateWithoutElectionsInput, AdministradorUncheckedCreateWithoutElectionsInput>
    where?: AdministradorWhereInput
  }

  export type AdministradorUpdateToOneWithWhereWithoutElectionsInput = {
    where?: AdministradorWhereInput
    data: XOR<AdministradorUpdateWithoutElectionsInput, AdministradorUncheckedUpdateWithoutElectionsInput>
  }

  export type AdministradorUpdateWithoutElectionsInput = {
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
  }

  export type AdministradorUncheckedUpdateWithoutElectionsInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
  }

  export type CandidateUpsertWithWhereUniqueWithoutElectionInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutElectionInput, CandidateUncheckedUpdateWithoutElectionInput>
    create: XOR<CandidateCreateWithoutElectionInput, CandidateUncheckedCreateWithoutElectionInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutElectionInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutElectionInput, CandidateUncheckedUpdateWithoutElectionInput>
  }

  export type CandidateUpdateManyWithWhereWithoutElectionInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutElectionInput>
  }

  export type CandidateScalarWhereInput = {
    AND?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    OR?: CandidateScalarWhereInput[]
    NOT?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    id_candidate?: IntFilter<"Candidate"> | number
    nombre_candidate?: StringFilter<"Candidate"> | string
    apellido_candidate?: StringFilter<"Candidate"> | string
    tipo_doc_candidate?: StringFilter<"Candidate"> | string
    num_doc_candidate?: BigIntFilter<"Candidate"> | bigint | number
    correo_candidate?: StringFilter<"Candidate"> | string
    estado_candidate?: StringFilter<"Candidate"> | string
    foto_candidate?: StringNullableFilter<"Candidate"> | string | null
    contrasena_candidate?: StringFilter<"Candidate"> | string
    roleId?: IntFilter<"Candidate"> | number
    careerId?: IntFilter<"Candidate"> | number
    electionId?: IntNullableFilter<"Candidate"> | number | null
  }

  export type VoterUpsertWithWhereUniqueWithoutElectionInput = {
    where: VoterWhereUniqueInput
    update: XOR<VoterUpdateWithoutElectionInput, VoterUncheckedUpdateWithoutElectionInput>
    create: XOR<VoterCreateWithoutElectionInput, VoterUncheckedCreateWithoutElectionInput>
  }

  export type VoterUpdateWithWhereUniqueWithoutElectionInput = {
    where: VoterWhereUniqueInput
    data: XOR<VoterUpdateWithoutElectionInput, VoterUncheckedUpdateWithoutElectionInput>
  }

  export type VoterUpdateManyWithWhereWithoutElectionInput = {
    where: VoterScalarWhereInput
    data: XOR<VoterUpdateManyMutationInput, VoterUncheckedUpdateManyWithoutElectionInput>
  }

  export type VoterScalarWhereInput = {
    AND?: VoterScalarWhereInput | VoterScalarWhereInput[]
    OR?: VoterScalarWhereInput[]
    NOT?: VoterScalarWhereInput | VoterScalarWhereInput[]
    id_voter?: IntFilter<"Voter"> | number
    nombre_voter?: StringFilter<"Voter"> | string
    apellido_voter?: StringFilter<"Voter"> | string
    tipo_doc_voter?: StringFilter<"Voter"> | string
    num_doc_voter?: BigIntFilter<"Voter"> | bigint | number
    correo_voter?: StringFilter<"Voter"> | string
    estado_voter?: StringFilter<"Voter"> | string
    contrasena_voter?: StringFilter<"Voter"> | string
    roleId?: IntFilter<"Voter"> | number
    electionId?: IntNullableFilter<"Voter"> | number | null
    careerId?: IntFilter<"Voter"> | number
  }

  export type ResultUpsertWithoutElectionInput = {
    update: XOR<ResultUpdateWithoutElectionInput, ResultUncheckedUpdateWithoutElectionInput>
    create: XOR<ResultCreateWithoutElectionInput, ResultUncheckedCreateWithoutElectionInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutElectionInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutElectionInput, ResultUncheckedUpdateWithoutElectionInput>
  }

  export type ResultUpdateWithoutElectionInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
    candidate?: CandidateUpdateOneRequiredWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutElectionInput = {
    id_result?: IntFieldUpdateOperationsInput | number
    total_votes?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteUpsertWithWhereUniqueWithoutElectionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutElectionInput, VoteUncheckedUpdateWithoutElectionInput>
    create: XOR<VoteCreateWithoutElectionInput, VoteUncheckedCreateWithoutElectionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutElectionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutElectionInput, VoteUncheckedUpdateWithoutElectionInput>
  }

  export type VoteUpdateManyWithWhereWithoutElectionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutElectionInput>
  }

  export type RoleCreateWithoutCandidatesInput = {
    nombre_role: string
    voters?: VoterCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutCandidatesInput = {
    id_role?: number
    nombre_role: string
    voters?: VoterUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutCandidatesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutCandidatesInput, RoleUncheckedCreateWithoutCandidatesInput>
  }

  export type CareerCreateWithoutCandidatesInput = {
    nombre_career: string
    facultad_career: string
    voters?: VoterCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutCandidatesInput = {
    id_career?: number
    nombre_career: string
    facultad_career: string
    voters?: VoterUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutCandidatesInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutCandidatesInput, CareerUncheckedCreateWithoutCandidatesInput>
  }

  export type ElectionCreateWithoutCandidatesInput = {
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    administrador: AdministradorCreateNestedOneWithoutElectionsInput
    voters?: VoterCreateNestedManyWithoutElectionInput
    result?: ResultCreateNestedOneWithoutElectionInput
    Vote?: VoteCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutCandidatesInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    admin_id: number
    voters?: VoterUncheckedCreateNestedManyWithoutElectionInput
    result?: ResultUncheckedCreateNestedOneWithoutElectionInput
    Vote?: VoteUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutCandidatesInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
  }

  export type ProposalCreateWithoutCandidateInput = {
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
  }

  export type ProposalUncheckedCreateWithoutCandidateInput = {
    id_proposal?: number
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
  }

  export type ProposalCreateOrConnectWithoutCandidateInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutCandidateInput, ProposalUncheckedCreateWithoutCandidateInput>
  }

  export type ProposalCreateManyCandidateInputEnvelope = {
    data: ProposalCreateManyCandidateInput | ProposalCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type ResultCreateWithoutCandidateInput = {
    total_votes: number
    election: ElectionCreateNestedOneWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutCandidateInput = {
    id_result?: number
    total_votes: number
    electionId: number
  }

  export type ResultCreateOrConnectWithoutCandidateInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutCandidateInput, ResultUncheckedCreateWithoutCandidateInput>
  }

  export type VoteCreateWithoutCandidateInput = {
    fecha_vote: Date | string
    hora_vote: Date | string
    voter: VoterCreateNestedOneWithoutVoteInput
    election?: ElectionCreateNestedOneWithoutVoteInput
  }

  export type VoteUncheckedCreateWithoutCandidateInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
    voterId: number
    electionId?: number | null
  }

  export type VoteCreateOrConnectWithoutCandidateInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput>
  }

  export type VoteCreateManyCandidateInputEnvelope = {
    data: VoteCreateManyCandidateInput | VoteCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutCandidatesInput = {
    update: XOR<RoleUpdateWithoutCandidatesInput, RoleUncheckedUpdateWithoutCandidatesInput>
    create: XOR<RoleCreateWithoutCandidatesInput, RoleUncheckedCreateWithoutCandidatesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutCandidatesInput, RoleUncheckedUpdateWithoutCandidatesInput>
  }

  export type RoleUpdateWithoutCandidatesInput = {
    nombre_role?: StringFieldUpdateOperationsInput | string
    voters?: VoterUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutCandidatesInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    nombre_role?: StringFieldUpdateOperationsInput | string
    voters?: VoterUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type CareerUpsertWithoutCandidatesInput = {
    update: XOR<CareerUpdateWithoutCandidatesInput, CareerUncheckedUpdateWithoutCandidatesInput>
    create: XOR<CareerCreateWithoutCandidatesInput, CareerUncheckedCreateWithoutCandidatesInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutCandidatesInput, CareerUncheckedUpdateWithoutCandidatesInput>
  }

  export type CareerUpdateWithoutCandidatesInput = {
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
    voters?: VoterUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutCandidatesInput = {
    id_career?: IntFieldUpdateOperationsInput | number
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
    voters?: VoterUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type ElectionUpsertWithoutCandidatesInput = {
    update: XOR<ElectionUpdateWithoutCandidatesInput, ElectionUncheckedUpdateWithoutCandidatesInput>
    create: XOR<ElectionCreateWithoutCandidatesInput, ElectionUncheckedCreateWithoutCandidatesInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutCandidatesInput, ElectionUncheckedUpdateWithoutCandidatesInput>
  }

  export type ElectionUpdateWithoutCandidatesInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    administrador?: AdministradorUpdateOneRequiredWithoutElectionsNestedInput
    voters?: VoterUpdateManyWithoutElectionNestedInput
    result?: ResultUpdateOneWithoutElectionNestedInput
    Vote?: VoteUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutCandidatesInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    voters?: VoterUncheckedUpdateManyWithoutElectionNestedInput
    result?: ResultUncheckedUpdateOneWithoutElectionNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ProposalUpsertWithWhereUniqueWithoutCandidateInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutCandidateInput, ProposalUncheckedUpdateWithoutCandidateInput>
    create: XOR<ProposalCreateWithoutCandidateInput, ProposalUncheckedCreateWithoutCandidateInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutCandidateInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutCandidateInput, ProposalUncheckedUpdateWithoutCandidateInput>
  }

  export type ProposalUpdateManyWithWhereWithoutCandidateInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutCandidateInput>
  }

  export type ProposalScalarWhereInput = {
    AND?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    OR?: ProposalScalarWhereInput[]
    NOT?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    id_proposal?: IntFilter<"Proposal"> | number
    titulo_proposal?: StringFilter<"Proposal"> | string
    descripcion_proposal?: StringFilter<"Proposal"> | string
    estado_proposal?: StringFilter<"Proposal"> | string
    candidateId?: IntFilter<"Proposal"> | number
  }

  export type ResultUpsertWithoutCandidateInput = {
    update: XOR<ResultUpdateWithoutCandidateInput, ResultUncheckedUpdateWithoutCandidateInput>
    create: XOR<ResultCreateWithoutCandidateInput, ResultUncheckedCreateWithoutCandidateInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutCandidateInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutCandidateInput, ResultUncheckedUpdateWithoutCandidateInput>
  }

  export type ResultUpdateWithoutCandidateInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
    election?: ElectionUpdateOneRequiredWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutCandidateInput = {
    id_result?: IntFieldUpdateOperationsInput | number
    total_votes?: IntFieldUpdateOperationsInput | number
    electionId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteUpsertWithWhereUniqueWithoutCandidateInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutCandidateInput, VoteUncheckedUpdateWithoutCandidateInput>
    create: XOR<VoteCreateWithoutCandidateInput, VoteUncheckedCreateWithoutCandidateInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutCandidateInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutCandidateInput, VoteUncheckedUpdateWithoutCandidateInput>
  }

  export type VoteUpdateManyWithWhereWithoutCandidateInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutCandidateInput>
  }

  export type VoterCreateWithoutVoteInput = {
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    role: RoleCreateNestedOneWithoutVotersInput
    election?: ElectionCreateNestedOneWithoutVotersInput
    career: CareerCreateNestedOneWithoutVotersInput
  }

  export type VoterUncheckedCreateWithoutVoteInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    roleId: number
    electionId?: number | null
    careerId: number
  }

  export type VoterCreateOrConnectWithoutVoteInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutVoteInput, VoterUncheckedCreateWithoutVoteInput>
  }

  export type CandidateCreateWithoutVotesInput = {
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    role: RoleCreateNestedOneWithoutCandidatesInput
    career: CareerCreateNestedOneWithoutCandidatesInput
    election?: ElectionCreateNestedOneWithoutCandidatesInput
    proposals?: ProposalCreateNestedManyWithoutCandidateInput
    result?: ResultCreateNestedOneWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutVotesInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    roleId: number
    careerId: number
    electionId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutCandidateInput
    result?: ResultUncheckedCreateNestedOneWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutVotesInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
  }

  export type ElectionCreateWithoutVoteInput = {
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    administrador: AdministradorCreateNestedOneWithoutElectionsInput
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    voters?: VoterCreateNestedManyWithoutElectionInput
    result?: ResultCreateNestedOneWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutVoteInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    admin_id: number
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    voters?: VoterUncheckedCreateNestedManyWithoutElectionInput
    result?: ResultUncheckedCreateNestedOneWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutVoteInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutVoteInput, ElectionUncheckedCreateWithoutVoteInput>
  }

  export type VoterUpsertWithoutVoteInput = {
    update: XOR<VoterUpdateWithoutVoteInput, VoterUncheckedUpdateWithoutVoteInput>
    create: XOR<VoterCreateWithoutVoteInput, VoterUncheckedCreateWithoutVoteInput>
    where?: VoterWhereInput
  }

  export type VoterUpdateToOneWithWhereWithoutVoteInput = {
    where?: VoterWhereInput
    data: XOR<VoterUpdateWithoutVoteInput, VoterUncheckedUpdateWithoutVoteInput>
  }

  export type VoterUpdateWithoutVoteInput = {
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutVotersNestedInput
    election?: ElectionUpdateOneWithoutVotersNestedInput
    career?: CareerUpdateOneRequiredWithoutVotersNestedInput
  }

  export type VoterUncheckedUpdateWithoutVoteInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateUpsertWithoutVotesInput = {
    update: XOR<CandidateUpdateWithoutVotesInput, CandidateUncheckedUpdateWithoutVotesInput>
    create: XOR<CandidateCreateWithoutVotesInput, CandidateUncheckedCreateWithoutVotesInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutVotesInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutVotesInput, CandidateUncheckedUpdateWithoutVotesInput>
  }

  export type CandidateUpdateWithoutVotesInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutCandidatesNestedInput
    career?: CareerUpdateOneRequiredWithoutCandidatesNestedInput
    election?: ElectionUpdateOneWithoutCandidatesNestedInput
    proposals?: ProposalUpdateManyWithoutCandidateNestedInput
    result?: ResultUpdateOneWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutVotesInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutCandidateNestedInput
    result?: ResultUncheckedUpdateOneWithoutCandidateNestedInput
  }

  export type ElectionUpsertWithoutVoteInput = {
    update: XOR<ElectionUpdateWithoutVoteInput, ElectionUncheckedUpdateWithoutVoteInput>
    create: XOR<ElectionCreateWithoutVoteInput, ElectionUncheckedCreateWithoutVoteInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutVoteInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutVoteInput, ElectionUncheckedUpdateWithoutVoteInput>
  }

  export type ElectionUpdateWithoutVoteInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    administrador?: AdministradorUpdateOneRequiredWithoutElectionsNestedInput
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    voters?: VoterUpdateManyWithoutElectionNestedInput
    result?: ResultUpdateOneWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutVoteInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    voters?: VoterUncheckedUpdateManyWithoutElectionNestedInput
    result?: ResultUncheckedUpdateOneWithoutElectionNestedInput
  }

  export type CandidateCreateWithoutProposalsInput = {
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    role: RoleCreateNestedOneWithoutCandidatesInput
    career: CareerCreateNestedOneWithoutCandidatesInput
    election?: ElectionCreateNestedOneWithoutCandidatesInput
    result?: ResultCreateNestedOneWithoutCandidateInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutProposalsInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    roleId: number
    careerId: number
    electionId?: number | null
    result?: ResultUncheckedCreateNestedOneWithoutCandidateInput
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutProposalsInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutProposalsInput, CandidateUncheckedCreateWithoutProposalsInput>
  }

  export type CandidateUpsertWithoutProposalsInput = {
    update: XOR<CandidateUpdateWithoutProposalsInput, CandidateUncheckedUpdateWithoutProposalsInput>
    create: XOR<CandidateCreateWithoutProposalsInput, CandidateUncheckedCreateWithoutProposalsInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutProposalsInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutProposalsInput, CandidateUncheckedUpdateWithoutProposalsInput>
  }

  export type CandidateUpdateWithoutProposalsInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutCandidatesNestedInput
    career?: CareerUpdateOneRequiredWithoutCandidatesNestedInput
    election?: ElectionUpdateOneWithoutCandidatesNestedInput
    result?: ResultUpdateOneWithoutCandidateNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutProposalsInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    result?: ResultUncheckedUpdateOneWithoutCandidateNestedInput
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type VoterCreateWithoutCareerInput = {
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    role: RoleCreateNestedOneWithoutVotersInput
    election?: ElectionCreateNestedOneWithoutVotersInput
    vote?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutCareerInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    roleId: number
    electionId?: number | null
    vote?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutCareerInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutCareerInput, VoterUncheckedCreateWithoutCareerInput>
  }

  export type VoterCreateManyCareerInputEnvelope = {
    data: VoterCreateManyCareerInput | VoterCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type CandidateCreateWithoutCareerInput = {
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    role: RoleCreateNestedOneWithoutCandidatesInput
    election?: ElectionCreateNestedOneWithoutCandidatesInput
    proposals?: ProposalCreateNestedManyWithoutCandidateInput
    result?: ResultCreateNestedOneWithoutCandidateInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutCareerInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    roleId: number
    electionId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutCandidateInput
    result?: ResultUncheckedCreateNestedOneWithoutCandidateInput
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutCareerInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutCareerInput, CandidateUncheckedCreateWithoutCareerInput>
  }

  export type CandidateCreateManyCareerInputEnvelope = {
    data: CandidateCreateManyCareerInput | CandidateCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type VoterUpsertWithWhereUniqueWithoutCareerInput = {
    where: VoterWhereUniqueInput
    update: XOR<VoterUpdateWithoutCareerInput, VoterUncheckedUpdateWithoutCareerInput>
    create: XOR<VoterCreateWithoutCareerInput, VoterUncheckedCreateWithoutCareerInput>
  }

  export type VoterUpdateWithWhereUniqueWithoutCareerInput = {
    where: VoterWhereUniqueInput
    data: XOR<VoterUpdateWithoutCareerInput, VoterUncheckedUpdateWithoutCareerInput>
  }

  export type VoterUpdateManyWithWhereWithoutCareerInput = {
    where: VoterScalarWhereInput
    data: XOR<VoterUpdateManyMutationInput, VoterUncheckedUpdateManyWithoutCareerInput>
  }

  export type CandidateUpsertWithWhereUniqueWithoutCareerInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutCareerInput, CandidateUncheckedUpdateWithoutCareerInput>
    create: XOR<CandidateCreateWithoutCareerInput, CandidateUncheckedCreateWithoutCareerInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutCareerInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutCareerInput, CandidateUncheckedUpdateWithoutCareerInput>
  }

  export type CandidateUpdateManyWithWhereWithoutCareerInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutCareerInput>
  }

  export type ElectionCreateWithoutResultInput = {
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    administrador: AdministradorCreateNestedOneWithoutElectionsInput
    candidates?: CandidateCreateNestedManyWithoutElectionInput
    voters?: VoterCreateNestedManyWithoutElectionInput
    Vote?: VoteCreateNestedManyWithoutElectionInput
  }

  export type ElectionUncheckedCreateWithoutResultInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    admin_id: number
    candidates?: CandidateUncheckedCreateNestedManyWithoutElectionInput
    voters?: VoterUncheckedCreateNestedManyWithoutElectionInput
    Vote?: VoteUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionCreateOrConnectWithoutResultInput = {
    where: ElectionWhereUniqueInput
    create: XOR<ElectionCreateWithoutResultInput, ElectionUncheckedCreateWithoutResultInput>
  }

  export type CandidateCreateWithoutResultInput = {
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    role: RoleCreateNestedOneWithoutCandidatesInput
    career: CareerCreateNestedOneWithoutCandidatesInput
    election?: ElectionCreateNestedOneWithoutCandidatesInput
    proposals?: ProposalCreateNestedManyWithoutCandidateInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutResultInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    roleId: number
    careerId: number
    electionId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutCandidateInput
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutResultInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutResultInput, CandidateUncheckedCreateWithoutResultInput>
  }

  export type ElectionUpsertWithoutResultInput = {
    update: XOR<ElectionUpdateWithoutResultInput, ElectionUncheckedUpdateWithoutResultInput>
    create: XOR<ElectionCreateWithoutResultInput, ElectionUncheckedCreateWithoutResultInput>
    where?: ElectionWhereInput
  }

  export type ElectionUpdateToOneWithWhereWithoutResultInput = {
    where?: ElectionWhereInput
    data: XOR<ElectionUpdateWithoutResultInput, ElectionUncheckedUpdateWithoutResultInput>
  }

  export type ElectionUpdateWithoutResultInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    administrador?: AdministradorUpdateOneRequiredWithoutElectionsNestedInput
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    voters?: VoterUpdateManyWithoutElectionNestedInput
    Vote?: VoteUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutResultInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    voters?: VoterUncheckedUpdateManyWithoutElectionNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type CandidateUpsertWithoutResultInput = {
    update: XOR<CandidateUpdateWithoutResultInput, CandidateUncheckedUpdateWithoutResultInput>
    create: XOR<CandidateCreateWithoutResultInput, CandidateUncheckedCreateWithoutResultInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutResultInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutResultInput, CandidateUncheckedUpdateWithoutResultInput>
  }

  export type CandidateUpdateWithoutResultInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutCandidatesNestedInput
    career?: CareerUpdateOneRequiredWithoutCandidatesNestedInput
    election?: ElectionUpdateOneWithoutCandidatesNestedInput
    proposals?: ProposalUpdateManyWithoutCandidateNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutResultInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutCandidateNestedInput
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type VoterCreateWithoutRoleInput = {
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    election?: ElectionCreateNestedOneWithoutVotersInput
    career: CareerCreateNestedOneWithoutVotersInput
    vote?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutRoleInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    electionId?: number | null
    careerId: number
    vote?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutRoleInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutRoleInput, VoterUncheckedCreateWithoutRoleInput>
  }

  export type VoterCreateManyRoleInputEnvelope = {
    data: VoterCreateManyRoleInput | VoterCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type CandidateCreateWithoutRoleInput = {
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    career: CareerCreateNestedOneWithoutCandidatesInput
    election?: ElectionCreateNestedOneWithoutCandidatesInput
    proposals?: ProposalCreateNestedManyWithoutCandidateInput
    result?: ResultCreateNestedOneWithoutCandidateInput
    votes?: VoteCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutRoleInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    careerId: number
    electionId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutCandidateInput
    result?: ResultUncheckedCreateNestedOneWithoutCandidateInput
    votes?: VoteUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutRoleInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutRoleInput, CandidateUncheckedCreateWithoutRoleInput>
  }

  export type CandidateCreateManyRoleInputEnvelope = {
    data: CandidateCreateManyRoleInput | CandidateCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type VoterUpsertWithWhereUniqueWithoutRoleInput = {
    where: VoterWhereUniqueInput
    update: XOR<VoterUpdateWithoutRoleInput, VoterUncheckedUpdateWithoutRoleInput>
    create: XOR<VoterCreateWithoutRoleInput, VoterUncheckedCreateWithoutRoleInput>
  }

  export type VoterUpdateWithWhereUniqueWithoutRoleInput = {
    where: VoterWhereUniqueInput
    data: XOR<VoterUpdateWithoutRoleInput, VoterUncheckedUpdateWithoutRoleInput>
  }

  export type VoterUpdateManyWithWhereWithoutRoleInput = {
    where: VoterScalarWhereInput
    data: XOR<VoterUpdateManyMutationInput, VoterUncheckedUpdateManyWithoutRoleInput>
  }

  export type CandidateUpsertWithWhereUniqueWithoutRoleInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutRoleInput, CandidateUncheckedUpdateWithoutRoleInput>
    create: XOR<CandidateCreateWithoutRoleInput, CandidateUncheckedCreateWithoutRoleInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutRoleInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutRoleInput, CandidateUncheckedUpdateWithoutRoleInput>
  }

  export type CandidateUpdateManyWithWhereWithoutRoleInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutRoleInput>
  }

  export type ElectionCreateManyAdministradorInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
  }

  export type ElectionUpdateWithoutAdministradorInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    candidates?: CandidateUpdateManyWithoutElectionNestedInput
    voters?: VoterUpdateManyWithoutElectionNestedInput
    result?: ResultUpdateOneWithoutElectionNestedInput
    Vote?: VoteUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateWithoutAdministradorInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    candidates?: CandidateUncheckedUpdateManyWithoutElectionNestedInput
    voters?: VoterUncheckedUpdateManyWithoutElectionNestedInput
    result?: ResultUncheckedUpdateOneWithoutElectionNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionUncheckedUpdateManyWithoutAdministradorInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyVoterInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
    candidateId?: number | null
    electionId?: number | null
  }

  export type VoteUpdateWithoutVoterInput = {
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneWithoutVotesNestedInput
    election?: ElectionUpdateOneWithoutVoteNestedInput
  }

  export type VoteUncheckedUpdateWithoutVoterInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateId?: NullableIntFieldUpdateOperationsInput | number | null
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VoteUncheckedUpdateManyWithoutVoterInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    candidateId?: NullableIntFieldUpdateOperationsInput | number | null
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CandidateCreateManyElectionInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    roleId: number
    careerId: number
  }

  export type VoterCreateManyElectionInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    roleId: number
    careerId: number
  }

  export type VoteCreateManyElectionInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
    voterId: number
    candidateId?: number | null
  }

  export type CandidateUpdateWithoutElectionInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutCandidatesNestedInput
    career?: CareerUpdateOneRequiredWithoutCandidatesNestedInput
    proposals?: ProposalUpdateManyWithoutCandidateNestedInput
    result?: ResultUpdateOneWithoutCandidateNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutElectionInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    proposals?: ProposalUncheckedUpdateManyWithoutCandidateNestedInput
    result?: ResultUncheckedUpdateOneWithoutCandidateNestedInput
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateManyWithoutElectionInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type VoterUpdateWithoutElectionInput = {
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutVotersNestedInput
    career?: CareerUpdateOneRequiredWithoutVotersNestedInput
    vote?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutElectionInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    vote?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateManyWithoutElectionInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type VoteUpdateWithoutElectionInput = {
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutVoteNestedInput
    candidate?: CandidateUpdateOneWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutElectionInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    voterId?: IntFieldUpdateOperationsInput | number
    candidateId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VoteUncheckedUpdateManyWithoutElectionInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    voterId?: IntFieldUpdateOperationsInput | number
    candidateId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProposalCreateManyCandidateInput = {
    id_proposal?: number
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
  }

  export type VoteCreateManyCandidateInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
    voterId: number
    electionId?: number | null
  }

  export type ProposalUpdateWithoutCandidateInput = {
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalUncheckedUpdateWithoutCandidateInput = {
    id_proposal?: IntFieldUpdateOperationsInput | number
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalUncheckedUpdateManyWithoutCandidateInput = {
    id_proposal?: IntFieldUpdateOperationsInput | number
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUpdateWithoutCandidateInput = {
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutVoteNestedInput
    election?: ElectionUpdateOneWithoutVoteNestedInput
  }

  export type VoteUncheckedUpdateWithoutCandidateInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    voterId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VoteUncheckedUpdateManyWithoutCandidateInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    voterId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VoterCreateManyCareerInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    roleId: number
    electionId?: number | null
  }

  export type CandidateCreateManyCareerInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    roleId: number
    electionId?: number | null
  }

  export type VoterUpdateWithoutCareerInput = {
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutVotersNestedInput
    election?: ElectionUpdateOneWithoutVotersNestedInput
    vote?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutCareerInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    vote?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateManyWithoutCareerInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CandidateUpdateWithoutCareerInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutCandidatesNestedInput
    election?: ElectionUpdateOneWithoutCandidatesNestedInput
    proposals?: ProposalUpdateManyWithoutCandidateNestedInput
    result?: ResultUpdateOneWithoutCandidateNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutCareerInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutCandidateNestedInput
    result?: ResultUncheckedUpdateOneWithoutCandidateNestedInput
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateManyWithoutCareerInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VoterCreateManyRoleInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: bigint | number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    electionId?: number | null
    careerId: number
  }

  export type CandidateCreateManyRoleInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: bigint | number
    correo_candidate: string
    estado_candidate: string
    foto_candidate?: string | null
    contrasena_candidate: string
    careerId: number
    electionId?: number | null
  }

  export type VoterUpdateWithoutRoleInput = {
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    election?: ElectionUpdateOneWithoutVotersNestedInput
    career?: CareerUpdateOneRequiredWithoutVotersNestedInput
    vote?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutRoleInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    careerId?: IntFieldUpdateOperationsInput | number
    vote?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateManyWithoutRoleInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateUpdateWithoutRoleInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    career?: CareerUpdateOneRequiredWithoutCandidatesNestedInput
    election?: ElectionUpdateOneWithoutCandidatesNestedInput
    proposals?: ProposalUpdateManyWithoutCandidateNestedInput
    result?: ResultUpdateOneWithoutCandidateNestedInput
    votes?: VoteUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutRoleInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutCandidateNestedInput
    result?: ResultUncheckedUpdateOneWithoutCandidateNestedInput
    votes?: VoteUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateManyWithoutRoleInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: BigIntFieldUpdateOperationsInput | bigint | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena_candidate?: StringFieldUpdateOperationsInput | string
    careerId?: IntFieldUpdateOperationsInput | number
    electionId?: NullableIntFieldUpdateOperationsInput | number | null
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