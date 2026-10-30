
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ProfilSekolah
 * 
 */
export type ProfilSekolah = $Result.DefaultSelection<Prisma.$ProfilSekolahPayload>
/**
 * Model StrukturOrganisasi
 * 
 */
export type StrukturOrganisasi = $Result.DefaultSelection<Prisma.$StrukturOrganisasiPayload>
/**
 * Model Fasilitas
 * 
 */
export type Fasilitas = $Result.DefaultSelection<Prisma.$FasilitasPayload>
/**
 * Model KategoriBerita
 * 
 */
export type KategoriBerita = $Result.DefaultSelection<Prisma.$KategoriBeritaPayload>
/**
 * Model Berita
 * 
 */
export type Berita = $Result.DefaultSelection<Prisma.$BeritaPayload>
/**
 * Model Pengumuman
 * 
 */
export type Pengumuman = $Result.DefaultSelection<Prisma.$PengumumanPayload>
/**
 * Model Galeri
 * 
 */
export type Galeri = $Result.DefaultSelection<Prisma.$GaleriPayload>
/**
 * Model PesanKontak
 * 
 */
export type PesanKontak = $Result.DefaultSelection<Prisma.$PesanKontakPayload>
/**
 * Model Agenda
 * 
 */
export type Agenda = $Result.DefaultSelection<Prisma.$AgendaPayload>
/**
 * Model Prestasi
 * 
 */
export type Prestasi = $Result.DefaultSelection<Prisma.$PrestasiPayload>
/**
 * Model Unduhan
 * 
 */
export type Unduhan = $Result.DefaultSelection<Prisma.$UnduhanPayload>
/**
 * Model Faq
 * 
 */
export type Faq = $Result.DefaultSelection<Prisma.$FaqPayload>
/**
 * Model PendaftaranPPDB
 * 
 */
export type PendaftaranPPDB = $Result.DefaultSelection<Prisma.$PendaftaranPPDBPayload>
/**
 * Model BiodataSiswaPPDB
 * 
 */
export type BiodataSiswaPPDB = $Result.DefaultSelection<Prisma.$BiodataSiswaPPDBPayload>
/**
 * Model DataOrangTuaPPDB
 * 
 */
export type DataOrangTuaPPDB = $Result.DefaultSelection<Prisma.$DataOrangTuaPPDBPayload>
/**
 * Model DokumenPPDB
 * 
 */
export type DokumenPPDB = $Result.DefaultSelection<Prisma.$DokumenPPDBPayload>
/**
 * Model PengaturanPPDB
 * 
 */
export type PengaturanPPDB = $Result.DefaultSelection<Prisma.$PengaturanPPDBPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  GURU: 'GURU',
  SISWA: 'SISWA',
  ORANG_TUA: 'ORANG_TUA',
  CALON_PENDAFTAR: 'CALON_PENDAFTAR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusPPDB: {
  BELUM_ISI: 'BELUM_ISI',
  DITINJAU: 'DITINJAU',
  LULUS_ADMINISTRASI: 'LULUS_ADMINISTRASI',
  TIDAK_LULUS: 'TIDAK_LULUS',
  LULUS_FINAL: 'LULUS_FINAL'
};

export type StatusPPDB = (typeof StatusPPDB)[keyof typeof StatusPPDB]


export const JenisDokumen: {
  PAS_FOTO: 'PAS_FOTO',
  KARTU_KELUARGA: 'KARTU_KELUARGA',
  AKTA_KELAHIRAN: 'AKTA_KELAHIRAN',
  IJAZAH: 'IJAZAH',
  SKHU: 'SKHU'
};

export type JenisDokumen = (typeof JenisDokumen)[keyof typeof JenisDokumen]


export const JenisKelamin: {
  LAKI_LAKI: 'LAKI_LAKI',
  PEREMPUAN: 'PEREMPUAN'
};

export type JenisKelamin = (typeof JenisKelamin)[keyof typeof JenisKelamin]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusPPDB = $Enums.StatusPPDB

export const StatusPPDB: typeof $Enums.StatusPPDB

export type JenisDokumen = $Enums.JenisDokumen

export const JenisDokumen: typeof $Enums.JenisDokumen

export type JenisKelamin = $Enums.JenisKelamin

export const JenisKelamin: typeof $Enums.JenisKelamin

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profilSekolah`: Exposes CRUD operations for the **ProfilSekolah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfilSekolahs
    * const profilSekolahs = await prisma.profilSekolah.findMany()
    * ```
    */
  get profilSekolah(): Prisma.ProfilSekolahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.strukturOrganisasi`: Exposes CRUD operations for the **StrukturOrganisasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StrukturOrganisasis
    * const strukturOrganisasis = await prisma.strukturOrganisasi.findMany()
    * ```
    */
  get strukturOrganisasi(): Prisma.StrukturOrganisasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fasilitas`: Exposes CRUD operations for the **Fasilitas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fasilitas
    * const fasilitas = await prisma.fasilitas.findMany()
    * ```
    */
  get fasilitas(): Prisma.FasilitasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategoriBerita`: Exposes CRUD operations for the **KategoriBerita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KategoriBeritas
    * const kategoriBeritas = await prisma.kategoriBerita.findMany()
    * ```
    */
  get kategoriBerita(): Prisma.KategoriBeritaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.berita`: Exposes CRUD operations for the **Berita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beritas
    * const beritas = await prisma.berita.findMany()
    * ```
    */
  get berita(): Prisma.BeritaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengumuman`: Exposes CRUD operations for the **Pengumuman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pengumumen
    * const pengumumen = await prisma.pengumuman.findMany()
    * ```
    */
  get pengumuman(): Prisma.PengumumanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galeri`: Exposes CRUD operations for the **Galeri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galeris
    * const galeris = await prisma.galeri.findMany()
    * ```
    */
  get galeri(): Prisma.GaleriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pesanKontak`: Exposes CRUD operations for the **PesanKontak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PesanKontaks
    * const pesanKontaks = await prisma.pesanKontak.findMany()
    * ```
    */
  get pesanKontak(): Prisma.PesanKontakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agenda`: Exposes CRUD operations for the **Agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.AgendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestasi`: Exposes CRUD operations for the **Prestasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestasis
    * const prestasis = await prisma.prestasi.findMany()
    * ```
    */
  get prestasi(): Prisma.PrestasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unduhan`: Exposes CRUD operations for the **Unduhan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unduhans
    * const unduhans = await prisma.unduhan.findMany()
    * ```
    */
  get unduhan(): Prisma.UnduhanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faq`: Exposes CRUD operations for the **Faq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faqs
    * const faqs = await prisma.faq.findMany()
    * ```
    */
  get faq(): Prisma.FaqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendaftaranPPDB`: Exposes CRUD operations for the **PendaftaranPPDB** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendaftaranPPDBS
    * const pendaftaranPPDBS = await prisma.pendaftaranPPDB.findMany()
    * ```
    */
  get pendaftaranPPDB(): Prisma.PendaftaranPPDBDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.biodataSiswaPPDB`: Exposes CRUD operations for the **BiodataSiswaPPDB** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BiodataSiswaPPDBS
    * const biodataSiswaPPDBS = await prisma.biodataSiswaPPDB.findMany()
    * ```
    */
  get biodataSiswaPPDB(): Prisma.BiodataSiswaPPDBDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataOrangTuaPPDB`: Exposes CRUD operations for the **DataOrangTuaPPDB** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataOrangTuaPPDBS
    * const dataOrangTuaPPDBS = await prisma.dataOrangTuaPPDB.findMany()
    * ```
    */
  get dataOrangTuaPPDB(): Prisma.DataOrangTuaPPDBDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dokumenPPDB`: Exposes CRUD operations for the **DokumenPPDB** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DokumenPPDBS
    * const dokumenPPDBS = await prisma.dokumenPPDB.findMany()
    * ```
    */
  get dokumenPPDB(): Prisma.DokumenPPDBDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengaturanPPDB`: Exposes CRUD operations for the **PengaturanPPDB** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PengaturanPPDBS
    * const pengaturanPPDBS = await prisma.pengaturanPPDB.findMany()
    * ```
    */
  get pengaturanPPDB(): Prisma.PengaturanPPDBDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    User: 'User',
    ProfilSekolah: 'ProfilSekolah',
    StrukturOrganisasi: 'StrukturOrganisasi',
    Fasilitas: 'Fasilitas',
    KategoriBerita: 'KategoriBerita',
    Berita: 'Berita',
    Pengumuman: 'Pengumuman',
    Galeri: 'Galeri',
    PesanKontak: 'PesanKontak',
    Agenda: 'Agenda',
    Prestasi: 'Prestasi',
    Unduhan: 'Unduhan',
    Faq: 'Faq',
    PendaftaranPPDB: 'PendaftaranPPDB',
    BiodataSiswaPPDB: 'BiodataSiswaPPDB',
    DataOrangTuaPPDB: 'DataOrangTuaPPDB',
    DokumenPPDB: 'DokumenPPDB',
    PengaturanPPDB: 'PengaturanPPDB'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profilSekolah" | "strukturOrganisasi" | "fasilitas" | "kategoriBerita" | "berita" | "pengumuman" | "galeri" | "pesanKontak" | "agenda" | "prestasi" | "unduhan" | "faq" | "pendaftaranPPDB" | "biodataSiswaPPDB" | "dataOrangTuaPPDB" | "dokumenPPDB" | "pengaturanPPDB"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ProfilSekolah: {
        payload: Prisma.$ProfilSekolahPayload<ExtArgs>
        fields: Prisma.ProfilSekolahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilSekolahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilSekolahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilSekolahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilSekolahPayload>
          }
          findFirst: {
            args: Prisma.ProfilSekolahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilSekolahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilSekolahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilSekolahPayload>
          }
          findMany: {
            args: Prisma.ProfilSekolahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilSekolahPayload>[]
          }
          create: {
            args: Prisma.ProfilSekolahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilSekolahPayload>
          }
          createMany: {
            args: Prisma.ProfilSekolahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfilSekolahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilSekolahPayload>
          }
          update: {
            args: Prisma.ProfilSekolahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilSekolahPayload>
          }
          deleteMany: {
            args: Prisma.ProfilSekolahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilSekolahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfilSekolahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilSekolahPayload>
          }
          aggregate: {
            args: Prisma.ProfilSekolahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfilSekolah>
          }
          groupBy: {
            args: Prisma.ProfilSekolahGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilSekolahGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilSekolahCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilSekolahCountAggregateOutputType> | number
          }
        }
      }
      StrukturOrganisasi: {
        payload: Prisma.$StrukturOrganisasiPayload<ExtArgs>
        fields: Prisma.StrukturOrganisasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StrukturOrganisasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrukturOrganisasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StrukturOrganisasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrukturOrganisasiPayload>
          }
          findFirst: {
            args: Prisma.StrukturOrganisasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrukturOrganisasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StrukturOrganisasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrukturOrganisasiPayload>
          }
          findMany: {
            args: Prisma.StrukturOrganisasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrukturOrganisasiPayload>[]
          }
          create: {
            args: Prisma.StrukturOrganisasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrukturOrganisasiPayload>
          }
          createMany: {
            args: Prisma.StrukturOrganisasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StrukturOrganisasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrukturOrganisasiPayload>
          }
          update: {
            args: Prisma.StrukturOrganisasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrukturOrganisasiPayload>
          }
          deleteMany: {
            args: Prisma.StrukturOrganisasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StrukturOrganisasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StrukturOrganisasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrukturOrganisasiPayload>
          }
          aggregate: {
            args: Prisma.StrukturOrganisasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStrukturOrganisasi>
          }
          groupBy: {
            args: Prisma.StrukturOrganisasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<StrukturOrganisasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.StrukturOrganisasiCountArgs<ExtArgs>
            result: $Utils.Optional<StrukturOrganisasiCountAggregateOutputType> | number
          }
        }
      }
      Fasilitas: {
        payload: Prisma.$FasilitasPayload<ExtArgs>
        fields: Prisma.FasilitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FasilitasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FasilitasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          findFirst: {
            args: Prisma.FasilitasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FasilitasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          findMany: {
            args: Prisma.FasilitasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>[]
          }
          create: {
            args: Prisma.FasilitasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          createMany: {
            args: Prisma.FasilitasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FasilitasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          update: {
            args: Prisma.FasilitasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          deleteMany: {
            args: Prisma.FasilitasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FasilitasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FasilitasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasilitasPayload>
          }
          aggregate: {
            args: Prisma.FasilitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFasilitas>
          }
          groupBy: {
            args: Prisma.FasilitasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FasilitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.FasilitasCountArgs<ExtArgs>
            result: $Utils.Optional<FasilitasCountAggregateOutputType> | number
          }
        }
      }
      KategoriBerita: {
        payload: Prisma.$KategoriBeritaPayload<ExtArgs>
        fields: Prisma.KategoriBeritaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriBeritaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriBeritaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriBeritaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriBeritaPayload>
          }
          findFirst: {
            args: Prisma.KategoriBeritaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriBeritaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriBeritaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriBeritaPayload>
          }
          findMany: {
            args: Prisma.KategoriBeritaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriBeritaPayload>[]
          }
          create: {
            args: Prisma.KategoriBeritaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriBeritaPayload>
          }
          createMany: {
            args: Prisma.KategoriBeritaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KategoriBeritaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriBeritaPayload>
          }
          update: {
            args: Prisma.KategoriBeritaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriBeritaPayload>
          }
          deleteMany: {
            args: Prisma.KategoriBeritaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriBeritaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KategoriBeritaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriBeritaPayload>
          }
          aggregate: {
            args: Prisma.KategoriBeritaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategoriBerita>
          }
          groupBy: {
            args: Prisma.KategoriBeritaGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriBeritaGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriBeritaCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriBeritaCountAggregateOutputType> | number
          }
        }
      }
      Berita: {
        payload: Prisma.$BeritaPayload<ExtArgs>
        fields: Prisma.BeritaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeritaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeritaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          findFirst: {
            args: Prisma.BeritaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeritaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          findMany: {
            args: Prisma.BeritaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>[]
          }
          create: {
            args: Prisma.BeritaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          createMany: {
            args: Prisma.BeritaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BeritaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          update: {
            args: Prisma.BeritaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          deleteMany: {
            args: Prisma.BeritaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeritaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BeritaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeritaPayload>
          }
          aggregate: {
            args: Prisma.BeritaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBerita>
          }
          groupBy: {
            args: Prisma.BeritaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeritaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeritaCountArgs<ExtArgs>
            result: $Utils.Optional<BeritaCountAggregateOutputType> | number
          }
        }
      }
      Pengumuman: {
        payload: Prisma.$PengumumanPayload<ExtArgs>
        fields: Prisma.PengumumanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PengumumanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumumanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PengumumanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumumanPayload>
          }
          findFirst: {
            args: Prisma.PengumumanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumumanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PengumumanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumumanPayload>
          }
          findMany: {
            args: Prisma.PengumumanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumumanPayload>[]
          }
          create: {
            args: Prisma.PengumumanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumumanPayload>
          }
          createMany: {
            args: Prisma.PengumumanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PengumumanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumumanPayload>
          }
          update: {
            args: Prisma.PengumumanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumumanPayload>
          }
          deleteMany: {
            args: Prisma.PengumumanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PengumumanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PengumumanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengumumanPayload>
          }
          aggregate: {
            args: Prisma.PengumumanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengumuman>
          }
          groupBy: {
            args: Prisma.PengumumanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PengumumanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PengumumanCountArgs<ExtArgs>
            result: $Utils.Optional<PengumumanCountAggregateOutputType> | number
          }
        }
      }
      Galeri: {
        payload: Prisma.$GaleriPayload<ExtArgs>
        fields: Prisma.GaleriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GaleriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GaleriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          findFirst: {
            args: Prisma.GaleriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GaleriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          findMany: {
            args: Prisma.GaleriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>[]
          }
          create: {
            args: Prisma.GaleriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          createMany: {
            args: Prisma.GaleriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GaleriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          update: {
            args: Prisma.GaleriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          deleteMany: {
            args: Prisma.GaleriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GaleriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GaleriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriPayload>
          }
          aggregate: {
            args: Prisma.GaleriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGaleri>
          }
          groupBy: {
            args: Prisma.GaleriGroupByArgs<ExtArgs>
            result: $Utils.Optional<GaleriGroupByOutputType>[]
          }
          count: {
            args: Prisma.GaleriCountArgs<ExtArgs>
            result: $Utils.Optional<GaleriCountAggregateOutputType> | number
          }
        }
      }
      PesanKontak: {
        payload: Prisma.$PesanKontakPayload<ExtArgs>
        fields: Prisma.PesanKontakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PesanKontakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesanKontakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesanKontakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesanKontakPayload>
          }
          findFirst: {
            args: Prisma.PesanKontakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesanKontakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesanKontakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesanKontakPayload>
          }
          findMany: {
            args: Prisma.PesanKontakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesanKontakPayload>[]
          }
          create: {
            args: Prisma.PesanKontakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesanKontakPayload>
          }
          createMany: {
            args: Prisma.PesanKontakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PesanKontakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesanKontakPayload>
          }
          update: {
            args: Prisma.PesanKontakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesanKontakPayload>
          }
          deleteMany: {
            args: Prisma.PesanKontakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PesanKontakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PesanKontakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesanKontakPayload>
          }
          aggregate: {
            args: Prisma.PesanKontakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePesanKontak>
          }
          groupBy: {
            args: Prisma.PesanKontakGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesanKontakGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesanKontakCountArgs<ExtArgs>
            result: $Utils.Optional<PesanKontakCountAggregateOutputType> | number
          }
        }
      }
      Agenda: {
        payload: Prisma.$AgendaPayload<ExtArgs>
        fields: Prisma.AgendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findFirst: {
            args: Prisma.AgendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findMany: {
            args: Prisma.AgendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          create: {
            args: Prisma.AgendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          createMany: {
            args: Prisma.AgendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AgendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          update: {
            args: Prisma.AgendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          deleteMany: {
            args: Prisma.AgendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          aggregate: {
            args: Prisma.AgendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda>
          }
          groupBy: {
            args: Prisma.AgendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendaCountArgs<ExtArgs>
            result: $Utils.Optional<AgendaCountAggregateOutputType> | number
          }
        }
      }
      Prestasi: {
        payload: Prisma.$PrestasiPayload<ExtArgs>
        fields: Prisma.PrestasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrestasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrestasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestasiPayload>
          }
          findFirst: {
            args: Prisma.PrestasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrestasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestasiPayload>
          }
          findMany: {
            args: Prisma.PrestasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestasiPayload>[]
          }
          create: {
            args: Prisma.PrestasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestasiPayload>
          }
          createMany: {
            args: Prisma.PrestasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrestasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestasiPayload>
          }
          update: {
            args: Prisma.PrestasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestasiPayload>
          }
          deleteMany: {
            args: Prisma.PrestasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrestasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrestasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestasiPayload>
          }
          aggregate: {
            args: Prisma.PrestasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestasi>
          }
          groupBy: {
            args: Prisma.PrestasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrestasiCountArgs<ExtArgs>
            result: $Utils.Optional<PrestasiCountAggregateOutputType> | number
          }
        }
      }
      Unduhan: {
        payload: Prisma.$UnduhanPayload<ExtArgs>
        fields: Prisma.UnduhanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnduhanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnduhanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnduhanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnduhanPayload>
          }
          findFirst: {
            args: Prisma.UnduhanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnduhanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnduhanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnduhanPayload>
          }
          findMany: {
            args: Prisma.UnduhanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnduhanPayload>[]
          }
          create: {
            args: Prisma.UnduhanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnduhanPayload>
          }
          createMany: {
            args: Prisma.UnduhanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnduhanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnduhanPayload>
          }
          update: {
            args: Prisma.UnduhanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnduhanPayload>
          }
          deleteMany: {
            args: Prisma.UnduhanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnduhanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnduhanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnduhanPayload>
          }
          aggregate: {
            args: Prisma.UnduhanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnduhan>
          }
          groupBy: {
            args: Prisma.UnduhanGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnduhanGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnduhanCountArgs<ExtArgs>
            result: $Utils.Optional<UnduhanCountAggregateOutputType> | number
          }
        }
      }
      Faq: {
        payload: Prisma.$FaqPayload<ExtArgs>
        fields: Prisma.FaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findFirst: {
            args: Prisma.FaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findMany: {
            args: Prisma.FaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          create: {
            args: Prisma.FaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          createMany: {
            args: Prisma.FaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          update: {
            args: Prisma.FaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          deleteMany: {
            args: Prisma.FaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          aggregate: {
            args: Prisma.FaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaq>
          }
          groupBy: {
            args: Prisma.FaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaqCountArgs<ExtArgs>
            result: $Utils.Optional<FaqCountAggregateOutputType> | number
          }
        }
      }
      PendaftaranPPDB: {
        payload: Prisma.$PendaftaranPPDBPayload<ExtArgs>
        fields: Prisma.PendaftaranPPDBFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendaftaranPPDBFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPPDBPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendaftaranPPDBFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPPDBPayload>
          }
          findFirst: {
            args: Prisma.PendaftaranPPDBFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPPDBPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendaftaranPPDBFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPPDBPayload>
          }
          findMany: {
            args: Prisma.PendaftaranPPDBFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPPDBPayload>[]
          }
          create: {
            args: Prisma.PendaftaranPPDBCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPPDBPayload>
          }
          createMany: {
            args: Prisma.PendaftaranPPDBCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PendaftaranPPDBDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPPDBPayload>
          }
          update: {
            args: Prisma.PendaftaranPPDBUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPPDBPayload>
          }
          deleteMany: {
            args: Prisma.PendaftaranPPDBDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendaftaranPPDBUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PendaftaranPPDBUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPPDBPayload>
          }
          aggregate: {
            args: Prisma.PendaftaranPPDBAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendaftaranPPDB>
          }
          groupBy: {
            args: Prisma.PendaftaranPPDBGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendaftaranPPDBGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendaftaranPPDBCountArgs<ExtArgs>
            result: $Utils.Optional<PendaftaranPPDBCountAggregateOutputType> | number
          }
        }
      }
      BiodataSiswaPPDB: {
        payload: Prisma.$BiodataSiswaPPDBPayload<ExtArgs>
        fields: Prisma.BiodataSiswaPPDBFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BiodataSiswaPPDBFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataSiswaPPDBPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BiodataSiswaPPDBFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataSiswaPPDBPayload>
          }
          findFirst: {
            args: Prisma.BiodataSiswaPPDBFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataSiswaPPDBPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BiodataSiswaPPDBFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataSiswaPPDBPayload>
          }
          findMany: {
            args: Prisma.BiodataSiswaPPDBFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataSiswaPPDBPayload>[]
          }
          create: {
            args: Prisma.BiodataSiswaPPDBCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataSiswaPPDBPayload>
          }
          createMany: {
            args: Prisma.BiodataSiswaPPDBCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BiodataSiswaPPDBDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataSiswaPPDBPayload>
          }
          update: {
            args: Prisma.BiodataSiswaPPDBUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataSiswaPPDBPayload>
          }
          deleteMany: {
            args: Prisma.BiodataSiswaPPDBDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BiodataSiswaPPDBUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BiodataSiswaPPDBUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataSiswaPPDBPayload>
          }
          aggregate: {
            args: Prisma.BiodataSiswaPPDBAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiodataSiswaPPDB>
          }
          groupBy: {
            args: Prisma.BiodataSiswaPPDBGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiodataSiswaPPDBGroupByOutputType>[]
          }
          count: {
            args: Prisma.BiodataSiswaPPDBCountArgs<ExtArgs>
            result: $Utils.Optional<BiodataSiswaPPDBCountAggregateOutputType> | number
          }
        }
      }
      DataOrangTuaPPDB: {
        payload: Prisma.$DataOrangTuaPPDBPayload<ExtArgs>
        fields: Prisma.DataOrangTuaPPDBFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataOrangTuaPPDBFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataOrangTuaPPDBPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataOrangTuaPPDBFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataOrangTuaPPDBPayload>
          }
          findFirst: {
            args: Prisma.DataOrangTuaPPDBFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataOrangTuaPPDBPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataOrangTuaPPDBFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataOrangTuaPPDBPayload>
          }
          findMany: {
            args: Prisma.DataOrangTuaPPDBFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataOrangTuaPPDBPayload>[]
          }
          create: {
            args: Prisma.DataOrangTuaPPDBCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataOrangTuaPPDBPayload>
          }
          createMany: {
            args: Prisma.DataOrangTuaPPDBCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataOrangTuaPPDBDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataOrangTuaPPDBPayload>
          }
          update: {
            args: Prisma.DataOrangTuaPPDBUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataOrangTuaPPDBPayload>
          }
          deleteMany: {
            args: Prisma.DataOrangTuaPPDBDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataOrangTuaPPDBUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataOrangTuaPPDBUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataOrangTuaPPDBPayload>
          }
          aggregate: {
            args: Prisma.DataOrangTuaPPDBAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataOrangTuaPPDB>
          }
          groupBy: {
            args: Prisma.DataOrangTuaPPDBGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataOrangTuaPPDBGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataOrangTuaPPDBCountArgs<ExtArgs>
            result: $Utils.Optional<DataOrangTuaPPDBCountAggregateOutputType> | number
          }
        }
      }
      DokumenPPDB: {
        payload: Prisma.$DokumenPPDBPayload<ExtArgs>
        fields: Prisma.DokumenPPDBFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DokumenPPDBFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPPDBPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DokumenPPDBFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPPDBPayload>
          }
          findFirst: {
            args: Prisma.DokumenPPDBFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPPDBPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DokumenPPDBFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPPDBPayload>
          }
          findMany: {
            args: Prisma.DokumenPPDBFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPPDBPayload>[]
          }
          create: {
            args: Prisma.DokumenPPDBCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPPDBPayload>
          }
          createMany: {
            args: Prisma.DokumenPPDBCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DokumenPPDBDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPPDBPayload>
          }
          update: {
            args: Prisma.DokumenPPDBUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPPDBPayload>
          }
          deleteMany: {
            args: Prisma.DokumenPPDBDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DokumenPPDBUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DokumenPPDBUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPPDBPayload>
          }
          aggregate: {
            args: Prisma.DokumenPPDBAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDokumenPPDB>
          }
          groupBy: {
            args: Prisma.DokumenPPDBGroupByArgs<ExtArgs>
            result: $Utils.Optional<DokumenPPDBGroupByOutputType>[]
          }
          count: {
            args: Prisma.DokumenPPDBCountArgs<ExtArgs>
            result: $Utils.Optional<DokumenPPDBCountAggregateOutputType> | number
          }
        }
      }
      PengaturanPPDB: {
        payload: Prisma.$PengaturanPPDBPayload<ExtArgs>
        fields: Prisma.PengaturanPPDBFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PengaturanPPDBFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengaturanPPDBPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PengaturanPPDBFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengaturanPPDBPayload>
          }
          findFirst: {
            args: Prisma.PengaturanPPDBFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengaturanPPDBPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PengaturanPPDBFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengaturanPPDBPayload>
          }
          findMany: {
            args: Prisma.PengaturanPPDBFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengaturanPPDBPayload>[]
          }
          create: {
            args: Prisma.PengaturanPPDBCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengaturanPPDBPayload>
          }
          createMany: {
            args: Prisma.PengaturanPPDBCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PengaturanPPDBDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengaturanPPDBPayload>
          }
          update: {
            args: Prisma.PengaturanPPDBUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengaturanPPDBPayload>
          }
          deleteMany: {
            args: Prisma.PengaturanPPDBDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PengaturanPPDBUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PengaturanPPDBUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengaturanPPDBPayload>
          }
          aggregate: {
            args: Prisma.PengaturanPPDBAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengaturanPPDB>
          }
          groupBy: {
            args: Prisma.PengaturanPPDBGroupByArgs<ExtArgs>
            result: $Utils.Optional<PengaturanPPDBGroupByOutputType>[]
          }
          count: {
            args: Prisma.PengaturanPPDBCountArgs<ExtArgs>
            result: $Utils.Optional<PengaturanPPDBCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profilSekolah?: ProfilSekolahOmit
    strukturOrganisasi?: StrukturOrganisasiOmit
    fasilitas?: FasilitasOmit
    kategoriBerita?: KategoriBeritaOmit
    berita?: BeritaOmit
    pengumuman?: PengumumanOmit
    galeri?: GaleriOmit
    pesanKontak?: PesanKontakOmit
    agenda?: AgendaOmit
    prestasi?: PrestasiOmit
    unduhan?: UnduhanOmit
    faq?: FaqOmit
    pendaftaranPPDB?: PendaftaranPPDBOmit
    biodataSiswaPPDB?: BiodataSiswaPPDBOmit
    dataOrangTuaPPDB?: DataOrangTuaPPDBOmit
    dokumenPPDB?: DokumenPPDBOmit
    pengaturanPPDB?: PengaturanPPDBOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    berita: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    berita?: boolean | UserCountOutputTypeCountBeritaArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBeritaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeritaWhereInput
  }


  /**
   * Count Type KategoriBeritaCountOutputType
   */

  export type KategoriBeritaCountOutputType = {
    berita: number
  }

  export type KategoriBeritaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    berita?: boolean | KategoriBeritaCountOutputTypeCountBeritaArgs
  }

  // Custom InputTypes
  /**
   * KategoriBeritaCountOutputType without action
   */
  export type KategoriBeritaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBeritaCountOutputType
     */
    select?: KategoriBeritaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriBeritaCountOutputType without action
   */
  export type KategoriBeritaCountOutputTypeCountBeritaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeritaWhereInput
  }


  /**
   * Count Type PendaftaranPPDBCountOutputType
   */

  export type PendaftaranPPDBCountOutputType = {
    dokumen: number
  }

  export type PendaftaranPPDBCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dokumen?: boolean | PendaftaranPPDBCountOutputTypeCountDokumenArgs
  }

  // Custom InputTypes
  /**
   * PendaftaranPPDBCountOutputType without action
   */
  export type PendaftaranPPDBCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDBCountOutputType
     */
    select?: PendaftaranPPDBCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PendaftaranPPDBCountOutputType without action
   */
  export type PendaftaranPPDBCountOutputTypeCountDokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumenPPDBWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    foto: string | null
    isVerified: boolean | null
    emailToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    foto: string | null
    isVerified: boolean | null
    emailToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    foto: number
    isVerified: number
    emailToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    foto?: true
    isVerified?: true
    emailToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    foto?: true
    isVerified?: true
    emailToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    foto?: true
    isVerified?: true
    emailToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    foto: string | null
    isVerified: boolean
    emailToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    foto?: boolean
    isVerified?: boolean
    emailToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pendaftaran?: boolean | User$pendaftaranArgs<ExtArgs>
    berita?: boolean | User$beritaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    foto?: boolean
    isVerified?: boolean
    emailToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "foto" | "isVerified" | "emailToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | User$pendaftaranArgs<ExtArgs>
    berita?: boolean | User$beritaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pendaftaran: Prisma.$PendaftaranPPDBPayload<ExtArgs> | null
      berita: Prisma.$BeritaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      foto: string | null
      isVerified: boolean
      emailToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pendaftaran<T extends User$pendaftaranArgs<ExtArgs> = {}>(args?: Subset<T, User$pendaftaranArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    berita<T extends User$beritaArgs<ExtArgs> = {}>(args?: Subset<T, User$beritaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly foto: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly emailToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pendaftaran
   */
  export type User$pendaftaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    where?: PendaftaranPPDBWhereInput
  }

  /**
   * User.berita
   */
  export type User$beritaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    where?: BeritaWhereInput
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    cursor?: BeritaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ProfilSekolah
   */

  export type AggregateProfilSekolah = {
    _count: ProfilSekolahCountAggregateOutputType | null
    _min: ProfilSekolahMinAggregateOutputType | null
    _max: ProfilSekolahMaxAggregateOutputType | null
  }

  export type ProfilSekolahMinAggregateOutputType = {
    id: string | null
    namaSekolah: string | null
    npsn: string | null
    akreditasi: string | null
    tagline: string | null
    deskripsi: string | null
    sejarah: string | null
    logo: string | null
    banner: string | null
    alamat: string | null
    email: string | null
    telepon: string | null
    whatsapp: string | null
    mapsUrl: string | null
    visi: string | null
    rdmUrl: string | null
    rdmKeterangan: string | null
    rdmAktif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilSekolahMaxAggregateOutputType = {
    id: string | null
    namaSekolah: string | null
    npsn: string | null
    akreditasi: string | null
    tagline: string | null
    deskripsi: string | null
    sejarah: string | null
    logo: string | null
    banner: string | null
    alamat: string | null
    email: string | null
    telepon: string | null
    whatsapp: string | null
    mapsUrl: string | null
    visi: string | null
    rdmUrl: string | null
    rdmKeterangan: string | null
    rdmAktif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfilSekolahCountAggregateOutputType = {
    id: number
    namaSekolah: number
    npsn: number
    akreditasi: number
    tagline: number
    deskripsi: number
    sejarah: number
    logo: number
    banner: number
    alamat: number
    email: number
    telepon: number
    whatsapp: number
    mapsUrl: number
    visi: number
    misi: number
    rdmUrl: number
    rdmKeterangan: number
    rdmAktif: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfilSekolahMinAggregateInputType = {
    id?: true
    namaSekolah?: true
    npsn?: true
    akreditasi?: true
    tagline?: true
    deskripsi?: true
    sejarah?: true
    logo?: true
    banner?: true
    alamat?: true
    email?: true
    telepon?: true
    whatsapp?: true
    mapsUrl?: true
    visi?: true
    rdmUrl?: true
    rdmKeterangan?: true
    rdmAktif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilSekolahMaxAggregateInputType = {
    id?: true
    namaSekolah?: true
    npsn?: true
    akreditasi?: true
    tagline?: true
    deskripsi?: true
    sejarah?: true
    logo?: true
    banner?: true
    alamat?: true
    email?: true
    telepon?: true
    whatsapp?: true
    mapsUrl?: true
    visi?: true
    rdmUrl?: true
    rdmKeterangan?: true
    rdmAktif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfilSekolahCountAggregateInputType = {
    id?: true
    namaSekolah?: true
    npsn?: true
    akreditasi?: true
    tagline?: true
    deskripsi?: true
    sejarah?: true
    logo?: true
    banner?: true
    alamat?: true
    email?: true
    telepon?: true
    whatsapp?: true
    mapsUrl?: true
    visi?: true
    misi?: true
    rdmUrl?: true
    rdmKeterangan?: true
    rdmAktif?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfilSekolahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfilSekolah to aggregate.
     */
    where?: ProfilSekolahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilSekolahs to fetch.
     */
    orderBy?: ProfilSekolahOrderByWithRelationInput | ProfilSekolahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilSekolahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilSekolahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilSekolahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfilSekolahs
    **/
    _count?: true | ProfilSekolahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilSekolahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilSekolahMaxAggregateInputType
  }

  export type GetProfilSekolahAggregateType<T extends ProfilSekolahAggregateArgs> = {
        [P in keyof T & keyof AggregateProfilSekolah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfilSekolah[P]>
      : GetScalarType<T[P], AggregateProfilSekolah[P]>
  }




  export type ProfilSekolahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilSekolahWhereInput
    orderBy?: ProfilSekolahOrderByWithAggregationInput | ProfilSekolahOrderByWithAggregationInput[]
    by: ProfilSekolahScalarFieldEnum[] | ProfilSekolahScalarFieldEnum
    having?: ProfilSekolahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilSekolahCountAggregateInputType | true
    _min?: ProfilSekolahMinAggregateInputType
    _max?: ProfilSekolahMaxAggregateInputType
  }

  export type ProfilSekolahGroupByOutputType = {
    id: string
    namaSekolah: string
    npsn: string
    akreditasi: string
    tagline: string | null
    deskripsi: string | null
    sejarah: string | null
    logo: string | null
    banner: string | null
    alamat: string | null
    email: string | null
    telepon: string | null
    whatsapp: string | null
    mapsUrl: string | null
    visi: string | null
    misi: JsonValue | null
    rdmUrl: string | null
    rdmKeterangan: string | null
    rdmAktif: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProfilSekolahCountAggregateOutputType | null
    _min: ProfilSekolahMinAggregateOutputType | null
    _max: ProfilSekolahMaxAggregateOutputType | null
  }

  type GetProfilSekolahGroupByPayload<T extends ProfilSekolahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilSekolahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilSekolahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilSekolahGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilSekolahGroupByOutputType[P]>
        }
      >
    >


  export type ProfilSekolahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaSekolah?: boolean
    npsn?: boolean
    akreditasi?: boolean
    tagline?: boolean
    deskripsi?: boolean
    sejarah?: boolean
    logo?: boolean
    banner?: boolean
    alamat?: boolean
    email?: boolean
    telepon?: boolean
    whatsapp?: boolean
    mapsUrl?: boolean
    visi?: boolean
    misi?: boolean
    rdmUrl?: boolean
    rdmKeterangan?: boolean
    rdmAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profilSekolah"]>



  export type ProfilSekolahSelectScalar = {
    id?: boolean
    namaSekolah?: boolean
    npsn?: boolean
    akreditasi?: boolean
    tagline?: boolean
    deskripsi?: boolean
    sejarah?: boolean
    logo?: boolean
    banner?: boolean
    alamat?: boolean
    email?: boolean
    telepon?: boolean
    whatsapp?: boolean
    mapsUrl?: boolean
    visi?: boolean
    misi?: boolean
    rdmUrl?: boolean
    rdmKeterangan?: boolean
    rdmAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfilSekolahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaSekolah" | "npsn" | "akreditasi" | "tagline" | "deskripsi" | "sejarah" | "logo" | "banner" | "alamat" | "email" | "telepon" | "whatsapp" | "mapsUrl" | "visi" | "misi" | "rdmUrl" | "rdmKeterangan" | "rdmAktif" | "createdAt" | "updatedAt", ExtArgs["result"]["profilSekolah"]>

  export type $ProfilSekolahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfilSekolah"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaSekolah: string
      npsn: string
      akreditasi: string
      tagline: string | null
      deskripsi: string | null
      sejarah: string | null
      logo: string | null
      banner: string | null
      alamat: string | null
      email: string | null
      telepon: string | null
      whatsapp: string | null
      mapsUrl: string | null
      visi: string | null
      misi: Prisma.JsonValue | null
      rdmUrl: string | null
      rdmKeterangan: string | null
      rdmAktif: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profilSekolah"]>
    composites: {}
  }

  type ProfilSekolahGetPayload<S extends boolean | null | undefined | ProfilSekolahDefaultArgs> = $Result.GetResult<Prisma.$ProfilSekolahPayload, S>

  type ProfilSekolahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilSekolahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilSekolahCountAggregateInputType | true
    }

  export interface ProfilSekolahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfilSekolah'], meta: { name: 'ProfilSekolah' } }
    /**
     * Find zero or one ProfilSekolah that matches the filter.
     * @param {ProfilSekolahFindUniqueArgs} args - Arguments to find a ProfilSekolah
     * @example
     * // Get one ProfilSekolah
     * const profilSekolah = await prisma.profilSekolah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilSekolahFindUniqueArgs>(args: SelectSubset<T, ProfilSekolahFindUniqueArgs<ExtArgs>>): Prisma__ProfilSekolahClient<$Result.GetResult<Prisma.$ProfilSekolahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfilSekolah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilSekolahFindUniqueOrThrowArgs} args - Arguments to find a ProfilSekolah
     * @example
     * // Get one ProfilSekolah
     * const profilSekolah = await prisma.profilSekolah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilSekolahFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilSekolahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilSekolahClient<$Result.GetResult<Prisma.$ProfilSekolahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfilSekolah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilSekolahFindFirstArgs} args - Arguments to find a ProfilSekolah
     * @example
     * // Get one ProfilSekolah
     * const profilSekolah = await prisma.profilSekolah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilSekolahFindFirstArgs>(args?: SelectSubset<T, ProfilSekolahFindFirstArgs<ExtArgs>>): Prisma__ProfilSekolahClient<$Result.GetResult<Prisma.$ProfilSekolahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfilSekolah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilSekolahFindFirstOrThrowArgs} args - Arguments to find a ProfilSekolah
     * @example
     * // Get one ProfilSekolah
     * const profilSekolah = await prisma.profilSekolah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilSekolahFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilSekolahFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilSekolahClient<$Result.GetResult<Prisma.$ProfilSekolahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfilSekolahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilSekolahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfilSekolahs
     * const profilSekolahs = await prisma.profilSekolah.findMany()
     * 
     * // Get first 10 ProfilSekolahs
     * const profilSekolahs = await prisma.profilSekolah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilSekolahWithIdOnly = await prisma.profilSekolah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilSekolahFindManyArgs>(args?: SelectSubset<T, ProfilSekolahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilSekolahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfilSekolah.
     * @param {ProfilSekolahCreateArgs} args - Arguments to create a ProfilSekolah.
     * @example
     * // Create one ProfilSekolah
     * const ProfilSekolah = await prisma.profilSekolah.create({
     *   data: {
     *     // ... data to create a ProfilSekolah
     *   }
     * })
     * 
     */
    create<T extends ProfilSekolahCreateArgs>(args: SelectSubset<T, ProfilSekolahCreateArgs<ExtArgs>>): Prisma__ProfilSekolahClient<$Result.GetResult<Prisma.$ProfilSekolahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfilSekolahs.
     * @param {ProfilSekolahCreateManyArgs} args - Arguments to create many ProfilSekolahs.
     * @example
     * // Create many ProfilSekolahs
     * const profilSekolah = await prisma.profilSekolah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilSekolahCreateManyArgs>(args?: SelectSubset<T, ProfilSekolahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProfilSekolah.
     * @param {ProfilSekolahDeleteArgs} args - Arguments to delete one ProfilSekolah.
     * @example
     * // Delete one ProfilSekolah
     * const ProfilSekolah = await prisma.profilSekolah.delete({
     *   where: {
     *     // ... filter to delete one ProfilSekolah
     *   }
     * })
     * 
     */
    delete<T extends ProfilSekolahDeleteArgs>(args: SelectSubset<T, ProfilSekolahDeleteArgs<ExtArgs>>): Prisma__ProfilSekolahClient<$Result.GetResult<Prisma.$ProfilSekolahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfilSekolah.
     * @param {ProfilSekolahUpdateArgs} args - Arguments to update one ProfilSekolah.
     * @example
     * // Update one ProfilSekolah
     * const profilSekolah = await prisma.profilSekolah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilSekolahUpdateArgs>(args: SelectSubset<T, ProfilSekolahUpdateArgs<ExtArgs>>): Prisma__ProfilSekolahClient<$Result.GetResult<Prisma.$ProfilSekolahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfilSekolahs.
     * @param {ProfilSekolahDeleteManyArgs} args - Arguments to filter ProfilSekolahs to delete.
     * @example
     * // Delete a few ProfilSekolahs
     * const { count } = await prisma.profilSekolah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilSekolahDeleteManyArgs>(args?: SelectSubset<T, ProfilSekolahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfilSekolahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilSekolahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfilSekolahs
     * const profilSekolah = await prisma.profilSekolah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilSekolahUpdateManyArgs>(args: SelectSubset<T, ProfilSekolahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProfilSekolah.
     * @param {ProfilSekolahUpsertArgs} args - Arguments to update or create a ProfilSekolah.
     * @example
     * // Update or create a ProfilSekolah
     * const profilSekolah = await prisma.profilSekolah.upsert({
     *   create: {
     *     // ... data to create a ProfilSekolah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfilSekolah we want to update
     *   }
     * })
     */
    upsert<T extends ProfilSekolahUpsertArgs>(args: SelectSubset<T, ProfilSekolahUpsertArgs<ExtArgs>>): Prisma__ProfilSekolahClient<$Result.GetResult<Prisma.$ProfilSekolahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfilSekolahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilSekolahCountArgs} args - Arguments to filter ProfilSekolahs to count.
     * @example
     * // Count the number of ProfilSekolahs
     * const count = await prisma.profilSekolah.count({
     *   where: {
     *     // ... the filter for the ProfilSekolahs we want to count
     *   }
     * })
    **/
    count<T extends ProfilSekolahCountArgs>(
      args?: Subset<T, ProfilSekolahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilSekolahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfilSekolah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilSekolahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilSekolahAggregateArgs>(args: Subset<T, ProfilSekolahAggregateArgs>): Prisma.PrismaPromise<GetProfilSekolahAggregateType<T>>

    /**
     * Group by ProfilSekolah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilSekolahGroupByArgs} args - Group by arguments.
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
      T extends ProfilSekolahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilSekolahGroupByArgs['orderBy'] }
        : { orderBy?: ProfilSekolahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfilSekolahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilSekolahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfilSekolah model
   */
  readonly fields: ProfilSekolahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfilSekolah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilSekolahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ProfilSekolah model
   */
  interface ProfilSekolahFieldRefs {
    readonly id: FieldRef<"ProfilSekolah", 'String'>
    readonly namaSekolah: FieldRef<"ProfilSekolah", 'String'>
    readonly npsn: FieldRef<"ProfilSekolah", 'String'>
    readonly akreditasi: FieldRef<"ProfilSekolah", 'String'>
    readonly tagline: FieldRef<"ProfilSekolah", 'String'>
    readonly deskripsi: FieldRef<"ProfilSekolah", 'String'>
    readonly sejarah: FieldRef<"ProfilSekolah", 'String'>
    readonly logo: FieldRef<"ProfilSekolah", 'String'>
    readonly banner: FieldRef<"ProfilSekolah", 'String'>
    readonly alamat: FieldRef<"ProfilSekolah", 'String'>
    readonly email: FieldRef<"ProfilSekolah", 'String'>
    readonly telepon: FieldRef<"ProfilSekolah", 'String'>
    readonly whatsapp: FieldRef<"ProfilSekolah", 'String'>
    readonly mapsUrl: FieldRef<"ProfilSekolah", 'String'>
    readonly visi: FieldRef<"ProfilSekolah", 'String'>
    readonly misi: FieldRef<"ProfilSekolah", 'Json'>
    readonly rdmUrl: FieldRef<"ProfilSekolah", 'String'>
    readonly rdmKeterangan: FieldRef<"ProfilSekolah", 'String'>
    readonly rdmAktif: FieldRef<"ProfilSekolah", 'Boolean'>
    readonly createdAt: FieldRef<"ProfilSekolah", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfilSekolah", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfilSekolah findUnique
   */
  export type ProfilSekolahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
    /**
     * Filter, which ProfilSekolah to fetch.
     */
    where: ProfilSekolahWhereUniqueInput
  }

  /**
   * ProfilSekolah findUniqueOrThrow
   */
  export type ProfilSekolahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
    /**
     * Filter, which ProfilSekolah to fetch.
     */
    where: ProfilSekolahWhereUniqueInput
  }

  /**
   * ProfilSekolah findFirst
   */
  export type ProfilSekolahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
    /**
     * Filter, which ProfilSekolah to fetch.
     */
    where?: ProfilSekolahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilSekolahs to fetch.
     */
    orderBy?: ProfilSekolahOrderByWithRelationInput | ProfilSekolahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfilSekolahs.
     */
    cursor?: ProfilSekolahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilSekolahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilSekolahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfilSekolahs.
     */
    distinct?: ProfilSekolahScalarFieldEnum | ProfilSekolahScalarFieldEnum[]
  }

  /**
   * ProfilSekolah findFirstOrThrow
   */
  export type ProfilSekolahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
    /**
     * Filter, which ProfilSekolah to fetch.
     */
    where?: ProfilSekolahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilSekolahs to fetch.
     */
    orderBy?: ProfilSekolahOrderByWithRelationInput | ProfilSekolahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfilSekolahs.
     */
    cursor?: ProfilSekolahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilSekolahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilSekolahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfilSekolahs.
     */
    distinct?: ProfilSekolahScalarFieldEnum | ProfilSekolahScalarFieldEnum[]
  }

  /**
   * ProfilSekolah findMany
   */
  export type ProfilSekolahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
    /**
     * Filter, which ProfilSekolahs to fetch.
     */
    where?: ProfilSekolahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilSekolahs to fetch.
     */
    orderBy?: ProfilSekolahOrderByWithRelationInput | ProfilSekolahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfilSekolahs.
     */
    cursor?: ProfilSekolahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilSekolahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilSekolahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfilSekolahs.
     */
    distinct?: ProfilSekolahScalarFieldEnum | ProfilSekolahScalarFieldEnum[]
  }

  /**
   * ProfilSekolah create
   */
  export type ProfilSekolahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
    /**
     * The data needed to create a ProfilSekolah.
     */
    data: XOR<ProfilSekolahCreateInput, ProfilSekolahUncheckedCreateInput>
  }

  /**
   * ProfilSekolah createMany
   */
  export type ProfilSekolahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfilSekolahs.
     */
    data: ProfilSekolahCreateManyInput | ProfilSekolahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfilSekolah update
   */
  export type ProfilSekolahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
    /**
     * The data needed to update a ProfilSekolah.
     */
    data: XOR<ProfilSekolahUpdateInput, ProfilSekolahUncheckedUpdateInput>
    /**
     * Choose, which ProfilSekolah to update.
     */
    where: ProfilSekolahWhereUniqueInput
  }

  /**
   * ProfilSekolah updateMany
   */
  export type ProfilSekolahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfilSekolahs.
     */
    data: XOR<ProfilSekolahUpdateManyMutationInput, ProfilSekolahUncheckedUpdateManyInput>
    /**
     * Filter which ProfilSekolahs to update
     */
    where?: ProfilSekolahWhereInput
    /**
     * Limit how many ProfilSekolahs to update.
     */
    limit?: number
  }

  /**
   * ProfilSekolah upsert
   */
  export type ProfilSekolahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
    /**
     * The filter to search for the ProfilSekolah to update in case it exists.
     */
    where: ProfilSekolahWhereUniqueInput
    /**
     * In case the ProfilSekolah found by the `where` argument doesn't exist, create a new ProfilSekolah with this data.
     */
    create: XOR<ProfilSekolahCreateInput, ProfilSekolahUncheckedCreateInput>
    /**
     * In case the ProfilSekolah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilSekolahUpdateInput, ProfilSekolahUncheckedUpdateInput>
  }

  /**
   * ProfilSekolah delete
   */
  export type ProfilSekolahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
    /**
     * Filter which ProfilSekolah to delete.
     */
    where: ProfilSekolahWhereUniqueInput
  }

  /**
   * ProfilSekolah deleteMany
   */
  export type ProfilSekolahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfilSekolahs to delete
     */
    where?: ProfilSekolahWhereInput
    /**
     * Limit how many ProfilSekolahs to delete.
     */
    limit?: number
  }

  /**
   * ProfilSekolah without action
   */
  export type ProfilSekolahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilSekolah
     */
    select?: ProfilSekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilSekolah
     */
    omit?: ProfilSekolahOmit<ExtArgs> | null
  }


  /**
   * Model StrukturOrganisasi
   */

  export type AggregateStrukturOrganisasi = {
    _count: StrukturOrganisasiCountAggregateOutputType | null
    _avg: StrukturOrganisasiAvgAggregateOutputType | null
    _sum: StrukturOrganisasiSumAggregateOutputType | null
    _min: StrukturOrganisasiMinAggregateOutputType | null
    _max: StrukturOrganisasiMaxAggregateOutputType | null
  }

  export type StrukturOrganisasiAvgAggregateOutputType = {
    urutan: number | null
  }

  export type StrukturOrganisasiSumAggregateOutputType = {
    urutan: number | null
  }

  export type StrukturOrganisasiMinAggregateOutputType = {
    id: string | null
    nama: string | null
    jabatan: string | null
    foto: string | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StrukturOrganisasiMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    jabatan: string | null
    foto: string | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StrukturOrganisasiCountAggregateOutputType = {
    id: number
    nama: number
    jabatan: number
    foto: number
    urutan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StrukturOrganisasiAvgAggregateInputType = {
    urutan?: true
  }

  export type StrukturOrganisasiSumAggregateInputType = {
    urutan?: true
  }

  export type StrukturOrganisasiMinAggregateInputType = {
    id?: true
    nama?: true
    jabatan?: true
    foto?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StrukturOrganisasiMaxAggregateInputType = {
    id?: true
    nama?: true
    jabatan?: true
    foto?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StrukturOrganisasiCountAggregateInputType = {
    id?: true
    nama?: true
    jabatan?: true
    foto?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StrukturOrganisasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StrukturOrganisasi to aggregate.
     */
    where?: StrukturOrganisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrukturOrganisasis to fetch.
     */
    orderBy?: StrukturOrganisasiOrderByWithRelationInput | StrukturOrganisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StrukturOrganisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrukturOrganisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrukturOrganisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StrukturOrganisasis
    **/
    _count?: true | StrukturOrganisasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StrukturOrganisasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StrukturOrganisasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StrukturOrganisasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StrukturOrganisasiMaxAggregateInputType
  }

  export type GetStrukturOrganisasiAggregateType<T extends StrukturOrganisasiAggregateArgs> = {
        [P in keyof T & keyof AggregateStrukturOrganisasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStrukturOrganisasi[P]>
      : GetScalarType<T[P], AggregateStrukturOrganisasi[P]>
  }




  export type StrukturOrganisasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrukturOrganisasiWhereInput
    orderBy?: StrukturOrganisasiOrderByWithAggregationInput | StrukturOrganisasiOrderByWithAggregationInput[]
    by: StrukturOrganisasiScalarFieldEnum[] | StrukturOrganisasiScalarFieldEnum
    having?: StrukturOrganisasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StrukturOrganisasiCountAggregateInputType | true
    _avg?: StrukturOrganisasiAvgAggregateInputType
    _sum?: StrukturOrganisasiSumAggregateInputType
    _min?: StrukturOrganisasiMinAggregateInputType
    _max?: StrukturOrganisasiMaxAggregateInputType
  }

  export type StrukturOrganisasiGroupByOutputType = {
    id: string
    nama: string
    jabatan: string
    foto: string | null
    urutan: number
    createdAt: Date
    updatedAt: Date
    _count: StrukturOrganisasiCountAggregateOutputType | null
    _avg: StrukturOrganisasiAvgAggregateOutputType | null
    _sum: StrukturOrganisasiSumAggregateOutputType | null
    _min: StrukturOrganisasiMinAggregateOutputType | null
    _max: StrukturOrganisasiMaxAggregateOutputType | null
  }

  type GetStrukturOrganisasiGroupByPayload<T extends StrukturOrganisasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StrukturOrganisasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StrukturOrganisasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StrukturOrganisasiGroupByOutputType[P]>
            : GetScalarType<T[P], StrukturOrganisasiGroupByOutputType[P]>
        }
      >
    >


  export type StrukturOrganisasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    jabatan?: boolean
    foto?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["strukturOrganisasi"]>



  export type StrukturOrganisasiSelectScalar = {
    id?: boolean
    nama?: boolean
    jabatan?: boolean
    foto?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StrukturOrganisasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "jabatan" | "foto" | "urutan" | "createdAt" | "updatedAt", ExtArgs["result"]["strukturOrganisasi"]>

  export type $StrukturOrganisasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StrukturOrganisasi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      jabatan: string
      foto: string | null
      urutan: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["strukturOrganisasi"]>
    composites: {}
  }

  type StrukturOrganisasiGetPayload<S extends boolean | null | undefined | StrukturOrganisasiDefaultArgs> = $Result.GetResult<Prisma.$StrukturOrganisasiPayload, S>

  type StrukturOrganisasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StrukturOrganisasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StrukturOrganisasiCountAggregateInputType | true
    }

  export interface StrukturOrganisasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StrukturOrganisasi'], meta: { name: 'StrukturOrganisasi' } }
    /**
     * Find zero or one StrukturOrganisasi that matches the filter.
     * @param {StrukturOrganisasiFindUniqueArgs} args - Arguments to find a StrukturOrganisasi
     * @example
     * // Get one StrukturOrganisasi
     * const strukturOrganisasi = await prisma.strukturOrganisasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StrukturOrganisasiFindUniqueArgs>(args: SelectSubset<T, StrukturOrganisasiFindUniqueArgs<ExtArgs>>): Prisma__StrukturOrganisasiClient<$Result.GetResult<Prisma.$StrukturOrganisasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StrukturOrganisasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StrukturOrganisasiFindUniqueOrThrowArgs} args - Arguments to find a StrukturOrganisasi
     * @example
     * // Get one StrukturOrganisasi
     * const strukturOrganisasi = await prisma.strukturOrganisasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StrukturOrganisasiFindUniqueOrThrowArgs>(args: SelectSubset<T, StrukturOrganisasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StrukturOrganisasiClient<$Result.GetResult<Prisma.$StrukturOrganisasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StrukturOrganisasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrukturOrganisasiFindFirstArgs} args - Arguments to find a StrukturOrganisasi
     * @example
     * // Get one StrukturOrganisasi
     * const strukturOrganisasi = await prisma.strukturOrganisasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StrukturOrganisasiFindFirstArgs>(args?: SelectSubset<T, StrukturOrganisasiFindFirstArgs<ExtArgs>>): Prisma__StrukturOrganisasiClient<$Result.GetResult<Prisma.$StrukturOrganisasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StrukturOrganisasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrukturOrganisasiFindFirstOrThrowArgs} args - Arguments to find a StrukturOrganisasi
     * @example
     * // Get one StrukturOrganisasi
     * const strukturOrganisasi = await prisma.strukturOrganisasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StrukturOrganisasiFindFirstOrThrowArgs>(args?: SelectSubset<T, StrukturOrganisasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__StrukturOrganisasiClient<$Result.GetResult<Prisma.$StrukturOrganisasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StrukturOrganisasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrukturOrganisasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StrukturOrganisasis
     * const strukturOrganisasis = await prisma.strukturOrganisasi.findMany()
     * 
     * // Get first 10 StrukturOrganisasis
     * const strukturOrganisasis = await prisma.strukturOrganisasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const strukturOrganisasiWithIdOnly = await prisma.strukturOrganisasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StrukturOrganisasiFindManyArgs>(args?: SelectSubset<T, StrukturOrganisasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrukturOrganisasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StrukturOrganisasi.
     * @param {StrukturOrganisasiCreateArgs} args - Arguments to create a StrukturOrganisasi.
     * @example
     * // Create one StrukturOrganisasi
     * const StrukturOrganisasi = await prisma.strukturOrganisasi.create({
     *   data: {
     *     // ... data to create a StrukturOrganisasi
     *   }
     * })
     * 
     */
    create<T extends StrukturOrganisasiCreateArgs>(args: SelectSubset<T, StrukturOrganisasiCreateArgs<ExtArgs>>): Prisma__StrukturOrganisasiClient<$Result.GetResult<Prisma.$StrukturOrganisasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StrukturOrganisasis.
     * @param {StrukturOrganisasiCreateManyArgs} args - Arguments to create many StrukturOrganisasis.
     * @example
     * // Create many StrukturOrganisasis
     * const strukturOrganisasi = await prisma.strukturOrganisasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StrukturOrganisasiCreateManyArgs>(args?: SelectSubset<T, StrukturOrganisasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StrukturOrganisasi.
     * @param {StrukturOrganisasiDeleteArgs} args - Arguments to delete one StrukturOrganisasi.
     * @example
     * // Delete one StrukturOrganisasi
     * const StrukturOrganisasi = await prisma.strukturOrganisasi.delete({
     *   where: {
     *     // ... filter to delete one StrukturOrganisasi
     *   }
     * })
     * 
     */
    delete<T extends StrukturOrganisasiDeleteArgs>(args: SelectSubset<T, StrukturOrganisasiDeleteArgs<ExtArgs>>): Prisma__StrukturOrganisasiClient<$Result.GetResult<Prisma.$StrukturOrganisasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StrukturOrganisasi.
     * @param {StrukturOrganisasiUpdateArgs} args - Arguments to update one StrukturOrganisasi.
     * @example
     * // Update one StrukturOrganisasi
     * const strukturOrganisasi = await prisma.strukturOrganisasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StrukturOrganisasiUpdateArgs>(args: SelectSubset<T, StrukturOrganisasiUpdateArgs<ExtArgs>>): Prisma__StrukturOrganisasiClient<$Result.GetResult<Prisma.$StrukturOrganisasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StrukturOrganisasis.
     * @param {StrukturOrganisasiDeleteManyArgs} args - Arguments to filter StrukturOrganisasis to delete.
     * @example
     * // Delete a few StrukturOrganisasis
     * const { count } = await prisma.strukturOrganisasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StrukturOrganisasiDeleteManyArgs>(args?: SelectSubset<T, StrukturOrganisasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StrukturOrganisasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrukturOrganisasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StrukturOrganisasis
     * const strukturOrganisasi = await prisma.strukturOrganisasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StrukturOrganisasiUpdateManyArgs>(args: SelectSubset<T, StrukturOrganisasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StrukturOrganisasi.
     * @param {StrukturOrganisasiUpsertArgs} args - Arguments to update or create a StrukturOrganisasi.
     * @example
     * // Update or create a StrukturOrganisasi
     * const strukturOrganisasi = await prisma.strukturOrganisasi.upsert({
     *   create: {
     *     // ... data to create a StrukturOrganisasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StrukturOrganisasi we want to update
     *   }
     * })
     */
    upsert<T extends StrukturOrganisasiUpsertArgs>(args: SelectSubset<T, StrukturOrganisasiUpsertArgs<ExtArgs>>): Prisma__StrukturOrganisasiClient<$Result.GetResult<Prisma.$StrukturOrganisasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StrukturOrganisasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrukturOrganisasiCountArgs} args - Arguments to filter StrukturOrganisasis to count.
     * @example
     * // Count the number of StrukturOrganisasis
     * const count = await prisma.strukturOrganisasi.count({
     *   where: {
     *     // ... the filter for the StrukturOrganisasis we want to count
     *   }
     * })
    **/
    count<T extends StrukturOrganisasiCountArgs>(
      args?: Subset<T, StrukturOrganisasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StrukturOrganisasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StrukturOrganisasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrukturOrganisasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StrukturOrganisasiAggregateArgs>(args: Subset<T, StrukturOrganisasiAggregateArgs>): Prisma.PrismaPromise<GetStrukturOrganisasiAggregateType<T>>

    /**
     * Group by StrukturOrganisasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrukturOrganisasiGroupByArgs} args - Group by arguments.
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
      T extends StrukturOrganisasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StrukturOrganisasiGroupByArgs['orderBy'] }
        : { orderBy?: StrukturOrganisasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StrukturOrganisasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrukturOrganisasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StrukturOrganisasi model
   */
  readonly fields: StrukturOrganisasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StrukturOrganisasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StrukturOrganisasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the StrukturOrganisasi model
   */
  interface StrukturOrganisasiFieldRefs {
    readonly id: FieldRef<"StrukturOrganisasi", 'String'>
    readonly nama: FieldRef<"StrukturOrganisasi", 'String'>
    readonly jabatan: FieldRef<"StrukturOrganisasi", 'String'>
    readonly foto: FieldRef<"StrukturOrganisasi", 'String'>
    readonly urutan: FieldRef<"StrukturOrganisasi", 'Int'>
    readonly createdAt: FieldRef<"StrukturOrganisasi", 'DateTime'>
    readonly updatedAt: FieldRef<"StrukturOrganisasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StrukturOrganisasi findUnique
   */
  export type StrukturOrganisasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
    /**
     * Filter, which StrukturOrganisasi to fetch.
     */
    where: StrukturOrganisasiWhereUniqueInput
  }

  /**
   * StrukturOrganisasi findUniqueOrThrow
   */
  export type StrukturOrganisasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
    /**
     * Filter, which StrukturOrganisasi to fetch.
     */
    where: StrukturOrganisasiWhereUniqueInput
  }

  /**
   * StrukturOrganisasi findFirst
   */
  export type StrukturOrganisasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
    /**
     * Filter, which StrukturOrganisasi to fetch.
     */
    where?: StrukturOrganisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrukturOrganisasis to fetch.
     */
    orderBy?: StrukturOrganisasiOrderByWithRelationInput | StrukturOrganisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StrukturOrganisasis.
     */
    cursor?: StrukturOrganisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrukturOrganisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrukturOrganisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StrukturOrganisasis.
     */
    distinct?: StrukturOrganisasiScalarFieldEnum | StrukturOrganisasiScalarFieldEnum[]
  }

  /**
   * StrukturOrganisasi findFirstOrThrow
   */
  export type StrukturOrganisasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
    /**
     * Filter, which StrukturOrganisasi to fetch.
     */
    where?: StrukturOrganisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrukturOrganisasis to fetch.
     */
    orderBy?: StrukturOrganisasiOrderByWithRelationInput | StrukturOrganisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StrukturOrganisasis.
     */
    cursor?: StrukturOrganisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrukturOrganisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrukturOrganisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StrukturOrganisasis.
     */
    distinct?: StrukturOrganisasiScalarFieldEnum | StrukturOrganisasiScalarFieldEnum[]
  }

  /**
   * StrukturOrganisasi findMany
   */
  export type StrukturOrganisasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
    /**
     * Filter, which StrukturOrganisasis to fetch.
     */
    where?: StrukturOrganisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrukturOrganisasis to fetch.
     */
    orderBy?: StrukturOrganisasiOrderByWithRelationInput | StrukturOrganisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StrukturOrganisasis.
     */
    cursor?: StrukturOrganisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrukturOrganisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrukturOrganisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StrukturOrganisasis.
     */
    distinct?: StrukturOrganisasiScalarFieldEnum | StrukturOrganisasiScalarFieldEnum[]
  }

  /**
   * StrukturOrganisasi create
   */
  export type StrukturOrganisasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
    /**
     * The data needed to create a StrukturOrganisasi.
     */
    data: XOR<StrukturOrganisasiCreateInput, StrukturOrganisasiUncheckedCreateInput>
  }

  /**
   * StrukturOrganisasi createMany
   */
  export type StrukturOrganisasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StrukturOrganisasis.
     */
    data: StrukturOrganisasiCreateManyInput | StrukturOrganisasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StrukturOrganisasi update
   */
  export type StrukturOrganisasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
    /**
     * The data needed to update a StrukturOrganisasi.
     */
    data: XOR<StrukturOrganisasiUpdateInput, StrukturOrganisasiUncheckedUpdateInput>
    /**
     * Choose, which StrukturOrganisasi to update.
     */
    where: StrukturOrganisasiWhereUniqueInput
  }

  /**
   * StrukturOrganisasi updateMany
   */
  export type StrukturOrganisasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StrukturOrganisasis.
     */
    data: XOR<StrukturOrganisasiUpdateManyMutationInput, StrukturOrganisasiUncheckedUpdateManyInput>
    /**
     * Filter which StrukturOrganisasis to update
     */
    where?: StrukturOrganisasiWhereInput
    /**
     * Limit how many StrukturOrganisasis to update.
     */
    limit?: number
  }

  /**
   * StrukturOrganisasi upsert
   */
  export type StrukturOrganisasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
    /**
     * The filter to search for the StrukturOrganisasi to update in case it exists.
     */
    where: StrukturOrganisasiWhereUniqueInput
    /**
     * In case the StrukturOrganisasi found by the `where` argument doesn't exist, create a new StrukturOrganisasi with this data.
     */
    create: XOR<StrukturOrganisasiCreateInput, StrukturOrganisasiUncheckedCreateInput>
    /**
     * In case the StrukturOrganisasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StrukturOrganisasiUpdateInput, StrukturOrganisasiUncheckedUpdateInput>
  }

  /**
   * StrukturOrganisasi delete
   */
  export type StrukturOrganisasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
    /**
     * Filter which StrukturOrganisasi to delete.
     */
    where: StrukturOrganisasiWhereUniqueInput
  }

  /**
   * StrukturOrganisasi deleteMany
   */
  export type StrukturOrganisasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StrukturOrganisasis to delete
     */
    where?: StrukturOrganisasiWhereInput
    /**
     * Limit how many StrukturOrganisasis to delete.
     */
    limit?: number
  }

  /**
   * StrukturOrganisasi without action
   */
  export type StrukturOrganisasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrukturOrganisasi
     */
    select?: StrukturOrganisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrukturOrganisasi
     */
    omit?: StrukturOrganisasiOmit<ExtArgs> | null
  }


  /**
   * Model Fasilitas
   */

  export type AggregateFasilitas = {
    _count: FasilitasCountAggregateOutputType | null
    _avg: FasilitasAvgAggregateOutputType | null
    _sum: FasilitasSumAggregateOutputType | null
    _min: FasilitasMinAggregateOutputType | null
    _max: FasilitasMaxAggregateOutputType | null
  }

  export type FasilitasAvgAggregateOutputType = {
    urutan: number | null
  }

  export type FasilitasSumAggregateOutputType = {
    urutan: number | null
  }

  export type FasilitasMinAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    ikon: string | null
    gambar: string | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FasilitasMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    ikon: string | null
    gambar: string | null
    urutan: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FasilitasCountAggregateOutputType = {
    id: number
    nama: number
    deskripsi: number
    ikon: number
    gambar: number
    urutan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FasilitasAvgAggregateInputType = {
    urutan?: true
  }

  export type FasilitasSumAggregateInputType = {
    urutan?: true
  }

  export type FasilitasMinAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    ikon?: true
    gambar?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FasilitasMaxAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    ikon?: true
    gambar?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FasilitasCountAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    ikon?: true
    gambar?: true
    urutan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FasilitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fasilitas to aggregate.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fasilitas
    **/
    _count?: true | FasilitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FasilitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FasilitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FasilitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FasilitasMaxAggregateInputType
  }

  export type GetFasilitasAggregateType<T extends FasilitasAggregateArgs> = {
        [P in keyof T & keyof AggregateFasilitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFasilitas[P]>
      : GetScalarType<T[P], AggregateFasilitas[P]>
  }




  export type FasilitasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FasilitasWhereInput
    orderBy?: FasilitasOrderByWithAggregationInput | FasilitasOrderByWithAggregationInput[]
    by: FasilitasScalarFieldEnum[] | FasilitasScalarFieldEnum
    having?: FasilitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FasilitasCountAggregateInputType | true
    _avg?: FasilitasAvgAggregateInputType
    _sum?: FasilitasSumAggregateInputType
    _min?: FasilitasMinAggregateInputType
    _max?: FasilitasMaxAggregateInputType
  }

  export type FasilitasGroupByOutputType = {
    id: string
    nama: string
    deskripsi: string | null
    ikon: string | null
    gambar: string | null
    urutan: number
    createdAt: Date
    updatedAt: Date
    _count: FasilitasCountAggregateOutputType | null
    _avg: FasilitasAvgAggregateOutputType | null
    _sum: FasilitasSumAggregateOutputType | null
    _min: FasilitasMinAggregateOutputType | null
    _max: FasilitasMaxAggregateOutputType | null
  }

  type GetFasilitasGroupByPayload<T extends FasilitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FasilitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FasilitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FasilitasGroupByOutputType[P]>
            : GetScalarType<T[P], FasilitasGroupByOutputType[P]>
        }
      >
    >


  export type FasilitasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    ikon?: boolean
    gambar?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fasilitas"]>



  export type FasilitasSelectScalar = {
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    ikon?: boolean
    gambar?: boolean
    urutan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FasilitasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "deskripsi" | "ikon" | "gambar" | "urutan" | "createdAt" | "updatedAt", ExtArgs["result"]["fasilitas"]>

  export type $FasilitasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fasilitas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      deskripsi: string | null
      ikon: string | null
      gambar: string | null
      urutan: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fasilitas"]>
    composites: {}
  }

  type FasilitasGetPayload<S extends boolean | null | undefined | FasilitasDefaultArgs> = $Result.GetResult<Prisma.$FasilitasPayload, S>

  type FasilitasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FasilitasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FasilitasCountAggregateInputType | true
    }

  export interface FasilitasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fasilitas'], meta: { name: 'Fasilitas' } }
    /**
     * Find zero or one Fasilitas that matches the filter.
     * @param {FasilitasFindUniqueArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FasilitasFindUniqueArgs>(args: SelectSubset<T, FasilitasFindUniqueArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fasilitas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FasilitasFindUniqueOrThrowArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FasilitasFindUniqueOrThrowArgs>(args: SelectSubset<T, FasilitasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fasilitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasFindFirstArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FasilitasFindFirstArgs>(args?: SelectSubset<T, FasilitasFindFirstArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fasilitas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasFindFirstOrThrowArgs} args - Arguments to find a Fasilitas
     * @example
     * // Get one Fasilitas
     * const fasilitas = await prisma.fasilitas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FasilitasFindFirstOrThrowArgs>(args?: SelectSubset<T, FasilitasFindFirstOrThrowArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fasilitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fasilitas
     * const fasilitas = await prisma.fasilitas.findMany()
     * 
     * // Get first 10 Fasilitas
     * const fasilitas = await prisma.fasilitas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fasilitasWithIdOnly = await prisma.fasilitas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FasilitasFindManyArgs>(args?: SelectSubset<T, FasilitasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fasilitas.
     * @param {FasilitasCreateArgs} args - Arguments to create a Fasilitas.
     * @example
     * // Create one Fasilitas
     * const Fasilitas = await prisma.fasilitas.create({
     *   data: {
     *     // ... data to create a Fasilitas
     *   }
     * })
     * 
     */
    create<T extends FasilitasCreateArgs>(args: SelectSubset<T, FasilitasCreateArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fasilitas.
     * @param {FasilitasCreateManyArgs} args - Arguments to create many Fasilitas.
     * @example
     * // Create many Fasilitas
     * const fasilitas = await prisma.fasilitas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FasilitasCreateManyArgs>(args?: SelectSubset<T, FasilitasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fasilitas.
     * @param {FasilitasDeleteArgs} args - Arguments to delete one Fasilitas.
     * @example
     * // Delete one Fasilitas
     * const Fasilitas = await prisma.fasilitas.delete({
     *   where: {
     *     // ... filter to delete one Fasilitas
     *   }
     * })
     * 
     */
    delete<T extends FasilitasDeleteArgs>(args: SelectSubset<T, FasilitasDeleteArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fasilitas.
     * @param {FasilitasUpdateArgs} args - Arguments to update one Fasilitas.
     * @example
     * // Update one Fasilitas
     * const fasilitas = await prisma.fasilitas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FasilitasUpdateArgs>(args: SelectSubset<T, FasilitasUpdateArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fasilitas.
     * @param {FasilitasDeleteManyArgs} args - Arguments to filter Fasilitas to delete.
     * @example
     * // Delete a few Fasilitas
     * const { count } = await prisma.fasilitas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FasilitasDeleteManyArgs>(args?: SelectSubset<T, FasilitasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fasilitas
     * const fasilitas = await prisma.fasilitas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FasilitasUpdateManyArgs>(args: SelectSubset<T, FasilitasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fasilitas.
     * @param {FasilitasUpsertArgs} args - Arguments to update or create a Fasilitas.
     * @example
     * // Update or create a Fasilitas
     * const fasilitas = await prisma.fasilitas.upsert({
     *   create: {
     *     // ... data to create a Fasilitas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fasilitas we want to update
     *   }
     * })
     */
    upsert<T extends FasilitasUpsertArgs>(args: SelectSubset<T, FasilitasUpsertArgs<ExtArgs>>): Prisma__FasilitasClient<$Result.GetResult<Prisma.$FasilitasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasCountArgs} args - Arguments to filter Fasilitas to count.
     * @example
     * // Count the number of Fasilitas
     * const count = await prisma.fasilitas.count({
     *   where: {
     *     // ... the filter for the Fasilitas we want to count
     *   }
     * })
    **/
    count<T extends FasilitasCountArgs>(
      args?: Subset<T, FasilitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FasilitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FasilitasAggregateArgs>(args: Subset<T, FasilitasAggregateArgs>): Prisma.PrismaPromise<GetFasilitasAggregateType<T>>

    /**
     * Group by Fasilitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitasGroupByArgs} args - Group by arguments.
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
      T extends FasilitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FasilitasGroupByArgs['orderBy'] }
        : { orderBy?: FasilitasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FasilitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFasilitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fasilitas model
   */
  readonly fields: FasilitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fasilitas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FasilitasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Fasilitas model
   */
  interface FasilitasFieldRefs {
    readonly id: FieldRef<"Fasilitas", 'String'>
    readonly nama: FieldRef<"Fasilitas", 'String'>
    readonly deskripsi: FieldRef<"Fasilitas", 'String'>
    readonly ikon: FieldRef<"Fasilitas", 'String'>
    readonly gambar: FieldRef<"Fasilitas", 'String'>
    readonly urutan: FieldRef<"Fasilitas", 'Int'>
    readonly createdAt: FieldRef<"Fasilitas", 'DateTime'>
    readonly updatedAt: FieldRef<"Fasilitas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fasilitas findUnique
   */
  export type FasilitasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas findUniqueOrThrow
   */
  export type FasilitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas findFirst
   */
  export type FasilitasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fasilitas.
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitas.
     */
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Fasilitas findFirstOrThrow
   */
  export type FasilitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fasilitas.
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitas.
     */
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Fasilitas findMany
   */
  export type FasilitasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter, which Fasilitas to fetch.
     */
    where?: FasilitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitas to fetch.
     */
    orderBy?: FasilitasOrderByWithRelationInput | FasilitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fasilitas.
     */
    cursor?: FasilitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitas.
     */
    distinct?: FasilitasScalarFieldEnum | FasilitasScalarFieldEnum[]
  }

  /**
   * Fasilitas create
   */
  export type FasilitasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * The data needed to create a Fasilitas.
     */
    data: XOR<FasilitasCreateInput, FasilitasUncheckedCreateInput>
  }

  /**
   * Fasilitas createMany
   */
  export type FasilitasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fasilitas.
     */
    data: FasilitasCreateManyInput | FasilitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fasilitas update
   */
  export type FasilitasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * The data needed to update a Fasilitas.
     */
    data: XOR<FasilitasUpdateInput, FasilitasUncheckedUpdateInput>
    /**
     * Choose, which Fasilitas to update.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas updateMany
   */
  export type FasilitasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fasilitas.
     */
    data: XOR<FasilitasUpdateManyMutationInput, FasilitasUncheckedUpdateManyInput>
    /**
     * Filter which Fasilitas to update
     */
    where?: FasilitasWhereInput
    /**
     * Limit how many Fasilitas to update.
     */
    limit?: number
  }

  /**
   * Fasilitas upsert
   */
  export type FasilitasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * The filter to search for the Fasilitas to update in case it exists.
     */
    where: FasilitasWhereUniqueInput
    /**
     * In case the Fasilitas found by the `where` argument doesn't exist, create a new Fasilitas with this data.
     */
    create: XOR<FasilitasCreateInput, FasilitasUncheckedCreateInput>
    /**
     * In case the Fasilitas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FasilitasUpdateInput, FasilitasUncheckedUpdateInput>
  }

  /**
   * Fasilitas delete
   */
  export type FasilitasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
    /**
     * Filter which Fasilitas to delete.
     */
    where: FasilitasWhereUniqueInput
  }

  /**
   * Fasilitas deleteMany
   */
  export type FasilitasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fasilitas to delete
     */
    where?: FasilitasWhereInput
    /**
     * Limit how many Fasilitas to delete.
     */
    limit?: number
  }

  /**
   * Fasilitas without action
   */
  export type FasilitasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitas
     */
    select?: FasilitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fasilitas
     */
    omit?: FasilitasOmit<ExtArgs> | null
  }


  /**
   * Model KategoriBerita
   */

  export type AggregateKategoriBerita = {
    _count: KategoriBeritaCountAggregateOutputType | null
    _min: KategoriBeritaMinAggregateOutputType | null
    _max: KategoriBeritaMaxAggregateOutputType | null
  }

  export type KategoriBeritaMinAggregateOutputType = {
    id: string | null
    nama: string | null
    slug: string | null
  }

  export type KategoriBeritaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    slug: string | null
  }

  export type KategoriBeritaCountAggregateOutputType = {
    id: number
    nama: number
    slug: number
    _all: number
  }


  export type KategoriBeritaMinAggregateInputType = {
    id?: true
    nama?: true
    slug?: true
  }

  export type KategoriBeritaMaxAggregateInputType = {
    id?: true
    nama?: true
    slug?: true
  }

  export type KategoriBeritaCountAggregateInputType = {
    id?: true
    nama?: true
    slug?: true
    _all?: true
  }

  export type KategoriBeritaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KategoriBerita to aggregate.
     */
    where?: KategoriBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriBeritas to fetch.
     */
    orderBy?: KategoriBeritaOrderByWithRelationInput | KategoriBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KategoriBeritas
    **/
    _count?: true | KategoriBeritaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriBeritaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriBeritaMaxAggregateInputType
  }

  export type GetKategoriBeritaAggregateType<T extends KategoriBeritaAggregateArgs> = {
        [P in keyof T & keyof AggregateKategoriBerita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategoriBerita[P]>
      : GetScalarType<T[P], AggregateKategoriBerita[P]>
  }




  export type KategoriBeritaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriBeritaWhereInput
    orderBy?: KategoriBeritaOrderByWithAggregationInput | KategoriBeritaOrderByWithAggregationInput[]
    by: KategoriBeritaScalarFieldEnum[] | KategoriBeritaScalarFieldEnum
    having?: KategoriBeritaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriBeritaCountAggregateInputType | true
    _min?: KategoriBeritaMinAggregateInputType
    _max?: KategoriBeritaMaxAggregateInputType
  }

  export type KategoriBeritaGroupByOutputType = {
    id: string
    nama: string
    slug: string
    _count: KategoriBeritaCountAggregateOutputType | null
    _min: KategoriBeritaMinAggregateOutputType | null
    _max: KategoriBeritaMaxAggregateOutputType | null
  }

  type GetKategoriBeritaGroupByPayload<T extends KategoriBeritaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriBeritaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriBeritaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriBeritaGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriBeritaGroupByOutputType[P]>
        }
      >
    >


  export type KategoriBeritaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    slug?: boolean
    berita?: boolean | KategoriBerita$beritaArgs<ExtArgs>
    _count?: boolean | KategoriBeritaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategoriBerita"]>



  export type KategoriBeritaSelectScalar = {
    id?: boolean
    nama?: boolean
    slug?: boolean
  }

  export type KategoriBeritaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "slug", ExtArgs["result"]["kategoriBerita"]>
  export type KategoriBeritaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    berita?: boolean | KategoriBerita$beritaArgs<ExtArgs>
    _count?: boolean | KategoriBeritaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KategoriBeritaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KategoriBerita"
    objects: {
      berita: Prisma.$BeritaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      slug: string
    }, ExtArgs["result"]["kategoriBerita"]>
    composites: {}
  }

  type KategoriBeritaGetPayload<S extends boolean | null | undefined | KategoriBeritaDefaultArgs> = $Result.GetResult<Prisma.$KategoriBeritaPayload, S>

  type KategoriBeritaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriBeritaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriBeritaCountAggregateInputType | true
    }

  export interface KategoriBeritaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KategoriBerita'], meta: { name: 'KategoriBerita' } }
    /**
     * Find zero or one KategoriBerita that matches the filter.
     * @param {KategoriBeritaFindUniqueArgs} args - Arguments to find a KategoriBerita
     * @example
     * // Get one KategoriBerita
     * const kategoriBerita = await prisma.kategoriBerita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriBeritaFindUniqueArgs>(args: SelectSubset<T, KategoriBeritaFindUniqueArgs<ExtArgs>>): Prisma__KategoriBeritaClient<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KategoriBerita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriBeritaFindUniqueOrThrowArgs} args - Arguments to find a KategoriBerita
     * @example
     * // Get one KategoriBerita
     * const kategoriBerita = await prisma.kategoriBerita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriBeritaFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriBeritaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriBeritaClient<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KategoriBerita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriBeritaFindFirstArgs} args - Arguments to find a KategoriBerita
     * @example
     * // Get one KategoriBerita
     * const kategoriBerita = await prisma.kategoriBerita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriBeritaFindFirstArgs>(args?: SelectSubset<T, KategoriBeritaFindFirstArgs<ExtArgs>>): Prisma__KategoriBeritaClient<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KategoriBerita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriBeritaFindFirstOrThrowArgs} args - Arguments to find a KategoriBerita
     * @example
     * // Get one KategoriBerita
     * const kategoriBerita = await prisma.kategoriBerita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriBeritaFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriBeritaFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriBeritaClient<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KategoriBeritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriBeritaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KategoriBeritas
     * const kategoriBeritas = await prisma.kategoriBerita.findMany()
     * 
     * // Get first 10 KategoriBeritas
     * const kategoriBeritas = await prisma.kategoriBerita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriBeritaWithIdOnly = await prisma.kategoriBerita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KategoriBeritaFindManyArgs>(args?: SelectSubset<T, KategoriBeritaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KategoriBerita.
     * @param {KategoriBeritaCreateArgs} args - Arguments to create a KategoriBerita.
     * @example
     * // Create one KategoriBerita
     * const KategoriBerita = await prisma.kategoriBerita.create({
     *   data: {
     *     // ... data to create a KategoriBerita
     *   }
     * })
     * 
     */
    create<T extends KategoriBeritaCreateArgs>(args: SelectSubset<T, KategoriBeritaCreateArgs<ExtArgs>>): Prisma__KategoriBeritaClient<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KategoriBeritas.
     * @param {KategoriBeritaCreateManyArgs} args - Arguments to create many KategoriBeritas.
     * @example
     * // Create many KategoriBeritas
     * const kategoriBerita = await prisma.kategoriBerita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriBeritaCreateManyArgs>(args?: SelectSubset<T, KategoriBeritaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KategoriBerita.
     * @param {KategoriBeritaDeleteArgs} args - Arguments to delete one KategoriBerita.
     * @example
     * // Delete one KategoriBerita
     * const KategoriBerita = await prisma.kategoriBerita.delete({
     *   where: {
     *     // ... filter to delete one KategoriBerita
     *   }
     * })
     * 
     */
    delete<T extends KategoriBeritaDeleteArgs>(args: SelectSubset<T, KategoriBeritaDeleteArgs<ExtArgs>>): Prisma__KategoriBeritaClient<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KategoriBerita.
     * @param {KategoriBeritaUpdateArgs} args - Arguments to update one KategoriBerita.
     * @example
     * // Update one KategoriBerita
     * const kategoriBerita = await prisma.kategoriBerita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriBeritaUpdateArgs>(args: SelectSubset<T, KategoriBeritaUpdateArgs<ExtArgs>>): Prisma__KategoriBeritaClient<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KategoriBeritas.
     * @param {KategoriBeritaDeleteManyArgs} args - Arguments to filter KategoriBeritas to delete.
     * @example
     * // Delete a few KategoriBeritas
     * const { count } = await prisma.kategoriBerita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriBeritaDeleteManyArgs>(args?: SelectSubset<T, KategoriBeritaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KategoriBeritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriBeritaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KategoriBeritas
     * const kategoriBerita = await prisma.kategoriBerita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriBeritaUpdateManyArgs>(args: SelectSubset<T, KategoriBeritaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KategoriBerita.
     * @param {KategoriBeritaUpsertArgs} args - Arguments to update or create a KategoriBerita.
     * @example
     * // Update or create a KategoriBerita
     * const kategoriBerita = await prisma.kategoriBerita.upsert({
     *   create: {
     *     // ... data to create a KategoriBerita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KategoriBerita we want to update
     *   }
     * })
     */
    upsert<T extends KategoriBeritaUpsertArgs>(args: SelectSubset<T, KategoriBeritaUpsertArgs<ExtArgs>>): Prisma__KategoriBeritaClient<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KategoriBeritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriBeritaCountArgs} args - Arguments to filter KategoriBeritas to count.
     * @example
     * // Count the number of KategoriBeritas
     * const count = await prisma.kategoriBerita.count({
     *   where: {
     *     // ... the filter for the KategoriBeritas we want to count
     *   }
     * })
    **/
    count<T extends KategoriBeritaCountArgs>(
      args?: Subset<T, KategoriBeritaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriBeritaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KategoriBerita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriBeritaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KategoriBeritaAggregateArgs>(args: Subset<T, KategoriBeritaAggregateArgs>): Prisma.PrismaPromise<GetKategoriBeritaAggregateType<T>>

    /**
     * Group by KategoriBerita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriBeritaGroupByArgs} args - Group by arguments.
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
      T extends KategoriBeritaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriBeritaGroupByArgs['orderBy'] }
        : { orderBy?: KategoriBeritaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KategoriBeritaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriBeritaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KategoriBerita model
   */
  readonly fields: KategoriBeritaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KategoriBerita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriBeritaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    berita<T extends KategoriBerita$beritaArgs<ExtArgs> = {}>(args?: Subset<T, KategoriBerita$beritaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the KategoriBerita model
   */
  interface KategoriBeritaFieldRefs {
    readonly id: FieldRef<"KategoriBerita", 'String'>
    readonly nama: FieldRef<"KategoriBerita", 'String'>
    readonly slug: FieldRef<"KategoriBerita", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KategoriBerita findUnique
   */
  export type KategoriBeritaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    /**
     * Filter, which KategoriBerita to fetch.
     */
    where: KategoriBeritaWhereUniqueInput
  }

  /**
   * KategoriBerita findUniqueOrThrow
   */
  export type KategoriBeritaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    /**
     * Filter, which KategoriBerita to fetch.
     */
    where: KategoriBeritaWhereUniqueInput
  }

  /**
   * KategoriBerita findFirst
   */
  export type KategoriBeritaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    /**
     * Filter, which KategoriBerita to fetch.
     */
    where?: KategoriBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriBeritas to fetch.
     */
    orderBy?: KategoriBeritaOrderByWithRelationInput | KategoriBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KategoriBeritas.
     */
    cursor?: KategoriBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KategoriBeritas.
     */
    distinct?: KategoriBeritaScalarFieldEnum | KategoriBeritaScalarFieldEnum[]
  }

  /**
   * KategoriBerita findFirstOrThrow
   */
  export type KategoriBeritaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    /**
     * Filter, which KategoriBerita to fetch.
     */
    where?: KategoriBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriBeritas to fetch.
     */
    orderBy?: KategoriBeritaOrderByWithRelationInput | KategoriBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KategoriBeritas.
     */
    cursor?: KategoriBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KategoriBeritas.
     */
    distinct?: KategoriBeritaScalarFieldEnum | KategoriBeritaScalarFieldEnum[]
  }

  /**
   * KategoriBerita findMany
   */
  export type KategoriBeritaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    /**
     * Filter, which KategoriBeritas to fetch.
     */
    where?: KategoriBeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KategoriBeritas to fetch.
     */
    orderBy?: KategoriBeritaOrderByWithRelationInput | KategoriBeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KategoriBeritas.
     */
    cursor?: KategoriBeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KategoriBeritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KategoriBeritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KategoriBeritas.
     */
    distinct?: KategoriBeritaScalarFieldEnum | KategoriBeritaScalarFieldEnum[]
  }

  /**
   * KategoriBerita create
   */
  export type KategoriBeritaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    /**
     * The data needed to create a KategoriBerita.
     */
    data: XOR<KategoriBeritaCreateInput, KategoriBeritaUncheckedCreateInput>
  }

  /**
   * KategoriBerita createMany
   */
  export type KategoriBeritaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KategoriBeritas.
     */
    data: KategoriBeritaCreateManyInput | KategoriBeritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KategoriBerita update
   */
  export type KategoriBeritaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    /**
     * The data needed to update a KategoriBerita.
     */
    data: XOR<KategoriBeritaUpdateInput, KategoriBeritaUncheckedUpdateInput>
    /**
     * Choose, which KategoriBerita to update.
     */
    where: KategoriBeritaWhereUniqueInput
  }

  /**
   * KategoriBerita updateMany
   */
  export type KategoriBeritaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KategoriBeritas.
     */
    data: XOR<KategoriBeritaUpdateManyMutationInput, KategoriBeritaUncheckedUpdateManyInput>
    /**
     * Filter which KategoriBeritas to update
     */
    where?: KategoriBeritaWhereInput
    /**
     * Limit how many KategoriBeritas to update.
     */
    limit?: number
  }

  /**
   * KategoriBerita upsert
   */
  export type KategoriBeritaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    /**
     * The filter to search for the KategoriBerita to update in case it exists.
     */
    where: KategoriBeritaWhereUniqueInput
    /**
     * In case the KategoriBerita found by the `where` argument doesn't exist, create a new KategoriBerita with this data.
     */
    create: XOR<KategoriBeritaCreateInput, KategoriBeritaUncheckedCreateInput>
    /**
     * In case the KategoriBerita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriBeritaUpdateInput, KategoriBeritaUncheckedUpdateInput>
  }

  /**
   * KategoriBerita delete
   */
  export type KategoriBeritaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    /**
     * Filter which KategoriBerita to delete.
     */
    where: KategoriBeritaWhereUniqueInput
  }

  /**
   * KategoriBerita deleteMany
   */
  export type KategoriBeritaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KategoriBeritas to delete
     */
    where?: KategoriBeritaWhereInput
    /**
     * Limit how many KategoriBeritas to delete.
     */
    limit?: number
  }

  /**
   * KategoriBerita.berita
   */
  export type KategoriBerita$beritaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    where?: BeritaWhereInput
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    cursor?: BeritaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * KategoriBerita without action
   */
  export type KategoriBeritaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
  }


  /**
   * Model Berita
   */

  export type AggregateBerita = {
    _count: BeritaCountAggregateOutputType | null
    _min: BeritaMinAggregateOutputType | null
    _max: BeritaMaxAggregateOutputType | null
  }

  export type BeritaMinAggregateOutputType = {
    id: string | null
    judul: string | null
    slug: string | null
    konten: string | null
    gambar: string | null
    isPublished: boolean | null
    authorId: string | null
    kategoriId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeritaMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    slug: string | null
    konten: string | null
    gambar: string | null
    isPublished: boolean | null
    authorId: string | null
    kategoriId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeritaCountAggregateOutputType = {
    id: number
    judul: number
    slug: number
    konten: number
    gambar: number
    isPublished: number
    authorId: number
    kategoriId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BeritaMinAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    konten?: true
    gambar?: true
    isPublished?: true
    authorId?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeritaMaxAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    konten?: true
    gambar?: true
    isPublished?: true
    authorId?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeritaCountAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    konten?: true
    gambar?: true
    isPublished?: true
    authorId?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BeritaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Berita to aggregate.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beritas
    **/
    _count?: true | BeritaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeritaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeritaMaxAggregateInputType
  }

  export type GetBeritaAggregateType<T extends BeritaAggregateArgs> = {
        [P in keyof T & keyof AggregateBerita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBerita[P]>
      : GetScalarType<T[P], AggregateBerita[P]>
  }




  export type BeritaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeritaWhereInput
    orderBy?: BeritaOrderByWithAggregationInput | BeritaOrderByWithAggregationInput[]
    by: BeritaScalarFieldEnum[] | BeritaScalarFieldEnum
    having?: BeritaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeritaCountAggregateInputType | true
    _min?: BeritaMinAggregateInputType
    _max?: BeritaMaxAggregateInputType
  }

  export type BeritaGroupByOutputType = {
    id: string
    judul: string
    slug: string
    konten: string
    gambar: string | null
    isPublished: boolean
    authorId: string
    kategoriId: string | null
    createdAt: Date
    updatedAt: Date
    _count: BeritaCountAggregateOutputType | null
    _min: BeritaMinAggregateOutputType | null
    _max: BeritaMaxAggregateOutputType | null
  }

  type GetBeritaGroupByPayload<T extends BeritaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeritaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeritaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeritaGroupByOutputType[P]>
            : GetScalarType<T[P], BeritaGroupByOutputType[P]>
        }
      >
    >


  export type BeritaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    slug?: boolean
    konten?: boolean
    gambar?: boolean
    isPublished?: boolean
    authorId?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | Berita$kategoriArgs<ExtArgs>
  }, ExtArgs["result"]["berita"]>



  export type BeritaSelectScalar = {
    id?: boolean
    judul?: boolean
    slug?: boolean
    konten?: boolean
    gambar?: boolean
    isPublished?: boolean
    authorId?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BeritaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "slug" | "konten" | "gambar" | "isPublished" | "authorId" | "kategoriId" | "createdAt" | "updatedAt", ExtArgs["result"]["berita"]>
  export type BeritaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    kategori?: boolean | Berita$kategoriArgs<ExtArgs>
  }

  export type $BeritaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Berita"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      kategori: Prisma.$KategoriBeritaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      slug: string
      konten: string
      gambar: string | null
      isPublished: boolean
      authorId: string
      kategoriId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["berita"]>
    composites: {}
  }

  type BeritaGetPayload<S extends boolean | null | undefined | BeritaDefaultArgs> = $Result.GetResult<Prisma.$BeritaPayload, S>

  type BeritaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeritaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeritaCountAggregateInputType | true
    }

  export interface BeritaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Berita'], meta: { name: 'Berita' } }
    /**
     * Find zero or one Berita that matches the filter.
     * @param {BeritaFindUniqueArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeritaFindUniqueArgs>(args: SelectSubset<T, BeritaFindUniqueArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Berita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeritaFindUniqueOrThrowArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeritaFindUniqueOrThrowArgs>(args: SelectSubset<T, BeritaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaFindFirstArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeritaFindFirstArgs>(args?: SelectSubset<T, BeritaFindFirstArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaFindFirstOrThrowArgs} args - Arguments to find a Berita
     * @example
     * // Get one Berita
     * const berita = await prisma.berita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeritaFindFirstOrThrowArgs>(args?: SelectSubset<T, BeritaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beritas
     * const beritas = await prisma.berita.findMany()
     * 
     * // Get first 10 Beritas
     * const beritas = await prisma.berita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beritaWithIdOnly = await prisma.berita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeritaFindManyArgs>(args?: SelectSubset<T, BeritaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Berita.
     * @param {BeritaCreateArgs} args - Arguments to create a Berita.
     * @example
     * // Create one Berita
     * const Berita = await prisma.berita.create({
     *   data: {
     *     // ... data to create a Berita
     *   }
     * })
     * 
     */
    create<T extends BeritaCreateArgs>(args: SelectSubset<T, BeritaCreateArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beritas.
     * @param {BeritaCreateManyArgs} args - Arguments to create many Beritas.
     * @example
     * // Create many Beritas
     * const berita = await prisma.berita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeritaCreateManyArgs>(args?: SelectSubset<T, BeritaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Berita.
     * @param {BeritaDeleteArgs} args - Arguments to delete one Berita.
     * @example
     * // Delete one Berita
     * const Berita = await prisma.berita.delete({
     *   where: {
     *     // ... filter to delete one Berita
     *   }
     * })
     * 
     */
    delete<T extends BeritaDeleteArgs>(args: SelectSubset<T, BeritaDeleteArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Berita.
     * @param {BeritaUpdateArgs} args - Arguments to update one Berita.
     * @example
     * // Update one Berita
     * const berita = await prisma.berita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeritaUpdateArgs>(args: SelectSubset<T, BeritaUpdateArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beritas.
     * @param {BeritaDeleteManyArgs} args - Arguments to filter Beritas to delete.
     * @example
     * // Delete a few Beritas
     * const { count } = await prisma.berita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeritaDeleteManyArgs>(args?: SelectSubset<T, BeritaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beritas
     * const berita = await prisma.berita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeritaUpdateManyArgs>(args: SelectSubset<T, BeritaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Berita.
     * @param {BeritaUpsertArgs} args - Arguments to update or create a Berita.
     * @example
     * // Update or create a Berita
     * const berita = await prisma.berita.upsert({
     *   create: {
     *     // ... data to create a Berita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Berita we want to update
     *   }
     * })
     */
    upsert<T extends BeritaUpsertArgs>(args: SelectSubset<T, BeritaUpsertArgs<ExtArgs>>): Prisma__BeritaClient<$Result.GetResult<Prisma.$BeritaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaCountArgs} args - Arguments to filter Beritas to count.
     * @example
     * // Count the number of Beritas
     * const count = await prisma.berita.count({
     *   where: {
     *     // ... the filter for the Beritas we want to count
     *   }
     * })
    **/
    count<T extends BeritaCountArgs>(
      args?: Subset<T, BeritaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeritaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Berita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BeritaAggregateArgs>(args: Subset<T, BeritaAggregateArgs>): Prisma.PrismaPromise<GetBeritaAggregateType<T>>

    /**
     * Group by Berita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeritaGroupByArgs} args - Group by arguments.
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
      T extends BeritaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeritaGroupByArgs['orderBy'] }
        : { orderBy?: BeritaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BeritaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeritaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Berita model
   */
  readonly fields: BeritaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Berita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeritaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kategori<T extends Berita$kategoriArgs<ExtArgs> = {}>(args?: Subset<T, Berita$kategoriArgs<ExtArgs>>): Prisma__KategoriBeritaClient<$Result.GetResult<Prisma.$KategoriBeritaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Berita model
   */
  interface BeritaFieldRefs {
    readonly id: FieldRef<"Berita", 'String'>
    readonly judul: FieldRef<"Berita", 'String'>
    readonly slug: FieldRef<"Berita", 'String'>
    readonly konten: FieldRef<"Berita", 'String'>
    readonly gambar: FieldRef<"Berita", 'String'>
    readonly isPublished: FieldRef<"Berita", 'Boolean'>
    readonly authorId: FieldRef<"Berita", 'String'>
    readonly kategoriId: FieldRef<"Berita", 'String'>
    readonly createdAt: FieldRef<"Berita", 'DateTime'>
    readonly updatedAt: FieldRef<"Berita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Berita findUnique
   */
  export type BeritaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita findUniqueOrThrow
   */
  export type BeritaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita findFirst
   */
  export type BeritaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beritas.
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beritas.
     */
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * Berita findFirstOrThrow
   */
  export type BeritaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Berita to fetch.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beritas.
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beritas.
     */
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * Berita findMany
   */
  export type BeritaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter, which Beritas to fetch.
     */
    where?: BeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beritas to fetch.
     */
    orderBy?: BeritaOrderByWithRelationInput | BeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beritas.
     */
    cursor?: BeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beritas.
     */
    distinct?: BeritaScalarFieldEnum | BeritaScalarFieldEnum[]
  }

  /**
   * Berita create
   */
  export type BeritaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * The data needed to create a Berita.
     */
    data: XOR<BeritaCreateInput, BeritaUncheckedCreateInput>
  }

  /**
   * Berita createMany
   */
  export type BeritaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beritas.
     */
    data: BeritaCreateManyInput | BeritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Berita update
   */
  export type BeritaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * The data needed to update a Berita.
     */
    data: XOR<BeritaUpdateInput, BeritaUncheckedUpdateInput>
    /**
     * Choose, which Berita to update.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita updateMany
   */
  export type BeritaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beritas.
     */
    data: XOR<BeritaUpdateManyMutationInput, BeritaUncheckedUpdateManyInput>
    /**
     * Filter which Beritas to update
     */
    where?: BeritaWhereInput
    /**
     * Limit how many Beritas to update.
     */
    limit?: number
  }

  /**
   * Berita upsert
   */
  export type BeritaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * The filter to search for the Berita to update in case it exists.
     */
    where: BeritaWhereUniqueInput
    /**
     * In case the Berita found by the `where` argument doesn't exist, create a new Berita with this data.
     */
    create: XOR<BeritaCreateInput, BeritaUncheckedCreateInput>
    /**
     * In case the Berita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeritaUpdateInput, BeritaUncheckedUpdateInput>
  }

  /**
   * Berita delete
   */
  export type BeritaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
    /**
     * Filter which Berita to delete.
     */
    where: BeritaWhereUniqueInput
  }

  /**
   * Berita deleteMany
   */
  export type BeritaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beritas to delete
     */
    where?: BeritaWhereInput
    /**
     * Limit how many Beritas to delete.
     */
    limit?: number
  }

  /**
   * Berita.kategori
   */
  export type Berita$kategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriBerita
     */
    select?: KategoriBeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KategoriBerita
     */
    omit?: KategoriBeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriBeritaInclude<ExtArgs> | null
    where?: KategoriBeritaWhereInput
  }

  /**
   * Berita without action
   */
  export type BeritaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Berita
     */
    select?: BeritaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Berita
     */
    omit?: BeritaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeritaInclude<ExtArgs> | null
  }


  /**
   * Model Pengumuman
   */

  export type AggregatePengumuman = {
    _count: PengumumanCountAggregateOutputType | null
    _min: PengumumanMinAggregateOutputType | null
    _max: PengumumanMaxAggregateOutputType | null
  }

  export type PengumumanMinAggregateOutputType = {
    id: string | null
    judul: string | null
    slug: string | null
    konten: string | null
    fileUrl: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PengumumanMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    slug: string | null
    konten: string | null
    fileUrl: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PengumumanCountAggregateOutputType = {
    id: number
    judul: number
    slug: number
    konten: number
    fileUrl: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PengumumanMinAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    konten?: true
    fileUrl?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PengumumanMaxAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    konten?: true
    fileUrl?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PengumumanCountAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    konten?: true
    fileUrl?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PengumumanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengumuman to aggregate.
     */
    where?: PengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengumumen to fetch.
     */
    orderBy?: PengumumanOrderByWithRelationInput | PengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pengumumen
    **/
    _count?: true | PengumumanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengumumanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengumumanMaxAggregateInputType
  }

  export type GetPengumumanAggregateType<T extends PengumumanAggregateArgs> = {
        [P in keyof T & keyof AggregatePengumuman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengumuman[P]>
      : GetScalarType<T[P], AggregatePengumuman[P]>
  }




  export type PengumumanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengumumanWhereInput
    orderBy?: PengumumanOrderByWithAggregationInput | PengumumanOrderByWithAggregationInput[]
    by: PengumumanScalarFieldEnum[] | PengumumanScalarFieldEnum
    having?: PengumumanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengumumanCountAggregateInputType | true
    _min?: PengumumanMinAggregateInputType
    _max?: PengumumanMaxAggregateInputType
  }

  export type PengumumanGroupByOutputType = {
    id: string
    judul: string
    slug: string
    konten: string
    fileUrl: string | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: PengumumanCountAggregateOutputType | null
    _min: PengumumanMinAggregateOutputType | null
    _max: PengumumanMaxAggregateOutputType | null
  }

  type GetPengumumanGroupByPayload<T extends PengumumanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PengumumanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengumumanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengumumanGroupByOutputType[P]>
            : GetScalarType<T[P], PengumumanGroupByOutputType[P]>
        }
      >
    >


  export type PengumumanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    slug?: boolean
    konten?: boolean
    fileUrl?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pengumuman"]>



  export type PengumumanSelectScalar = {
    id?: boolean
    judul?: boolean
    slug?: boolean
    konten?: boolean
    fileUrl?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PengumumanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "slug" | "konten" | "fileUrl" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["pengumuman"]>

  export type $PengumumanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pengumuman"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      slug: string
      konten: string
      fileUrl: string | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pengumuman"]>
    composites: {}
  }

  type PengumumanGetPayload<S extends boolean | null | undefined | PengumumanDefaultArgs> = $Result.GetResult<Prisma.$PengumumanPayload, S>

  type PengumumanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PengumumanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PengumumanCountAggregateInputType | true
    }

  export interface PengumumanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pengumuman'], meta: { name: 'Pengumuman' } }
    /**
     * Find zero or one Pengumuman that matches the filter.
     * @param {PengumumanFindUniqueArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PengumumanFindUniqueArgs>(args: SelectSubset<T, PengumumanFindUniqueArgs<ExtArgs>>): Prisma__PengumumanClient<$Result.GetResult<Prisma.$PengumumanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengumuman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PengumumanFindUniqueOrThrowArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PengumumanFindUniqueOrThrowArgs>(args: SelectSubset<T, PengumumanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PengumumanClient<$Result.GetResult<Prisma.$PengumumanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengumuman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumumanFindFirstArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PengumumanFindFirstArgs>(args?: SelectSubset<T, PengumumanFindFirstArgs<ExtArgs>>): Prisma__PengumumanClient<$Result.GetResult<Prisma.$PengumumanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengumuman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumumanFindFirstOrThrowArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PengumumanFindFirstOrThrowArgs>(args?: SelectSubset<T, PengumumanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PengumumanClient<$Result.GetResult<Prisma.$PengumumanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pengumumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumumanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pengumumen
     * const pengumumen = await prisma.pengumuman.findMany()
     * 
     * // Get first 10 Pengumumen
     * const pengumumen = await prisma.pengumuman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pengumumanWithIdOnly = await prisma.pengumuman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PengumumanFindManyArgs>(args?: SelectSubset<T, PengumumanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengumumanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengumuman.
     * @param {PengumumanCreateArgs} args - Arguments to create a Pengumuman.
     * @example
     * // Create one Pengumuman
     * const Pengumuman = await prisma.pengumuman.create({
     *   data: {
     *     // ... data to create a Pengumuman
     *   }
     * })
     * 
     */
    create<T extends PengumumanCreateArgs>(args: SelectSubset<T, PengumumanCreateArgs<ExtArgs>>): Prisma__PengumumanClient<$Result.GetResult<Prisma.$PengumumanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pengumumen.
     * @param {PengumumanCreateManyArgs} args - Arguments to create many Pengumumen.
     * @example
     * // Create many Pengumumen
     * const pengumuman = await prisma.pengumuman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PengumumanCreateManyArgs>(args?: SelectSubset<T, PengumumanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pengumuman.
     * @param {PengumumanDeleteArgs} args - Arguments to delete one Pengumuman.
     * @example
     * // Delete one Pengumuman
     * const Pengumuman = await prisma.pengumuman.delete({
     *   where: {
     *     // ... filter to delete one Pengumuman
     *   }
     * })
     * 
     */
    delete<T extends PengumumanDeleteArgs>(args: SelectSubset<T, PengumumanDeleteArgs<ExtArgs>>): Prisma__PengumumanClient<$Result.GetResult<Prisma.$PengumumanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengumuman.
     * @param {PengumumanUpdateArgs} args - Arguments to update one Pengumuman.
     * @example
     * // Update one Pengumuman
     * const pengumuman = await prisma.pengumuman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PengumumanUpdateArgs>(args: SelectSubset<T, PengumumanUpdateArgs<ExtArgs>>): Prisma__PengumumanClient<$Result.GetResult<Prisma.$PengumumanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pengumumen.
     * @param {PengumumanDeleteManyArgs} args - Arguments to filter Pengumumen to delete.
     * @example
     * // Delete a few Pengumumen
     * const { count } = await prisma.pengumuman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PengumumanDeleteManyArgs>(args?: SelectSubset<T, PengumumanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengumumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumumanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pengumumen
     * const pengumuman = await prisma.pengumuman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PengumumanUpdateManyArgs>(args: SelectSubset<T, PengumumanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pengumuman.
     * @param {PengumumanUpsertArgs} args - Arguments to update or create a Pengumuman.
     * @example
     * // Update or create a Pengumuman
     * const pengumuman = await prisma.pengumuman.upsert({
     *   create: {
     *     // ... data to create a Pengumuman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengumuman we want to update
     *   }
     * })
     */
    upsert<T extends PengumumanUpsertArgs>(args: SelectSubset<T, PengumumanUpsertArgs<ExtArgs>>): Prisma__PengumumanClient<$Result.GetResult<Prisma.$PengumumanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pengumumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumumanCountArgs} args - Arguments to filter Pengumumen to count.
     * @example
     * // Count the number of Pengumumen
     * const count = await prisma.pengumuman.count({
     *   where: {
     *     // ... the filter for the Pengumumen we want to count
     *   }
     * })
    **/
    count<T extends PengumumanCountArgs>(
      args?: Subset<T, PengumumanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengumumanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengumuman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumumanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PengumumanAggregateArgs>(args: Subset<T, PengumumanAggregateArgs>): Prisma.PrismaPromise<GetPengumumanAggregateType<T>>

    /**
     * Group by Pengumuman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumumanGroupByArgs} args - Group by arguments.
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
      T extends PengumumanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PengumumanGroupByArgs['orderBy'] }
        : { orderBy?: PengumumanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PengumumanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengumumanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pengumuman model
   */
  readonly fields: PengumumanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pengumuman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PengumumanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Pengumuman model
   */
  interface PengumumanFieldRefs {
    readonly id: FieldRef<"Pengumuman", 'String'>
    readonly judul: FieldRef<"Pengumuman", 'String'>
    readonly slug: FieldRef<"Pengumuman", 'String'>
    readonly konten: FieldRef<"Pengumuman", 'String'>
    readonly fileUrl: FieldRef<"Pengumuman", 'String'>
    readonly isPublished: FieldRef<"Pengumuman", 'Boolean'>
    readonly createdAt: FieldRef<"Pengumuman", 'DateTime'>
    readonly updatedAt: FieldRef<"Pengumuman", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pengumuman findUnique
   */
  export type PengumumanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
    /**
     * Filter, which Pengumuman to fetch.
     */
    where: PengumumanWhereUniqueInput
  }

  /**
   * Pengumuman findUniqueOrThrow
   */
  export type PengumumanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
    /**
     * Filter, which Pengumuman to fetch.
     */
    where: PengumumanWhereUniqueInput
  }

  /**
   * Pengumuman findFirst
   */
  export type PengumumanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
    /**
     * Filter, which Pengumuman to fetch.
     */
    where?: PengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengumumen to fetch.
     */
    orderBy?: PengumumanOrderByWithRelationInput | PengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengumumen.
     */
    cursor?: PengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengumumen.
     */
    distinct?: PengumumanScalarFieldEnum | PengumumanScalarFieldEnum[]
  }

  /**
   * Pengumuman findFirstOrThrow
   */
  export type PengumumanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
    /**
     * Filter, which Pengumuman to fetch.
     */
    where?: PengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengumumen to fetch.
     */
    orderBy?: PengumumanOrderByWithRelationInput | PengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengumumen.
     */
    cursor?: PengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengumumen.
     */
    distinct?: PengumumanScalarFieldEnum | PengumumanScalarFieldEnum[]
  }

  /**
   * Pengumuman findMany
   */
  export type PengumumanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
    /**
     * Filter, which Pengumumen to fetch.
     */
    where?: PengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengumumen to fetch.
     */
    orderBy?: PengumumanOrderByWithRelationInput | PengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pengumumen.
     */
    cursor?: PengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengumumen.
     */
    distinct?: PengumumanScalarFieldEnum | PengumumanScalarFieldEnum[]
  }

  /**
   * Pengumuman create
   */
  export type PengumumanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
    /**
     * The data needed to create a Pengumuman.
     */
    data: XOR<PengumumanCreateInput, PengumumanUncheckedCreateInput>
  }

  /**
   * Pengumuman createMany
   */
  export type PengumumanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pengumumen.
     */
    data: PengumumanCreateManyInput | PengumumanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pengumuman update
   */
  export type PengumumanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
    /**
     * The data needed to update a Pengumuman.
     */
    data: XOR<PengumumanUpdateInput, PengumumanUncheckedUpdateInput>
    /**
     * Choose, which Pengumuman to update.
     */
    where: PengumumanWhereUniqueInput
  }

  /**
   * Pengumuman updateMany
   */
  export type PengumumanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pengumumen.
     */
    data: XOR<PengumumanUpdateManyMutationInput, PengumumanUncheckedUpdateManyInput>
    /**
     * Filter which Pengumumen to update
     */
    where?: PengumumanWhereInput
    /**
     * Limit how many Pengumumen to update.
     */
    limit?: number
  }

  /**
   * Pengumuman upsert
   */
  export type PengumumanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
    /**
     * The filter to search for the Pengumuman to update in case it exists.
     */
    where: PengumumanWhereUniqueInput
    /**
     * In case the Pengumuman found by the `where` argument doesn't exist, create a new Pengumuman with this data.
     */
    create: XOR<PengumumanCreateInput, PengumumanUncheckedCreateInput>
    /**
     * In case the Pengumuman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PengumumanUpdateInput, PengumumanUncheckedUpdateInput>
  }

  /**
   * Pengumuman delete
   */
  export type PengumumanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
    /**
     * Filter which Pengumuman to delete.
     */
    where: PengumumanWhereUniqueInput
  }

  /**
   * Pengumuman deleteMany
   */
  export type PengumumanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengumumen to delete
     */
    where?: PengumumanWhereInput
    /**
     * Limit how many Pengumumen to delete.
     */
    limit?: number
  }

  /**
   * Pengumuman without action
   */
  export type PengumumanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengumuman
     */
    select?: PengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengumuman
     */
    omit?: PengumumanOmit<ExtArgs> | null
  }


  /**
   * Model Galeri
   */

  export type AggregateGaleri = {
    _count: GaleriCountAggregateOutputType | null
    _min: GaleriMinAggregateOutputType | null
    _max: GaleriMaxAggregateOutputType | null
  }

  export type GaleriMinAggregateOutputType = {
    id: string | null
    judul: string | null
    deskripsi: string | null
    imageUrl: string | null
    kategori: string | null
    createdAt: Date | null
  }

  export type GaleriMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    deskripsi: string | null
    imageUrl: string | null
    kategori: string | null
    createdAt: Date | null
  }

  export type GaleriCountAggregateOutputType = {
    id: number
    judul: number
    deskripsi: number
    imageUrl: number
    kategori: number
    createdAt: number
    _all: number
  }


  export type GaleriMinAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    imageUrl?: true
    kategori?: true
    createdAt?: true
  }

  export type GaleriMaxAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    imageUrl?: true
    kategori?: true
    createdAt?: true
  }

  export type GaleriCountAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    imageUrl?: true
    kategori?: true
    createdAt?: true
    _all?: true
  }

  export type GaleriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeri to aggregate.
     */
    where?: GaleriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeris to fetch.
     */
    orderBy?: GaleriOrderByWithRelationInput | GaleriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GaleriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galeris
    **/
    _count?: true | GaleriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GaleriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GaleriMaxAggregateInputType
  }

  export type GetGaleriAggregateType<T extends GaleriAggregateArgs> = {
        [P in keyof T & keyof AggregateGaleri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGaleri[P]>
      : GetScalarType<T[P], AggregateGaleri[P]>
  }




  export type GaleriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GaleriWhereInput
    orderBy?: GaleriOrderByWithAggregationInput | GaleriOrderByWithAggregationInput[]
    by: GaleriScalarFieldEnum[] | GaleriScalarFieldEnum
    having?: GaleriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GaleriCountAggregateInputType | true
    _min?: GaleriMinAggregateInputType
    _max?: GaleriMaxAggregateInputType
  }

  export type GaleriGroupByOutputType = {
    id: string
    judul: string
    deskripsi: string | null
    imageUrl: string
    kategori: string | null
    createdAt: Date
    _count: GaleriCountAggregateOutputType | null
    _min: GaleriMinAggregateOutputType | null
    _max: GaleriMaxAggregateOutputType | null
  }

  type GetGaleriGroupByPayload<T extends GaleriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GaleriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GaleriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GaleriGroupByOutputType[P]>
            : GetScalarType<T[P], GaleriGroupByOutputType[P]>
        }
      >
    >


  export type GaleriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    imageUrl?: boolean
    kategori?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galeri"]>



  export type GaleriSelectScalar = {
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    imageUrl?: boolean
    kategori?: boolean
    createdAt?: boolean
  }

  export type GaleriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "deskripsi" | "imageUrl" | "kategori" | "createdAt", ExtArgs["result"]["galeri"]>

  export type $GaleriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Galeri"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      deskripsi: string | null
      imageUrl: string
      kategori: string | null
      createdAt: Date
    }, ExtArgs["result"]["galeri"]>
    composites: {}
  }

  type GaleriGetPayload<S extends boolean | null | undefined | GaleriDefaultArgs> = $Result.GetResult<Prisma.$GaleriPayload, S>

  type GaleriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GaleriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GaleriCountAggregateInputType | true
    }

  export interface GaleriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Galeri'], meta: { name: 'Galeri' } }
    /**
     * Find zero or one Galeri that matches the filter.
     * @param {GaleriFindUniqueArgs} args - Arguments to find a Galeri
     * @example
     * // Get one Galeri
     * const galeri = await prisma.galeri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GaleriFindUniqueArgs>(args: SelectSubset<T, GaleriFindUniqueArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Galeri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GaleriFindUniqueOrThrowArgs} args - Arguments to find a Galeri
     * @example
     * // Get one Galeri
     * const galeri = await prisma.galeri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GaleriFindUniqueOrThrowArgs>(args: SelectSubset<T, GaleriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galeri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriFindFirstArgs} args - Arguments to find a Galeri
     * @example
     * // Get one Galeri
     * const galeri = await prisma.galeri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GaleriFindFirstArgs>(args?: SelectSubset<T, GaleriFindFirstArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galeri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriFindFirstOrThrowArgs} args - Arguments to find a Galeri
     * @example
     * // Get one Galeri
     * const galeri = await prisma.galeri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GaleriFindFirstOrThrowArgs>(args?: SelectSubset<T, GaleriFindFirstOrThrowArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galeris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galeris
     * const galeris = await prisma.galeri.findMany()
     * 
     * // Get first 10 Galeris
     * const galeris = await prisma.galeri.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galeriWithIdOnly = await prisma.galeri.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GaleriFindManyArgs>(args?: SelectSubset<T, GaleriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Galeri.
     * @param {GaleriCreateArgs} args - Arguments to create a Galeri.
     * @example
     * // Create one Galeri
     * const Galeri = await prisma.galeri.create({
     *   data: {
     *     // ... data to create a Galeri
     *   }
     * })
     * 
     */
    create<T extends GaleriCreateArgs>(args: SelectSubset<T, GaleriCreateArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galeris.
     * @param {GaleriCreateManyArgs} args - Arguments to create many Galeris.
     * @example
     * // Create many Galeris
     * const galeri = await prisma.galeri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GaleriCreateManyArgs>(args?: SelectSubset<T, GaleriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Galeri.
     * @param {GaleriDeleteArgs} args - Arguments to delete one Galeri.
     * @example
     * // Delete one Galeri
     * const Galeri = await prisma.galeri.delete({
     *   where: {
     *     // ... filter to delete one Galeri
     *   }
     * })
     * 
     */
    delete<T extends GaleriDeleteArgs>(args: SelectSubset<T, GaleriDeleteArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Galeri.
     * @param {GaleriUpdateArgs} args - Arguments to update one Galeri.
     * @example
     * // Update one Galeri
     * const galeri = await prisma.galeri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GaleriUpdateArgs>(args: SelectSubset<T, GaleriUpdateArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galeris.
     * @param {GaleriDeleteManyArgs} args - Arguments to filter Galeris to delete.
     * @example
     * // Delete a few Galeris
     * const { count } = await prisma.galeri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GaleriDeleteManyArgs>(args?: SelectSubset<T, GaleriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galeris
     * const galeri = await prisma.galeri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GaleriUpdateManyArgs>(args: SelectSubset<T, GaleriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Galeri.
     * @param {GaleriUpsertArgs} args - Arguments to update or create a Galeri.
     * @example
     * // Update or create a Galeri
     * const galeri = await prisma.galeri.upsert({
     *   create: {
     *     // ... data to create a Galeri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Galeri we want to update
     *   }
     * })
     */
    upsert<T extends GaleriUpsertArgs>(args: SelectSubset<T, GaleriUpsertArgs<ExtArgs>>): Prisma__GaleriClient<$Result.GetResult<Prisma.$GaleriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galeris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriCountArgs} args - Arguments to filter Galeris to count.
     * @example
     * // Count the number of Galeris
     * const count = await prisma.galeri.count({
     *   where: {
     *     // ... the filter for the Galeris we want to count
     *   }
     * })
    **/
    count<T extends GaleriCountArgs>(
      args?: Subset<T, GaleriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GaleriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Galeri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GaleriAggregateArgs>(args: Subset<T, GaleriAggregateArgs>): Prisma.PrismaPromise<GetGaleriAggregateType<T>>

    /**
     * Group by Galeri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriGroupByArgs} args - Group by arguments.
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
      T extends GaleriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GaleriGroupByArgs['orderBy'] }
        : { orderBy?: GaleriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GaleriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGaleriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Galeri model
   */
  readonly fields: GaleriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Galeri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GaleriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Galeri model
   */
  interface GaleriFieldRefs {
    readonly id: FieldRef<"Galeri", 'String'>
    readonly judul: FieldRef<"Galeri", 'String'>
    readonly deskripsi: FieldRef<"Galeri", 'String'>
    readonly imageUrl: FieldRef<"Galeri", 'String'>
    readonly kategori: FieldRef<"Galeri", 'String'>
    readonly createdAt: FieldRef<"Galeri", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Galeri findUnique
   */
  export type GaleriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeri to fetch.
     */
    where: GaleriWhereUniqueInput
  }

  /**
   * Galeri findUniqueOrThrow
   */
  export type GaleriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeri to fetch.
     */
    where: GaleriWhereUniqueInput
  }

  /**
   * Galeri findFirst
   */
  export type GaleriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeri to fetch.
     */
    where?: GaleriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeris to fetch.
     */
    orderBy?: GaleriOrderByWithRelationInput | GaleriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeris.
     */
    cursor?: GaleriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeris.
     */
    distinct?: GaleriScalarFieldEnum | GaleriScalarFieldEnum[]
  }

  /**
   * Galeri findFirstOrThrow
   */
  export type GaleriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeri to fetch.
     */
    where?: GaleriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeris to fetch.
     */
    orderBy?: GaleriOrderByWithRelationInput | GaleriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeris.
     */
    cursor?: GaleriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeris.
     */
    distinct?: GaleriScalarFieldEnum | GaleriScalarFieldEnum[]
  }

  /**
   * Galeri findMany
   */
  export type GaleriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter, which Galeris to fetch.
     */
    where?: GaleriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeris to fetch.
     */
    orderBy?: GaleriOrderByWithRelationInput | GaleriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galeris.
     */
    cursor?: GaleriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeris.
     */
    distinct?: GaleriScalarFieldEnum | GaleriScalarFieldEnum[]
  }

  /**
   * Galeri create
   */
  export type GaleriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * The data needed to create a Galeri.
     */
    data: XOR<GaleriCreateInput, GaleriUncheckedCreateInput>
  }

  /**
   * Galeri createMany
   */
  export type GaleriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galeris.
     */
    data: GaleriCreateManyInput | GaleriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galeri update
   */
  export type GaleriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * The data needed to update a Galeri.
     */
    data: XOR<GaleriUpdateInput, GaleriUncheckedUpdateInput>
    /**
     * Choose, which Galeri to update.
     */
    where: GaleriWhereUniqueInput
  }

  /**
   * Galeri updateMany
   */
  export type GaleriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galeris.
     */
    data: XOR<GaleriUpdateManyMutationInput, GaleriUncheckedUpdateManyInput>
    /**
     * Filter which Galeris to update
     */
    where?: GaleriWhereInput
    /**
     * Limit how many Galeris to update.
     */
    limit?: number
  }

  /**
   * Galeri upsert
   */
  export type GaleriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * The filter to search for the Galeri to update in case it exists.
     */
    where: GaleriWhereUniqueInput
    /**
     * In case the Galeri found by the `where` argument doesn't exist, create a new Galeri with this data.
     */
    create: XOR<GaleriCreateInput, GaleriUncheckedCreateInput>
    /**
     * In case the Galeri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GaleriUpdateInput, GaleriUncheckedUpdateInput>
  }

  /**
   * Galeri delete
   */
  export type GaleriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
    /**
     * Filter which Galeri to delete.
     */
    where: GaleriWhereUniqueInput
  }

  /**
   * Galeri deleteMany
   */
  export type GaleriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeris to delete
     */
    where?: GaleriWhereInput
    /**
     * Limit how many Galeris to delete.
     */
    limit?: number
  }

  /**
   * Galeri without action
   */
  export type GaleriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeri
     */
    select?: GaleriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeri
     */
    omit?: GaleriOmit<ExtArgs> | null
  }


  /**
   * Model PesanKontak
   */

  export type AggregatePesanKontak = {
    _count: PesanKontakCountAggregateOutputType | null
    _min: PesanKontakMinAggregateOutputType | null
    _max: PesanKontakMaxAggregateOutputType | null
  }

  export type PesanKontakMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    subjek: string | null
    pesan: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type PesanKontakMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    subjek: string | null
    pesan: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type PesanKontakCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    subjek: number
    pesan: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type PesanKontakMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    subjek?: true
    pesan?: true
    isRead?: true
    createdAt?: true
  }

  export type PesanKontakMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    subjek?: true
    pesan?: true
    isRead?: true
    createdAt?: true
  }

  export type PesanKontakCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    subjek?: true
    pesan?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type PesanKontakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PesanKontak to aggregate.
     */
    where?: PesanKontakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesanKontaks to fetch.
     */
    orderBy?: PesanKontakOrderByWithRelationInput | PesanKontakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesanKontakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesanKontaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesanKontaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PesanKontaks
    **/
    _count?: true | PesanKontakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesanKontakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesanKontakMaxAggregateInputType
  }

  export type GetPesanKontakAggregateType<T extends PesanKontakAggregateArgs> = {
        [P in keyof T & keyof AggregatePesanKontak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesanKontak[P]>
      : GetScalarType<T[P], AggregatePesanKontak[P]>
  }




  export type PesanKontakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesanKontakWhereInput
    orderBy?: PesanKontakOrderByWithAggregationInput | PesanKontakOrderByWithAggregationInput[]
    by: PesanKontakScalarFieldEnum[] | PesanKontakScalarFieldEnum
    having?: PesanKontakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesanKontakCountAggregateInputType | true
    _min?: PesanKontakMinAggregateInputType
    _max?: PesanKontakMaxAggregateInputType
  }

  export type PesanKontakGroupByOutputType = {
    id: string
    nama: string
    email: string
    subjek: string
    pesan: string
    isRead: boolean
    createdAt: Date
    _count: PesanKontakCountAggregateOutputType | null
    _min: PesanKontakMinAggregateOutputType | null
    _max: PesanKontakMaxAggregateOutputType | null
  }

  type GetPesanKontakGroupByPayload<T extends PesanKontakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesanKontakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesanKontakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesanKontakGroupByOutputType[P]>
            : GetScalarType<T[P], PesanKontakGroupByOutputType[P]>
        }
      >
    >


  export type PesanKontakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    subjek?: boolean
    pesan?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pesanKontak"]>



  export type PesanKontakSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    subjek?: boolean
    pesan?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type PesanKontakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "subjek" | "pesan" | "isRead" | "createdAt", ExtArgs["result"]["pesanKontak"]>

  export type $PesanKontakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PesanKontak"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      subjek: string
      pesan: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["pesanKontak"]>
    composites: {}
  }

  type PesanKontakGetPayload<S extends boolean | null | undefined | PesanKontakDefaultArgs> = $Result.GetResult<Prisma.$PesanKontakPayload, S>

  type PesanKontakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PesanKontakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesanKontakCountAggregateInputType | true
    }

  export interface PesanKontakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PesanKontak'], meta: { name: 'PesanKontak' } }
    /**
     * Find zero or one PesanKontak that matches the filter.
     * @param {PesanKontakFindUniqueArgs} args - Arguments to find a PesanKontak
     * @example
     * // Get one PesanKontak
     * const pesanKontak = await prisma.pesanKontak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesanKontakFindUniqueArgs>(args: SelectSubset<T, PesanKontakFindUniqueArgs<ExtArgs>>): Prisma__PesanKontakClient<$Result.GetResult<Prisma.$PesanKontakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PesanKontak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesanKontakFindUniqueOrThrowArgs} args - Arguments to find a PesanKontak
     * @example
     * // Get one PesanKontak
     * const pesanKontak = await prisma.pesanKontak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesanKontakFindUniqueOrThrowArgs>(args: SelectSubset<T, PesanKontakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PesanKontakClient<$Result.GetResult<Prisma.$PesanKontakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PesanKontak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesanKontakFindFirstArgs} args - Arguments to find a PesanKontak
     * @example
     * // Get one PesanKontak
     * const pesanKontak = await prisma.pesanKontak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesanKontakFindFirstArgs>(args?: SelectSubset<T, PesanKontakFindFirstArgs<ExtArgs>>): Prisma__PesanKontakClient<$Result.GetResult<Prisma.$PesanKontakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PesanKontak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesanKontakFindFirstOrThrowArgs} args - Arguments to find a PesanKontak
     * @example
     * // Get one PesanKontak
     * const pesanKontak = await prisma.pesanKontak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesanKontakFindFirstOrThrowArgs>(args?: SelectSubset<T, PesanKontakFindFirstOrThrowArgs<ExtArgs>>): Prisma__PesanKontakClient<$Result.GetResult<Prisma.$PesanKontakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PesanKontaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesanKontakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PesanKontaks
     * const pesanKontaks = await prisma.pesanKontak.findMany()
     * 
     * // Get first 10 PesanKontaks
     * const pesanKontaks = await prisma.pesanKontak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesanKontakWithIdOnly = await prisma.pesanKontak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PesanKontakFindManyArgs>(args?: SelectSubset<T, PesanKontakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesanKontakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PesanKontak.
     * @param {PesanKontakCreateArgs} args - Arguments to create a PesanKontak.
     * @example
     * // Create one PesanKontak
     * const PesanKontak = await prisma.pesanKontak.create({
     *   data: {
     *     // ... data to create a PesanKontak
     *   }
     * })
     * 
     */
    create<T extends PesanKontakCreateArgs>(args: SelectSubset<T, PesanKontakCreateArgs<ExtArgs>>): Prisma__PesanKontakClient<$Result.GetResult<Prisma.$PesanKontakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PesanKontaks.
     * @param {PesanKontakCreateManyArgs} args - Arguments to create many PesanKontaks.
     * @example
     * // Create many PesanKontaks
     * const pesanKontak = await prisma.pesanKontak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PesanKontakCreateManyArgs>(args?: SelectSubset<T, PesanKontakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PesanKontak.
     * @param {PesanKontakDeleteArgs} args - Arguments to delete one PesanKontak.
     * @example
     * // Delete one PesanKontak
     * const PesanKontak = await prisma.pesanKontak.delete({
     *   where: {
     *     // ... filter to delete one PesanKontak
     *   }
     * })
     * 
     */
    delete<T extends PesanKontakDeleteArgs>(args: SelectSubset<T, PesanKontakDeleteArgs<ExtArgs>>): Prisma__PesanKontakClient<$Result.GetResult<Prisma.$PesanKontakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PesanKontak.
     * @param {PesanKontakUpdateArgs} args - Arguments to update one PesanKontak.
     * @example
     * // Update one PesanKontak
     * const pesanKontak = await prisma.pesanKontak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PesanKontakUpdateArgs>(args: SelectSubset<T, PesanKontakUpdateArgs<ExtArgs>>): Prisma__PesanKontakClient<$Result.GetResult<Prisma.$PesanKontakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PesanKontaks.
     * @param {PesanKontakDeleteManyArgs} args - Arguments to filter PesanKontaks to delete.
     * @example
     * // Delete a few PesanKontaks
     * const { count } = await prisma.pesanKontak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PesanKontakDeleteManyArgs>(args?: SelectSubset<T, PesanKontakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PesanKontaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesanKontakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PesanKontaks
     * const pesanKontak = await prisma.pesanKontak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PesanKontakUpdateManyArgs>(args: SelectSubset<T, PesanKontakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PesanKontak.
     * @param {PesanKontakUpsertArgs} args - Arguments to update or create a PesanKontak.
     * @example
     * // Update or create a PesanKontak
     * const pesanKontak = await prisma.pesanKontak.upsert({
     *   create: {
     *     // ... data to create a PesanKontak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PesanKontak we want to update
     *   }
     * })
     */
    upsert<T extends PesanKontakUpsertArgs>(args: SelectSubset<T, PesanKontakUpsertArgs<ExtArgs>>): Prisma__PesanKontakClient<$Result.GetResult<Prisma.$PesanKontakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PesanKontaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesanKontakCountArgs} args - Arguments to filter PesanKontaks to count.
     * @example
     * // Count the number of PesanKontaks
     * const count = await prisma.pesanKontak.count({
     *   where: {
     *     // ... the filter for the PesanKontaks we want to count
     *   }
     * })
    **/
    count<T extends PesanKontakCountArgs>(
      args?: Subset<T, PesanKontakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesanKontakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PesanKontak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesanKontakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesanKontakAggregateArgs>(args: Subset<T, PesanKontakAggregateArgs>): Prisma.PrismaPromise<GetPesanKontakAggregateType<T>>

    /**
     * Group by PesanKontak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesanKontakGroupByArgs} args - Group by arguments.
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
      T extends PesanKontakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesanKontakGroupByArgs['orderBy'] }
        : { orderBy?: PesanKontakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PesanKontakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesanKontakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PesanKontak model
   */
  readonly fields: PesanKontakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PesanKontak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PesanKontakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PesanKontak model
   */
  interface PesanKontakFieldRefs {
    readonly id: FieldRef<"PesanKontak", 'String'>
    readonly nama: FieldRef<"PesanKontak", 'String'>
    readonly email: FieldRef<"PesanKontak", 'String'>
    readonly subjek: FieldRef<"PesanKontak", 'String'>
    readonly pesan: FieldRef<"PesanKontak", 'String'>
    readonly isRead: FieldRef<"PesanKontak", 'Boolean'>
    readonly createdAt: FieldRef<"PesanKontak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PesanKontak findUnique
   */
  export type PesanKontakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
    /**
     * Filter, which PesanKontak to fetch.
     */
    where: PesanKontakWhereUniqueInput
  }

  /**
   * PesanKontak findUniqueOrThrow
   */
  export type PesanKontakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
    /**
     * Filter, which PesanKontak to fetch.
     */
    where: PesanKontakWhereUniqueInput
  }

  /**
   * PesanKontak findFirst
   */
  export type PesanKontakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
    /**
     * Filter, which PesanKontak to fetch.
     */
    where?: PesanKontakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesanKontaks to fetch.
     */
    orderBy?: PesanKontakOrderByWithRelationInput | PesanKontakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PesanKontaks.
     */
    cursor?: PesanKontakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesanKontaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesanKontaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PesanKontaks.
     */
    distinct?: PesanKontakScalarFieldEnum | PesanKontakScalarFieldEnum[]
  }

  /**
   * PesanKontak findFirstOrThrow
   */
  export type PesanKontakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
    /**
     * Filter, which PesanKontak to fetch.
     */
    where?: PesanKontakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesanKontaks to fetch.
     */
    orderBy?: PesanKontakOrderByWithRelationInput | PesanKontakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PesanKontaks.
     */
    cursor?: PesanKontakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesanKontaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesanKontaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PesanKontaks.
     */
    distinct?: PesanKontakScalarFieldEnum | PesanKontakScalarFieldEnum[]
  }

  /**
   * PesanKontak findMany
   */
  export type PesanKontakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
    /**
     * Filter, which PesanKontaks to fetch.
     */
    where?: PesanKontakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesanKontaks to fetch.
     */
    orderBy?: PesanKontakOrderByWithRelationInput | PesanKontakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PesanKontaks.
     */
    cursor?: PesanKontakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesanKontaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesanKontaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PesanKontaks.
     */
    distinct?: PesanKontakScalarFieldEnum | PesanKontakScalarFieldEnum[]
  }

  /**
   * PesanKontak create
   */
  export type PesanKontakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
    /**
     * The data needed to create a PesanKontak.
     */
    data: XOR<PesanKontakCreateInput, PesanKontakUncheckedCreateInput>
  }

  /**
   * PesanKontak createMany
   */
  export type PesanKontakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PesanKontaks.
     */
    data: PesanKontakCreateManyInput | PesanKontakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PesanKontak update
   */
  export type PesanKontakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
    /**
     * The data needed to update a PesanKontak.
     */
    data: XOR<PesanKontakUpdateInput, PesanKontakUncheckedUpdateInput>
    /**
     * Choose, which PesanKontak to update.
     */
    where: PesanKontakWhereUniqueInput
  }

  /**
   * PesanKontak updateMany
   */
  export type PesanKontakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PesanKontaks.
     */
    data: XOR<PesanKontakUpdateManyMutationInput, PesanKontakUncheckedUpdateManyInput>
    /**
     * Filter which PesanKontaks to update
     */
    where?: PesanKontakWhereInput
    /**
     * Limit how many PesanKontaks to update.
     */
    limit?: number
  }

  /**
   * PesanKontak upsert
   */
  export type PesanKontakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
    /**
     * The filter to search for the PesanKontak to update in case it exists.
     */
    where: PesanKontakWhereUniqueInput
    /**
     * In case the PesanKontak found by the `where` argument doesn't exist, create a new PesanKontak with this data.
     */
    create: XOR<PesanKontakCreateInput, PesanKontakUncheckedCreateInput>
    /**
     * In case the PesanKontak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesanKontakUpdateInput, PesanKontakUncheckedUpdateInput>
  }

  /**
   * PesanKontak delete
   */
  export type PesanKontakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
    /**
     * Filter which PesanKontak to delete.
     */
    where: PesanKontakWhereUniqueInput
  }

  /**
   * PesanKontak deleteMany
   */
  export type PesanKontakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PesanKontaks to delete
     */
    where?: PesanKontakWhereInput
    /**
     * Limit how many PesanKontaks to delete.
     */
    limit?: number
  }

  /**
   * PesanKontak without action
   */
  export type PesanKontakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesanKontak
     */
    select?: PesanKontakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesanKontak
     */
    omit?: PesanKontakOmit<ExtArgs> | null
  }


  /**
   * Model Agenda
   */

  export type AggregateAgenda = {
    _count: AgendaCountAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  export type AgendaMinAggregateOutputType = {
    id: string | null
    judul: string | null
    slug: string | null
    deskripsi: string | null
    lokasi: string | null
    mulai: Date | null
    selesai: Date | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendaMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    slug: string | null
    deskripsi: string | null
    lokasi: string | null
    mulai: Date | null
    selesai: Date | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendaCountAggregateOutputType = {
    id: number
    judul: number
    slug: number
    deskripsi: number
    lokasi: number
    mulai: number
    selesai: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgendaMinAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    deskripsi?: true
    lokasi?: true
    mulai?: true
    selesai?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendaMaxAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    deskripsi?: true
    lokasi?: true
    mulai?: true
    selesai?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendaCountAggregateInputType = {
    id?: true
    judul?: true
    slug?: true
    deskripsi?: true
    lokasi?: true
    mulai?: true
    selesai?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to aggregate.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agenda
    **/
    _count?: true | AgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaMaxAggregateInputType
  }

  export type GetAgendaAggregateType<T extends AgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda[P]>
      : GetScalarType<T[P], AggregateAgenda[P]>
  }




  export type AgendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithAggregationInput | AgendaOrderByWithAggregationInput[]
    by: AgendaScalarFieldEnum[] | AgendaScalarFieldEnum
    having?: AgendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaCountAggregateInputType | true
    _min?: AgendaMinAggregateInputType
    _max?: AgendaMaxAggregateInputType
  }

  export type AgendaGroupByOutputType = {
    id: string
    judul: string
    slug: string
    deskripsi: string
    lokasi: string | null
    mulai: Date
    selesai: Date | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: AgendaCountAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  type GetAgendaGroupByPayload<T extends AgendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaGroupByOutputType[P]>
        }
      >
    >


  export type AgendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    slug?: boolean
    deskripsi?: boolean
    lokasi?: boolean
    mulai?: boolean
    selesai?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agenda"]>



  export type AgendaSelectScalar = {
    id?: boolean
    judul?: boolean
    slug?: boolean
    deskripsi?: boolean
    lokasi?: boolean
    mulai?: boolean
    selesai?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "slug" | "deskripsi" | "lokasi" | "mulai" | "selesai" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["agenda"]>

  export type $AgendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agenda"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      slug: string
      deskripsi: string
      lokasi: string | null
      mulai: Date
      selesai: Date | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agenda"]>
    composites: {}
  }

  type AgendaGetPayload<S extends boolean | null | undefined | AgendaDefaultArgs> = $Result.GetResult<Prisma.$AgendaPayload, S>

  type AgendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface AgendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agenda'], meta: { name: 'Agenda' } }
    /**
     * Find zero or one Agenda that matches the filter.
     * @param {AgendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendaFindUniqueArgs>(args: SelectSubset<T, AgendaFindUniqueArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendaFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendaFindFirstArgs>(args?: SelectSubset<T, AgendaFindFirstArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendaFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda
     * const agenda = await prisma.agenda.findMany()
     * 
     * // Get first 10 Agenda
     * const agenda = await prisma.agenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendaWithIdOnly = await prisma.agenda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendaFindManyArgs>(args?: SelectSubset<T, AgendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenda.
     * @param {AgendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
     */
    create<T extends AgendaCreateArgs>(args: SelectSubset<T, AgendaCreateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agenda.
     * @param {AgendaCreateManyArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendaCreateManyArgs>(args?: SelectSubset<T, AgendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agenda.
     * @param {AgendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
     */
    delete<T extends AgendaDeleteArgs>(args: SelectSubset<T, AgendaDeleteArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenda.
     * @param {AgendaUpdateArgs} args - Arguments to update one Agenda.
     * @example
     * // Update one Agenda
     * const agenda = await prisma.agenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendaUpdateArgs>(args: SelectSubset<T, AgendaUpdateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agenda.
     * @param {AgendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendaDeleteManyArgs>(args?: SelectSubset<T, AgendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendaUpdateManyArgs>(args: SelectSubset<T, AgendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agenda.
     * @param {AgendaUpsertArgs} args - Arguments to update or create a Agenda.
     * @example
     * // Update or create a Agenda
     * const agenda = await prisma.agenda.upsert({
     *   create: {
     *     // ... data to create a Agenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda we want to update
     *   }
     * })
     */
    upsert<T extends AgendaUpsertArgs>(args: SelectSubset<T, AgendaUpsertArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends AgendaCountArgs>(
      args?: Subset<T, AgendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendaAggregateArgs>(args: Subset<T, AgendaAggregateArgs>): Prisma.PrismaPromise<GetAgendaAggregateType<T>>

    /**
     * Group by Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaGroupByArgs} args - Group by arguments.
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
      T extends AgendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendaGroupByArgs['orderBy'] }
        : { orderBy?: AgendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agenda model
   */
  readonly fields: AgendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Agenda model
   */
  interface AgendaFieldRefs {
    readonly id: FieldRef<"Agenda", 'String'>
    readonly judul: FieldRef<"Agenda", 'String'>
    readonly slug: FieldRef<"Agenda", 'String'>
    readonly deskripsi: FieldRef<"Agenda", 'String'>
    readonly lokasi: FieldRef<"Agenda", 'String'>
    readonly mulai: FieldRef<"Agenda", 'DateTime'>
    readonly selesai: FieldRef<"Agenda", 'DateTime'>
    readonly isPublished: FieldRef<"Agenda", 'Boolean'>
    readonly createdAt: FieldRef<"Agenda", 'DateTime'>
    readonly updatedAt: FieldRef<"Agenda", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agenda findUnique
   */
  export type AgendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findUniqueOrThrow
   */
  export type AgendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findFirst
   */
  export type AgendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findFirstOrThrow
   */
  export type AgendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findMany
   */
  export type AgendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda create
   */
  export type AgendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data needed to create a Agenda.
     */
    data: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
  }

  /**
   * Agenda createMany
   */
  export type AgendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agenda.
     */
    data: AgendaCreateManyInput | AgendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agenda update
   */
  export type AgendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data needed to update a Agenda.
     */
    data: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
    /**
     * Choose, which Agenda to update.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda updateMany
   */
  export type AgendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agenda.
     */
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyInput>
    /**
     * Filter which Agenda to update
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to update.
     */
    limit?: number
  }

  /**
   * Agenda upsert
   */
  export type AgendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The filter to search for the Agenda to update in case it exists.
     */
    where: AgendaWhereUniqueInput
    /**
     * In case the Agenda found by the `where` argument doesn't exist, create a new Agenda with this data.
     */
    create: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
    /**
     * In case the Agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
  }

  /**
   * Agenda delete
   */
  export type AgendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Filter which Agenda to delete.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda deleteMany
   */
  export type AgendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to delete
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to delete.
     */
    limit?: number
  }

  /**
   * Agenda without action
   */
  export type AgendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
  }


  /**
   * Model Prestasi
   */

  export type AggregatePrestasi = {
    _count: PrestasiCountAggregateOutputType | null
    _avg: PrestasiAvgAggregateOutputType | null
    _sum: PrestasiSumAggregateOutputType | null
    _min: PrestasiMinAggregateOutputType | null
    _max: PrestasiMaxAggregateOutputType | null
  }

  export type PrestasiAvgAggregateOutputType = {
    tahun: number | null
  }

  export type PrestasiSumAggregateOutputType = {
    tahun: number | null
  }

  export type PrestasiMinAggregateOutputType = {
    id: string | null
    judul: string | null
    peraih: string | null
    tingkat: string | null
    juara: string | null
    tahun: number | null
    deskripsi: string | null
    gambar: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrestasiMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    peraih: string | null
    tingkat: string | null
    juara: string | null
    tahun: number | null
    deskripsi: string | null
    gambar: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrestasiCountAggregateOutputType = {
    id: number
    judul: number
    peraih: number
    tingkat: number
    juara: number
    tahun: number
    deskripsi: number
    gambar: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrestasiAvgAggregateInputType = {
    tahun?: true
  }

  export type PrestasiSumAggregateInputType = {
    tahun?: true
  }

  export type PrestasiMinAggregateInputType = {
    id?: true
    judul?: true
    peraih?: true
    tingkat?: true
    juara?: true
    tahun?: true
    deskripsi?: true
    gambar?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrestasiMaxAggregateInputType = {
    id?: true
    judul?: true
    peraih?: true
    tingkat?: true
    juara?: true
    tahun?: true
    deskripsi?: true
    gambar?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrestasiCountAggregateInputType = {
    id?: true
    judul?: true
    peraih?: true
    tingkat?: true
    juara?: true
    tahun?: true
    deskripsi?: true
    gambar?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrestasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestasi to aggregate.
     */
    where?: PrestasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestasis to fetch.
     */
    orderBy?: PrestasiOrderByWithRelationInput | PrestasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrestasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prestasis
    **/
    _count?: true | PrestasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestasiMaxAggregateInputType
  }

  export type GetPrestasiAggregateType<T extends PrestasiAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestasi[P]>
      : GetScalarType<T[P], AggregatePrestasi[P]>
  }




  export type PrestasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestasiWhereInput
    orderBy?: PrestasiOrderByWithAggregationInput | PrestasiOrderByWithAggregationInput[]
    by: PrestasiScalarFieldEnum[] | PrestasiScalarFieldEnum
    having?: PrestasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestasiCountAggregateInputType | true
    _avg?: PrestasiAvgAggregateInputType
    _sum?: PrestasiSumAggregateInputType
    _min?: PrestasiMinAggregateInputType
    _max?: PrestasiMaxAggregateInputType
  }

  export type PrestasiGroupByOutputType = {
    id: string
    judul: string
    peraih: string | null
    tingkat: string
    juara: string | null
    tahun: number
    deskripsi: string | null
    gambar: string | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: PrestasiCountAggregateOutputType | null
    _avg: PrestasiAvgAggregateOutputType | null
    _sum: PrestasiSumAggregateOutputType | null
    _min: PrestasiMinAggregateOutputType | null
    _max: PrestasiMaxAggregateOutputType | null
  }

  type GetPrestasiGroupByPayload<T extends PrestasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestasiGroupByOutputType[P]>
            : GetScalarType<T[P], PrestasiGroupByOutputType[P]>
        }
      >
    >


  export type PrestasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    peraih?: boolean
    tingkat?: boolean
    juara?: boolean
    tahun?: boolean
    deskripsi?: boolean
    gambar?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prestasi"]>



  export type PrestasiSelectScalar = {
    id?: boolean
    judul?: boolean
    peraih?: boolean
    tingkat?: boolean
    juara?: boolean
    tahun?: boolean
    deskripsi?: boolean
    gambar?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrestasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "peraih" | "tingkat" | "juara" | "tahun" | "deskripsi" | "gambar" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["prestasi"]>

  export type $PrestasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prestasi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      peraih: string | null
      tingkat: string
      juara: string | null
      tahun: number
      deskripsi: string | null
      gambar: string | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prestasi"]>
    composites: {}
  }

  type PrestasiGetPayload<S extends boolean | null | undefined | PrestasiDefaultArgs> = $Result.GetResult<Prisma.$PrestasiPayload, S>

  type PrestasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrestasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestasiCountAggregateInputType | true
    }

  export interface PrestasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prestasi'], meta: { name: 'Prestasi' } }
    /**
     * Find zero or one Prestasi that matches the filter.
     * @param {PrestasiFindUniqueArgs} args - Arguments to find a Prestasi
     * @example
     * // Get one Prestasi
     * const prestasi = await prisma.prestasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrestasiFindUniqueArgs>(args: SelectSubset<T, PrestasiFindUniqueArgs<ExtArgs>>): Prisma__PrestasiClient<$Result.GetResult<Prisma.$PrestasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrestasiFindUniqueOrThrowArgs} args - Arguments to find a Prestasi
     * @example
     * // Get one Prestasi
     * const prestasi = await prisma.prestasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrestasiFindUniqueOrThrowArgs>(args: SelectSubset<T, PrestasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrestasiClient<$Result.GetResult<Prisma.$PrestasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestasiFindFirstArgs} args - Arguments to find a Prestasi
     * @example
     * // Get one Prestasi
     * const prestasi = await prisma.prestasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrestasiFindFirstArgs>(args?: SelectSubset<T, PrestasiFindFirstArgs<ExtArgs>>): Prisma__PrestasiClient<$Result.GetResult<Prisma.$PrestasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestasiFindFirstOrThrowArgs} args - Arguments to find a Prestasi
     * @example
     * // Get one Prestasi
     * const prestasi = await prisma.prestasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrestasiFindFirstOrThrowArgs>(args?: SelectSubset<T, PrestasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrestasiClient<$Result.GetResult<Prisma.$PrestasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestasis
     * const prestasis = await prisma.prestasi.findMany()
     * 
     * // Get first 10 Prestasis
     * const prestasis = await prisma.prestasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prestasiWithIdOnly = await prisma.prestasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrestasiFindManyArgs>(args?: SelectSubset<T, PrestasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestasi.
     * @param {PrestasiCreateArgs} args - Arguments to create a Prestasi.
     * @example
     * // Create one Prestasi
     * const Prestasi = await prisma.prestasi.create({
     *   data: {
     *     // ... data to create a Prestasi
     *   }
     * })
     * 
     */
    create<T extends PrestasiCreateArgs>(args: SelectSubset<T, PrestasiCreateArgs<ExtArgs>>): Prisma__PrestasiClient<$Result.GetResult<Prisma.$PrestasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestasis.
     * @param {PrestasiCreateManyArgs} args - Arguments to create many Prestasis.
     * @example
     * // Create many Prestasis
     * const prestasi = await prisma.prestasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrestasiCreateManyArgs>(args?: SelectSubset<T, PrestasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prestasi.
     * @param {PrestasiDeleteArgs} args - Arguments to delete one Prestasi.
     * @example
     * // Delete one Prestasi
     * const Prestasi = await prisma.prestasi.delete({
     *   where: {
     *     // ... filter to delete one Prestasi
     *   }
     * })
     * 
     */
    delete<T extends PrestasiDeleteArgs>(args: SelectSubset<T, PrestasiDeleteArgs<ExtArgs>>): Prisma__PrestasiClient<$Result.GetResult<Prisma.$PrestasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestasi.
     * @param {PrestasiUpdateArgs} args - Arguments to update one Prestasi.
     * @example
     * // Update one Prestasi
     * const prestasi = await prisma.prestasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrestasiUpdateArgs>(args: SelectSubset<T, PrestasiUpdateArgs<ExtArgs>>): Prisma__PrestasiClient<$Result.GetResult<Prisma.$PrestasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestasis.
     * @param {PrestasiDeleteManyArgs} args - Arguments to filter Prestasis to delete.
     * @example
     * // Delete a few Prestasis
     * const { count } = await prisma.prestasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrestasiDeleteManyArgs>(args?: SelectSubset<T, PrestasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestasis
     * const prestasi = await prisma.prestasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrestasiUpdateManyArgs>(args: SelectSubset<T, PrestasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prestasi.
     * @param {PrestasiUpsertArgs} args - Arguments to update or create a Prestasi.
     * @example
     * // Update or create a Prestasi
     * const prestasi = await prisma.prestasi.upsert({
     *   create: {
     *     // ... data to create a Prestasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestasi we want to update
     *   }
     * })
     */
    upsert<T extends PrestasiUpsertArgs>(args: SelectSubset<T, PrestasiUpsertArgs<ExtArgs>>): Prisma__PrestasiClient<$Result.GetResult<Prisma.$PrestasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestasiCountArgs} args - Arguments to filter Prestasis to count.
     * @example
     * // Count the number of Prestasis
     * const count = await prisma.prestasi.count({
     *   where: {
     *     // ... the filter for the Prestasis we want to count
     *   }
     * })
    **/
    count<T extends PrestasiCountArgs>(
      args?: Subset<T, PrestasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrestasiAggregateArgs>(args: Subset<T, PrestasiAggregateArgs>): Prisma.PrismaPromise<GetPrestasiAggregateType<T>>

    /**
     * Group by Prestasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestasiGroupByArgs} args - Group by arguments.
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
      T extends PrestasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrestasiGroupByArgs['orderBy'] }
        : { orderBy?: PrestasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrestasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prestasi model
   */
  readonly fields: PrestasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prestasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrestasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Prestasi model
   */
  interface PrestasiFieldRefs {
    readonly id: FieldRef<"Prestasi", 'String'>
    readonly judul: FieldRef<"Prestasi", 'String'>
    readonly peraih: FieldRef<"Prestasi", 'String'>
    readonly tingkat: FieldRef<"Prestasi", 'String'>
    readonly juara: FieldRef<"Prestasi", 'String'>
    readonly tahun: FieldRef<"Prestasi", 'Int'>
    readonly deskripsi: FieldRef<"Prestasi", 'String'>
    readonly gambar: FieldRef<"Prestasi", 'String'>
    readonly isPublished: FieldRef<"Prestasi", 'Boolean'>
    readonly createdAt: FieldRef<"Prestasi", 'DateTime'>
    readonly updatedAt: FieldRef<"Prestasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prestasi findUnique
   */
  export type PrestasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
    /**
     * Filter, which Prestasi to fetch.
     */
    where: PrestasiWhereUniqueInput
  }

  /**
   * Prestasi findUniqueOrThrow
   */
  export type PrestasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
    /**
     * Filter, which Prestasi to fetch.
     */
    where: PrestasiWhereUniqueInput
  }

  /**
   * Prestasi findFirst
   */
  export type PrestasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
    /**
     * Filter, which Prestasi to fetch.
     */
    where?: PrestasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestasis to fetch.
     */
    orderBy?: PrestasiOrderByWithRelationInput | PrestasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestasis.
     */
    cursor?: PrestasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestasis.
     */
    distinct?: PrestasiScalarFieldEnum | PrestasiScalarFieldEnum[]
  }

  /**
   * Prestasi findFirstOrThrow
   */
  export type PrestasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
    /**
     * Filter, which Prestasi to fetch.
     */
    where?: PrestasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestasis to fetch.
     */
    orderBy?: PrestasiOrderByWithRelationInput | PrestasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestasis.
     */
    cursor?: PrestasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestasis.
     */
    distinct?: PrestasiScalarFieldEnum | PrestasiScalarFieldEnum[]
  }

  /**
   * Prestasi findMany
   */
  export type PrestasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
    /**
     * Filter, which Prestasis to fetch.
     */
    where?: PrestasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestasis to fetch.
     */
    orderBy?: PrestasiOrderByWithRelationInput | PrestasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prestasis.
     */
    cursor?: PrestasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestasis.
     */
    distinct?: PrestasiScalarFieldEnum | PrestasiScalarFieldEnum[]
  }

  /**
   * Prestasi create
   */
  export type PrestasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
    /**
     * The data needed to create a Prestasi.
     */
    data: XOR<PrestasiCreateInput, PrestasiUncheckedCreateInput>
  }

  /**
   * Prestasi createMany
   */
  export type PrestasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prestasis.
     */
    data: PrestasiCreateManyInput | PrestasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prestasi update
   */
  export type PrestasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
    /**
     * The data needed to update a Prestasi.
     */
    data: XOR<PrestasiUpdateInput, PrestasiUncheckedUpdateInput>
    /**
     * Choose, which Prestasi to update.
     */
    where: PrestasiWhereUniqueInput
  }

  /**
   * Prestasi updateMany
   */
  export type PrestasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prestasis.
     */
    data: XOR<PrestasiUpdateManyMutationInput, PrestasiUncheckedUpdateManyInput>
    /**
     * Filter which Prestasis to update
     */
    where?: PrestasiWhereInput
    /**
     * Limit how many Prestasis to update.
     */
    limit?: number
  }

  /**
   * Prestasi upsert
   */
  export type PrestasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
    /**
     * The filter to search for the Prestasi to update in case it exists.
     */
    where: PrestasiWhereUniqueInput
    /**
     * In case the Prestasi found by the `where` argument doesn't exist, create a new Prestasi with this data.
     */
    create: XOR<PrestasiCreateInput, PrestasiUncheckedCreateInput>
    /**
     * In case the Prestasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrestasiUpdateInput, PrestasiUncheckedUpdateInput>
  }

  /**
   * Prestasi delete
   */
  export type PrestasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
    /**
     * Filter which Prestasi to delete.
     */
    where: PrestasiWhereUniqueInput
  }

  /**
   * Prestasi deleteMany
   */
  export type PrestasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestasis to delete
     */
    where?: PrestasiWhereInput
    /**
     * Limit how many Prestasis to delete.
     */
    limit?: number
  }

  /**
   * Prestasi without action
   */
  export type PrestasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestasi
     */
    select?: PrestasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestasi
     */
    omit?: PrestasiOmit<ExtArgs> | null
  }


  /**
   * Model Unduhan
   */

  export type AggregateUnduhan = {
    _count: UnduhanCountAggregateOutputType | null
    _avg: UnduhanAvgAggregateOutputType | null
    _sum: UnduhanSumAggregateOutputType | null
    _min: UnduhanMinAggregateOutputType | null
    _max: UnduhanMaxAggregateOutputType | null
  }

  export type UnduhanAvgAggregateOutputType = {
    ukuran: number | null
    jumlahUnduhan: number | null
  }

  export type UnduhanSumAggregateOutputType = {
    ukuran: number | null
    jumlahUnduhan: number | null
  }

  export type UnduhanMinAggregateOutputType = {
    id: string | null
    judul: string | null
    deskripsi: string | null
    kategori: string | null
    fileUrl: string | null
    namaFile: string | null
    tipeFile: string | null
    ukuran: number | null
    jumlahUnduhan: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnduhanMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    deskripsi: string | null
    kategori: string | null
    fileUrl: string | null
    namaFile: string | null
    tipeFile: string | null
    ukuran: number | null
    jumlahUnduhan: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnduhanCountAggregateOutputType = {
    id: number
    judul: number
    deskripsi: number
    kategori: number
    fileUrl: number
    namaFile: number
    tipeFile: number
    ukuran: number
    jumlahUnduhan: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnduhanAvgAggregateInputType = {
    ukuran?: true
    jumlahUnduhan?: true
  }

  export type UnduhanSumAggregateInputType = {
    ukuran?: true
    jumlahUnduhan?: true
  }

  export type UnduhanMinAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    kategori?: true
    fileUrl?: true
    namaFile?: true
    tipeFile?: true
    ukuran?: true
    jumlahUnduhan?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnduhanMaxAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    kategori?: true
    fileUrl?: true
    namaFile?: true
    tipeFile?: true
    ukuran?: true
    jumlahUnduhan?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnduhanCountAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    kategori?: true
    fileUrl?: true
    namaFile?: true
    tipeFile?: true
    ukuran?: true
    jumlahUnduhan?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnduhanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unduhan to aggregate.
     */
    where?: UnduhanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unduhans to fetch.
     */
    orderBy?: UnduhanOrderByWithRelationInput | UnduhanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnduhanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unduhans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unduhans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Unduhans
    **/
    _count?: true | UnduhanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnduhanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnduhanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnduhanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnduhanMaxAggregateInputType
  }

  export type GetUnduhanAggregateType<T extends UnduhanAggregateArgs> = {
        [P in keyof T & keyof AggregateUnduhan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnduhan[P]>
      : GetScalarType<T[P], AggregateUnduhan[P]>
  }




  export type UnduhanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnduhanWhereInput
    orderBy?: UnduhanOrderByWithAggregationInput | UnduhanOrderByWithAggregationInput[]
    by: UnduhanScalarFieldEnum[] | UnduhanScalarFieldEnum
    having?: UnduhanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnduhanCountAggregateInputType | true
    _avg?: UnduhanAvgAggregateInputType
    _sum?: UnduhanSumAggregateInputType
    _min?: UnduhanMinAggregateInputType
    _max?: UnduhanMaxAggregateInputType
  }

  export type UnduhanGroupByOutputType = {
    id: string
    judul: string
    deskripsi: string | null
    kategori: string
    fileUrl: string
    namaFile: string
    tipeFile: string | null
    ukuran: number | null
    jumlahUnduhan: number
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: UnduhanCountAggregateOutputType | null
    _avg: UnduhanAvgAggregateOutputType | null
    _sum: UnduhanSumAggregateOutputType | null
    _min: UnduhanMinAggregateOutputType | null
    _max: UnduhanMaxAggregateOutputType | null
  }

  type GetUnduhanGroupByPayload<T extends UnduhanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnduhanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnduhanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnduhanGroupByOutputType[P]>
            : GetScalarType<T[P], UnduhanGroupByOutputType[P]>
        }
      >
    >


  export type UnduhanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    kategori?: boolean
    fileUrl?: boolean
    namaFile?: boolean
    tipeFile?: boolean
    ukuran?: boolean
    jumlahUnduhan?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unduhan"]>



  export type UnduhanSelectScalar = {
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    kategori?: boolean
    fileUrl?: boolean
    namaFile?: boolean
    tipeFile?: boolean
    ukuran?: boolean
    jumlahUnduhan?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnduhanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "deskripsi" | "kategori" | "fileUrl" | "namaFile" | "tipeFile" | "ukuran" | "jumlahUnduhan" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["unduhan"]>

  export type $UnduhanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unduhan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      deskripsi: string | null
      kategori: string
      fileUrl: string
      namaFile: string
      tipeFile: string | null
      ukuran: number | null
      jumlahUnduhan: number
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unduhan"]>
    composites: {}
  }

  type UnduhanGetPayload<S extends boolean | null | undefined | UnduhanDefaultArgs> = $Result.GetResult<Prisma.$UnduhanPayload, S>

  type UnduhanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnduhanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnduhanCountAggregateInputType | true
    }

  export interface UnduhanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unduhan'], meta: { name: 'Unduhan' } }
    /**
     * Find zero or one Unduhan that matches the filter.
     * @param {UnduhanFindUniqueArgs} args - Arguments to find a Unduhan
     * @example
     * // Get one Unduhan
     * const unduhan = await prisma.unduhan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnduhanFindUniqueArgs>(args: SelectSubset<T, UnduhanFindUniqueArgs<ExtArgs>>): Prisma__UnduhanClient<$Result.GetResult<Prisma.$UnduhanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unduhan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnduhanFindUniqueOrThrowArgs} args - Arguments to find a Unduhan
     * @example
     * // Get one Unduhan
     * const unduhan = await prisma.unduhan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnduhanFindUniqueOrThrowArgs>(args: SelectSubset<T, UnduhanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnduhanClient<$Result.GetResult<Prisma.$UnduhanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unduhan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnduhanFindFirstArgs} args - Arguments to find a Unduhan
     * @example
     * // Get one Unduhan
     * const unduhan = await prisma.unduhan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnduhanFindFirstArgs>(args?: SelectSubset<T, UnduhanFindFirstArgs<ExtArgs>>): Prisma__UnduhanClient<$Result.GetResult<Prisma.$UnduhanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unduhan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnduhanFindFirstOrThrowArgs} args - Arguments to find a Unduhan
     * @example
     * // Get one Unduhan
     * const unduhan = await prisma.unduhan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnduhanFindFirstOrThrowArgs>(args?: SelectSubset<T, UnduhanFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnduhanClient<$Result.GetResult<Prisma.$UnduhanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unduhans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnduhanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unduhans
     * const unduhans = await prisma.unduhan.findMany()
     * 
     * // Get first 10 Unduhans
     * const unduhans = await prisma.unduhan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unduhanWithIdOnly = await prisma.unduhan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnduhanFindManyArgs>(args?: SelectSubset<T, UnduhanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnduhanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unduhan.
     * @param {UnduhanCreateArgs} args - Arguments to create a Unduhan.
     * @example
     * // Create one Unduhan
     * const Unduhan = await prisma.unduhan.create({
     *   data: {
     *     // ... data to create a Unduhan
     *   }
     * })
     * 
     */
    create<T extends UnduhanCreateArgs>(args: SelectSubset<T, UnduhanCreateArgs<ExtArgs>>): Prisma__UnduhanClient<$Result.GetResult<Prisma.$UnduhanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unduhans.
     * @param {UnduhanCreateManyArgs} args - Arguments to create many Unduhans.
     * @example
     * // Create many Unduhans
     * const unduhan = await prisma.unduhan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnduhanCreateManyArgs>(args?: SelectSubset<T, UnduhanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unduhan.
     * @param {UnduhanDeleteArgs} args - Arguments to delete one Unduhan.
     * @example
     * // Delete one Unduhan
     * const Unduhan = await prisma.unduhan.delete({
     *   where: {
     *     // ... filter to delete one Unduhan
     *   }
     * })
     * 
     */
    delete<T extends UnduhanDeleteArgs>(args: SelectSubset<T, UnduhanDeleteArgs<ExtArgs>>): Prisma__UnduhanClient<$Result.GetResult<Prisma.$UnduhanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unduhan.
     * @param {UnduhanUpdateArgs} args - Arguments to update one Unduhan.
     * @example
     * // Update one Unduhan
     * const unduhan = await prisma.unduhan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnduhanUpdateArgs>(args: SelectSubset<T, UnduhanUpdateArgs<ExtArgs>>): Prisma__UnduhanClient<$Result.GetResult<Prisma.$UnduhanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unduhans.
     * @param {UnduhanDeleteManyArgs} args - Arguments to filter Unduhans to delete.
     * @example
     * // Delete a few Unduhans
     * const { count } = await prisma.unduhan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnduhanDeleteManyArgs>(args?: SelectSubset<T, UnduhanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unduhans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnduhanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unduhans
     * const unduhan = await prisma.unduhan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnduhanUpdateManyArgs>(args: SelectSubset<T, UnduhanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unduhan.
     * @param {UnduhanUpsertArgs} args - Arguments to update or create a Unduhan.
     * @example
     * // Update or create a Unduhan
     * const unduhan = await prisma.unduhan.upsert({
     *   create: {
     *     // ... data to create a Unduhan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unduhan we want to update
     *   }
     * })
     */
    upsert<T extends UnduhanUpsertArgs>(args: SelectSubset<T, UnduhanUpsertArgs<ExtArgs>>): Prisma__UnduhanClient<$Result.GetResult<Prisma.$UnduhanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Unduhans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnduhanCountArgs} args - Arguments to filter Unduhans to count.
     * @example
     * // Count the number of Unduhans
     * const count = await prisma.unduhan.count({
     *   where: {
     *     // ... the filter for the Unduhans we want to count
     *   }
     * })
    **/
    count<T extends UnduhanCountArgs>(
      args?: Subset<T, UnduhanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnduhanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unduhan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnduhanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnduhanAggregateArgs>(args: Subset<T, UnduhanAggregateArgs>): Prisma.PrismaPromise<GetUnduhanAggregateType<T>>

    /**
     * Group by Unduhan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnduhanGroupByArgs} args - Group by arguments.
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
      T extends UnduhanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnduhanGroupByArgs['orderBy'] }
        : { orderBy?: UnduhanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnduhanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnduhanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unduhan model
   */
  readonly fields: UnduhanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unduhan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnduhanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Unduhan model
   */
  interface UnduhanFieldRefs {
    readonly id: FieldRef<"Unduhan", 'String'>
    readonly judul: FieldRef<"Unduhan", 'String'>
    readonly deskripsi: FieldRef<"Unduhan", 'String'>
    readonly kategori: FieldRef<"Unduhan", 'String'>
    readonly fileUrl: FieldRef<"Unduhan", 'String'>
    readonly namaFile: FieldRef<"Unduhan", 'String'>
    readonly tipeFile: FieldRef<"Unduhan", 'String'>
    readonly ukuran: FieldRef<"Unduhan", 'Int'>
    readonly jumlahUnduhan: FieldRef<"Unduhan", 'Int'>
    readonly isPublished: FieldRef<"Unduhan", 'Boolean'>
    readonly createdAt: FieldRef<"Unduhan", 'DateTime'>
    readonly updatedAt: FieldRef<"Unduhan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unduhan findUnique
   */
  export type UnduhanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
    /**
     * Filter, which Unduhan to fetch.
     */
    where: UnduhanWhereUniqueInput
  }

  /**
   * Unduhan findUniqueOrThrow
   */
  export type UnduhanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
    /**
     * Filter, which Unduhan to fetch.
     */
    where: UnduhanWhereUniqueInput
  }

  /**
   * Unduhan findFirst
   */
  export type UnduhanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
    /**
     * Filter, which Unduhan to fetch.
     */
    where?: UnduhanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unduhans to fetch.
     */
    orderBy?: UnduhanOrderByWithRelationInput | UnduhanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unduhans.
     */
    cursor?: UnduhanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unduhans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unduhans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unduhans.
     */
    distinct?: UnduhanScalarFieldEnum | UnduhanScalarFieldEnum[]
  }

  /**
   * Unduhan findFirstOrThrow
   */
  export type UnduhanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
    /**
     * Filter, which Unduhan to fetch.
     */
    where?: UnduhanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unduhans to fetch.
     */
    orderBy?: UnduhanOrderByWithRelationInput | UnduhanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unduhans.
     */
    cursor?: UnduhanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unduhans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unduhans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unduhans.
     */
    distinct?: UnduhanScalarFieldEnum | UnduhanScalarFieldEnum[]
  }

  /**
   * Unduhan findMany
   */
  export type UnduhanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
    /**
     * Filter, which Unduhans to fetch.
     */
    where?: UnduhanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unduhans to fetch.
     */
    orderBy?: UnduhanOrderByWithRelationInput | UnduhanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Unduhans.
     */
    cursor?: UnduhanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unduhans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unduhans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unduhans.
     */
    distinct?: UnduhanScalarFieldEnum | UnduhanScalarFieldEnum[]
  }

  /**
   * Unduhan create
   */
  export type UnduhanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
    /**
     * The data needed to create a Unduhan.
     */
    data: XOR<UnduhanCreateInput, UnduhanUncheckedCreateInput>
  }

  /**
   * Unduhan createMany
   */
  export type UnduhanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Unduhans.
     */
    data: UnduhanCreateManyInput | UnduhanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unduhan update
   */
  export type UnduhanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
    /**
     * The data needed to update a Unduhan.
     */
    data: XOR<UnduhanUpdateInput, UnduhanUncheckedUpdateInput>
    /**
     * Choose, which Unduhan to update.
     */
    where: UnduhanWhereUniqueInput
  }

  /**
   * Unduhan updateMany
   */
  export type UnduhanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Unduhans.
     */
    data: XOR<UnduhanUpdateManyMutationInput, UnduhanUncheckedUpdateManyInput>
    /**
     * Filter which Unduhans to update
     */
    where?: UnduhanWhereInput
    /**
     * Limit how many Unduhans to update.
     */
    limit?: number
  }

  /**
   * Unduhan upsert
   */
  export type UnduhanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
    /**
     * The filter to search for the Unduhan to update in case it exists.
     */
    where: UnduhanWhereUniqueInput
    /**
     * In case the Unduhan found by the `where` argument doesn't exist, create a new Unduhan with this data.
     */
    create: XOR<UnduhanCreateInput, UnduhanUncheckedCreateInput>
    /**
     * In case the Unduhan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnduhanUpdateInput, UnduhanUncheckedUpdateInput>
  }

  /**
   * Unduhan delete
   */
  export type UnduhanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
    /**
     * Filter which Unduhan to delete.
     */
    where: UnduhanWhereUniqueInput
  }

  /**
   * Unduhan deleteMany
   */
  export type UnduhanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unduhans to delete
     */
    where?: UnduhanWhereInput
    /**
     * Limit how many Unduhans to delete.
     */
    limit?: number
  }

  /**
   * Unduhan without action
   */
  export type UnduhanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unduhan
     */
    select?: UnduhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unduhan
     */
    omit?: UnduhanOmit<ExtArgs> | null
  }


  /**
   * Model Faq
   */

  export type AggregateFaq = {
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  export type FaqAvgAggregateOutputType = {
    urutan: number | null
  }

  export type FaqSumAggregateOutputType = {
    urutan: number | null
  }

  export type FaqMinAggregateOutputType = {
    id: string | null
    pertanyaan: string | null
    jawaban: string | null
    kategori: string | null
    urutan: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqMaxAggregateOutputType = {
    id: string | null
    pertanyaan: string | null
    jawaban: string | null
    kategori: string | null
    urutan: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqCountAggregateOutputType = {
    id: number
    pertanyaan: number
    jawaban: number
    kategori: number
    urutan: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FaqAvgAggregateInputType = {
    urutan?: true
  }

  export type FaqSumAggregateInputType = {
    urutan?: true
  }

  export type FaqMinAggregateInputType = {
    id?: true
    pertanyaan?: true
    jawaban?: true
    kategori?: true
    urutan?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqMaxAggregateInputType = {
    id?: true
    pertanyaan?: true
    jawaban?: true
    kategori?: true
    urutan?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqCountAggregateInputType = {
    id?: true
    pertanyaan?: true
    jawaban?: true
    kategori?: true
    urutan?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faq to aggregate.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faqs
    **/
    _count?: true | FaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaqMaxAggregateInputType
  }

  export type GetFaqAggregateType<T extends FaqAggregateArgs> = {
        [P in keyof T & keyof AggregateFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaq[P]>
      : GetScalarType<T[P], AggregateFaq[P]>
  }




  export type FaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaqWhereInput
    orderBy?: FaqOrderByWithAggregationInput | FaqOrderByWithAggregationInput[]
    by: FaqScalarFieldEnum[] | FaqScalarFieldEnum
    having?: FaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaqCountAggregateInputType | true
    _avg?: FaqAvgAggregateInputType
    _sum?: FaqSumAggregateInputType
    _min?: FaqMinAggregateInputType
    _max?: FaqMaxAggregateInputType
  }

  export type FaqGroupByOutputType = {
    id: string
    pertanyaan: string
    jawaban: string
    kategori: string
    urutan: number
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  type GetFaqGroupByPayload<T extends FaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaqGroupByOutputType[P]>
            : GetScalarType<T[P], FaqGroupByOutputType[P]>
        }
      >
    >


  export type FaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pertanyaan?: boolean
    jawaban?: boolean
    kategori?: boolean
    urutan?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["faq"]>



  export type FaqSelectScalar = {
    id?: boolean
    pertanyaan?: boolean
    jawaban?: boolean
    kategori?: boolean
    urutan?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FaqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pertanyaan" | "jawaban" | "kategori" | "urutan" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["faq"]>

  export type $FaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faq"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pertanyaan: string
      jawaban: string
      kategori: string
      urutan: number
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["faq"]>
    composites: {}
  }

  type FaqGetPayload<S extends boolean | null | undefined | FaqDefaultArgs> = $Result.GetResult<Prisma.$FaqPayload, S>

  type FaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaqCountAggregateInputType | true
    }

  export interface FaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faq'], meta: { name: 'Faq' } }
    /**
     * Find zero or one Faq that matches the filter.
     * @param {FaqFindUniqueArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaqFindUniqueArgs>(args: SelectSubset<T, FaqFindUniqueArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaqFindUniqueOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaqFindUniqueOrThrowArgs>(args: SelectSubset<T, FaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaqFindFirstArgs>(args?: SelectSubset<T, FaqFindFirstArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaqFindFirstOrThrowArgs>(args?: SelectSubset<T, FaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faqs
     * const faqs = await prisma.faq.findMany()
     * 
     * // Get first 10 Faqs
     * const faqs = await prisma.faq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faqWithIdOnly = await prisma.faq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaqFindManyArgs>(args?: SelectSubset<T, FaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faq.
     * @param {FaqCreateArgs} args - Arguments to create a Faq.
     * @example
     * // Create one Faq
     * const Faq = await prisma.faq.create({
     *   data: {
     *     // ... data to create a Faq
     *   }
     * })
     * 
     */
    create<T extends FaqCreateArgs>(args: SelectSubset<T, FaqCreateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faqs.
     * @param {FaqCreateManyArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaqCreateManyArgs>(args?: SelectSubset<T, FaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Faq.
     * @param {FaqDeleteArgs} args - Arguments to delete one Faq.
     * @example
     * // Delete one Faq
     * const Faq = await prisma.faq.delete({
     *   where: {
     *     // ... filter to delete one Faq
     *   }
     * })
     * 
     */
    delete<T extends FaqDeleteArgs>(args: SelectSubset<T, FaqDeleteArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faq.
     * @param {FaqUpdateArgs} args - Arguments to update one Faq.
     * @example
     * // Update one Faq
     * const faq = await prisma.faq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaqUpdateArgs>(args: SelectSubset<T, FaqUpdateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faqs.
     * @param {FaqDeleteManyArgs} args - Arguments to filter Faqs to delete.
     * @example
     * // Delete a few Faqs
     * const { count } = await prisma.faq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaqDeleteManyArgs>(args?: SelectSubset<T, FaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaqUpdateManyArgs>(args: SelectSubset<T, FaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Faq.
     * @param {FaqUpsertArgs} args - Arguments to update or create a Faq.
     * @example
     * // Update or create a Faq
     * const faq = await prisma.faq.upsert({
     *   create: {
     *     // ... data to create a Faq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faq we want to update
     *   }
     * })
     */
    upsert<T extends FaqUpsertArgs>(args: SelectSubset<T, FaqUpsertArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqCountArgs} args - Arguments to filter Faqs to count.
     * @example
     * // Count the number of Faqs
     * const count = await prisma.faq.count({
     *   where: {
     *     // ... the filter for the Faqs we want to count
     *   }
     * })
    **/
    count<T extends FaqCountArgs>(
      args?: Subset<T, FaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaqAggregateArgs>(args: Subset<T, FaqAggregateArgs>): Prisma.PrismaPromise<GetFaqAggregateType<T>>

    /**
     * Group by Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqGroupByArgs} args - Group by arguments.
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
      T extends FaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaqGroupByArgs['orderBy'] }
        : { orderBy?: FaqGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faq model
   */
  readonly fields: FaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Faq model
   */
  interface FaqFieldRefs {
    readonly id: FieldRef<"Faq", 'String'>
    readonly pertanyaan: FieldRef<"Faq", 'String'>
    readonly jawaban: FieldRef<"Faq", 'String'>
    readonly kategori: FieldRef<"Faq", 'String'>
    readonly urutan: FieldRef<"Faq", 'Int'>
    readonly isPublished: FieldRef<"Faq", 'Boolean'>
    readonly createdAt: FieldRef<"Faq", 'DateTime'>
    readonly updatedAt: FieldRef<"Faq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Faq findUnique
   */
  export type FaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findUniqueOrThrow
   */
  export type FaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findFirst
   */
  export type FaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findFirstOrThrow
   */
  export type FaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findMany
   */
  export type FaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faqs to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq create
   */
  export type FaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to create a Faq.
     */
    data: XOR<FaqCreateInput, FaqUncheckedCreateInput>
  }

  /**
   * Faq createMany
   */
  export type FaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq update
   */
  export type FaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to update a Faq.
     */
    data: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
    /**
     * Choose, which Faq to update.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq updateMany
   */
  export type FaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
  }

  /**
   * Faq upsert
   */
  export type FaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The filter to search for the Faq to update in case it exists.
     */
    where: FaqWhereUniqueInput
    /**
     * In case the Faq found by the `where` argument doesn't exist, create a new Faq with this data.
     */
    create: XOR<FaqCreateInput, FaqUncheckedCreateInput>
    /**
     * In case the Faq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
  }

  /**
   * Faq delete
   */
  export type FaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter which Faq to delete.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq deleteMany
   */
  export type FaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faqs to delete
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to delete.
     */
    limit?: number
  }

  /**
   * Faq without action
   */
  export type FaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
  }


  /**
   * Model PendaftaranPPDB
   */

  export type AggregatePendaftaranPPDB = {
    _count: PendaftaranPPDBCountAggregateOutputType | null
    _min: PendaftaranPPDBMinAggregateOutputType | null
    _max: PendaftaranPPDBMaxAggregateOutputType | null
  }

  export type PendaftaranPPDBMinAggregateOutputType = {
    id: string | null
    nomorPendaftaran: string | null
    userId: string | null
    status: $Enums.StatusPPDB | null
    gelombang: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PendaftaranPPDBMaxAggregateOutputType = {
    id: string | null
    nomorPendaftaran: string | null
    userId: string | null
    status: $Enums.StatusPPDB | null
    gelombang: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PendaftaranPPDBCountAggregateOutputType = {
    id: number
    nomorPendaftaran: number
    userId: number
    status: number
    gelombang: number
    catatan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PendaftaranPPDBMinAggregateInputType = {
    id?: true
    nomorPendaftaran?: true
    userId?: true
    status?: true
    gelombang?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PendaftaranPPDBMaxAggregateInputType = {
    id?: true
    nomorPendaftaran?: true
    userId?: true
    status?: true
    gelombang?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PendaftaranPPDBCountAggregateInputType = {
    id?: true
    nomorPendaftaran?: true
    userId?: true
    status?: true
    gelombang?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PendaftaranPPDBAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendaftaranPPDB to aggregate.
     */
    where?: PendaftaranPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftaranPPDBS to fetch.
     */
    orderBy?: PendaftaranPPDBOrderByWithRelationInput | PendaftaranPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendaftaranPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftaranPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftaranPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendaftaranPPDBS
    **/
    _count?: true | PendaftaranPPDBCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendaftaranPPDBMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendaftaranPPDBMaxAggregateInputType
  }

  export type GetPendaftaranPPDBAggregateType<T extends PendaftaranPPDBAggregateArgs> = {
        [P in keyof T & keyof AggregatePendaftaranPPDB]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendaftaranPPDB[P]>
      : GetScalarType<T[P], AggregatePendaftaranPPDB[P]>
  }




  export type PendaftaranPPDBGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftaranPPDBWhereInput
    orderBy?: PendaftaranPPDBOrderByWithAggregationInput | PendaftaranPPDBOrderByWithAggregationInput[]
    by: PendaftaranPPDBScalarFieldEnum[] | PendaftaranPPDBScalarFieldEnum
    having?: PendaftaranPPDBScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendaftaranPPDBCountAggregateInputType | true
    _min?: PendaftaranPPDBMinAggregateInputType
    _max?: PendaftaranPPDBMaxAggregateInputType
  }

  export type PendaftaranPPDBGroupByOutputType = {
    id: string
    nomorPendaftaran: string
    userId: string
    status: $Enums.StatusPPDB
    gelombang: string
    catatan: string | null
    createdAt: Date
    updatedAt: Date
    _count: PendaftaranPPDBCountAggregateOutputType | null
    _min: PendaftaranPPDBMinAggregateOutputType | null
    _max: PendaftaranPPDBMaxAggregateOutputType | null
  }

  type GetPendaftaranPPDBGroupByPayload<T extends PendaftaranPPDBGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendaftaranPPDBGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendaftaranPPDBGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendaftaranPPDBGroupByOutputType[P]>
            : GetScalarType<T[P], PendaftaranPPDBGroupByOutputType[P]>
        }
      >
    >


  export type PendaftaranPPDBSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomorPendaftaran?: boolean
    userId?: boolean
    status?: boolean
    gelombang?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    biodata?: boolean | PendaftaranPPDB$biodataArgs<ExtArgs>
    orangTua?: boolean | PendaftaranPPDB$orangTuaArgs<ExtArgs>
    dokumen?: boolean | PendaftaranPPDB$dokumenArgs<ExtArgs>
    _count?: boolean | PendaftaranPPDBCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaranPPDB"]>



  export type PendaftaranPPDBSelectScalar = {
    id?: boolean
    nomorPendaftaran?: boolean
    userId?: boolean
    status?: boolean
    gelombang?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PendaftaranPPDBOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomorPendaftaran" | "userId" | "status" | "gelombang" | "catatan" | "createdAt" | "updatedAt", ExtArgs["result"]["pendaftaranPPDB"]>
  export type PendaftaranPPDBInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    biodata?: boolean | PendaftaranPPDB$biodataArgs<ExtArgs>
    orangTua?: boolean | PendaftaranPPDB$orangTuaArgs<ExtArgs>
    dokumen?: boolean | PendaftaranPPDB$dokumenArgs<ExtArgs>
    _count?: boolean | PendaftaranPPDBCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PendaftaranPPDBPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendaftaranPPDB"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      biodata: Prisma.$BiodataSiswaPPDBPayload<ExtArgs> | null
      orangTua: Prisma.$DataOrangTuaPPDBPayload<ExtArgs> | null
      dokumen: Prisma.$DokumenPPDBPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomorPendaftaran: string
      userId: string
      status: $Enums.StatusPPDB
      gelombang: string
      catatan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pendaftaranPPDB"]>
    composites: {}
  }

  type PendaftaranPPDBGetPayload<S extends boolean | null | undefined | PendaftaranPPDBDefaultArgs> = $Result.GetResult<Prisma.$PendaftaranPPDBPayload, S>

  type PendaftaranPPDBCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendaftaranPPDBFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendaftaranPPDBCountAggregateInputType | true
    }

  export interface PendaftaranPPDBDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendaftaranPPDB'], meta: { name: 'PendaftaranPPDB' } }
    /**
     * Find zero or one PendaftaranPPDB that matches the filter.
     * @param {PendaftaranPPDBFindUniqueArgs} args - Arguments to find a PendaftaranPPDB
     * @example
     * // Get one PendaftaranPPDB
     * const pendaftaranPPDB = await prisma.pendaftaranPPDB.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendaftaranPPDBFindUniqueArgs>(args: SelectSubset<T, PendaftaranPPDBFindUniqueArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PendaftaranPPDB that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendaftaranPPDBFindUniqueOrThrowArgs} args - Arguments to find a PendaftaranPPDB
     * @example
     * // Get one PendaftaranPPDB
     * const pendaftaranPPDB = await prisma.pendaftaranPPDB.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendaftaranPPDBFindUniqueOrThrowArgs>(args: SelectSubset<T, PendaftaranPPDBFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendaftaranPPDB that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranPPDBFindFirstArgs} args - Arguments to find a PendaftaranPPDB
     * @example
     * // Get one PendaftaranPPDB
     * const pendaftaranPPDB = await prisma.pendaftaranPPDB.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendaftaranPPDBFindFirstArgs>(args?: SelectSubset<T, PendaftaranPPDBFindFirstArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendaftaranPPDB that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranPPDBFindFirstOrThrowArgs} args - Arguments to find a PendaftaranPPDB
     * @example
     * // Get one PendaftaranPPDB
     * const pendaftaranPPDB = await prisma.pendaftaranPPDB.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendaftaranPPDBFindFirstOrThrowArgs>(args?: SelectSubset<T, PendaftaranPPDBFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PendaftaranPPDBS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranPPDBFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendaftaranPPDBS
     * const pendaftaranPPDBS = await prisma.pendaftaranPPDB.findMany()
     * 
     * // Get first 10 PendaftaranPPDBS
     * const pendaftaranPPDBS = await prisma.pendaftaranPPDB.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendaftaranPPDBWithIdOnly = await prisma.pendaftaranPPDB.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendaftaranPPDBFindManyArgs>(args?: SelectSubset<T, PendaftaranPPDBFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PendaftaranPPDB.
     * @param {PendaftaranPPDBCreateArgs} args - Arguments to create a PendaftaranPPDB.
     * @example
     * // Create one PendaftaranPPDB
     * const PendaftaranPPDB = await prisma.pendaftaranPPDB.create({
     *   data: {
     *     // ... data to create a PendaftaranPPDB
     *   }
     * })
     * 
     */
    create<T extends PendaftaranPPDBCreateArgs>(args: SelectSubset<T, PendaftaranPPDBCreateArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PendaftaranPPDBS.
     * @param {PendaftaranPPDBCreateManyArgs} args - Arguments to create many PendaftaranPPDBS.
     * @example
     * // Create many PendaftaranPPDBS
     * const pendaftaranPPDB = await prisma.pendaftaranPPDB.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendaftaranPPDBCreateManyArgs>(args?: SelectSubset<T, PendaftaranPPDBCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PendaftaranPPDB.
     * @param {PendaftaranPPDBDeleteArgs} args - Arguments to delete one PendaftaranPPDB.
     * @example
     * // Delete one PendaftaranPPDB
     * const PendaftaranPPDB = await prisma.pendaftaranPPDB.delete({
     *   where: {
     *     // ... filter to delete one PendaftaranPPDB
     *   }
     * })
     * 
     */
    delete<T extends PendaftaranPPDBDeleteArgs>(args: SelectSubset<T, PendaftaranPPDBDeleteArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PendaftaranPPDB.
     * @param {PendaftaranPPDBUpdateArgs} args - Arguments to update one PendaftaranPPDB.
     * @example
     * // Update one PendaftaranPPDB
     * const pendaftaranPPDB = await prisma.pendaftaranPPDB.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendaftaranPPDBUpdateArgs>(args: SelectSubset<T, PendaftaranPPDBUpdateArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PendaftaranPPDBS.
     * @param {PendaftaranPPDBDeleteManyArgs} args - Arguments to filter PendaftaranPPDBS to delete.
     * @example
     * // Delete a few PendaftaranPPDBS
     * const { count } = await prisma.pendaftaranPPDB.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendaftaranPPDBDeleteManyArgs>(args?: SelectSubset<T, PendaftaranPPDBDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendaftaranPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranPPDBUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendaftaranPPDBS
     * const pendaftaranPPDB = await prisma.pendaftaranPPDB.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendaftaranPPDBUpdateManyArgs>(args: SelectSubset<T, PendaftaranPPDBUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendaftaranPPDB.
     * @param {PendaftaranPPDBUpsertArgs} args - Arguments to update or create a PendaftaranPPDB.
     * @example
     * // Update or create a PendaftaranPPDB
     * const pendaftaranPPDB = await prisma.pendaftaranPPDB.upsert({
     *   create: {
     *     // ... data to create a PendaftaranPPDB
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendaftaranPPDB we want to update
     *   }
     * })
     */
    upsert<T extends PendaftaranPPDBUpsertArgs>(args: SelectSubset<T, PendaftaranPPDBUpsertArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PendaftaranPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranPPDBCountArgs} args - Arguments to filter PendaftaranPPDBS to count.
     * @example
     * // Count the number of PendaftaranPPDBS
     * const count = await prisma.pendaftaranPPDB.count({
     *   where: {
     *     // ... the filter for the PendaftaranPPDBS we want to count
     *   }
     * })
    **/
    count<T extends PendaftaranPPDBCountArgs>(
      args?: Subset<T, PendaftaranPPDBCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendaftaranPPDBCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendaftaranPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranPPDBAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendaftaranPPDBAggregateArgs>(args: Subset<T, PendaftaranPPDBAggregateArgs>): Prisma.PrismaPromise<GetPendaftaranPPDBAggregateType<T>>

    /**
     * Group by PendaftaranPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranPPDBGroupByArgs} args - Group by arguments.
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
      T extends PendaftaranPPDBGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendaftaranPPDBGroupByArgs['orderBy'] }
        : { orderBy?: PendaftaranPPDBGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendaftaranPPDBGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendaftaranPPDBGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendaftaranPPDB model
   */
  readonly fields: PendaftaranPPDBFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendaftaranPPDB.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendaftaranPPDBClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    biodata<T extends PendaftaranPPDB$biodataArgs<ExtArgs> = {}>(args?: Subset<T, PendaftaranPPDB$biodataArgs<ExtArgs>>): Prisma__BiodataSiswaPPDBClient<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orangTua<T extends PendaftaranPPDB$orangTuaArgs<ExtArgs> = {}>(args?: Subset<T, PendaftaranPPDB$orangTuaArgs<ExtArgs>>): Prisma__DataOrangTuaPPDBClient<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dokumen<T extends PendaftaranPPDB$dokumenArgs<ExtArgs> = {}>(args?: Subset<T, PendaftaranPPDB$dokumenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PendaftaranPPDB model
   */
  interface PendaftaranPPDBFieldRefs {
    readonly id: FieldRef<"PendaftaranPPDB", 'String'>
    readonly nomorPendaftaran: FieldRef<"PendaftaranPPDB", 'String'>
    readonly userId: FieldRef<"PendaftaranPPDB", 'String'>
    readonly status: FieldRef<"PendaftaranPPDB", 'StatusPPDB'>
    readonly gelombang: FieldRef<"PendaftaranPPDB", 'String'>
    readonly catatan: FieldRef<"PendaftaranPPDB", 'String'>
    readonly createdAt: FieldRef<"PendaftaranPPDB", 'DateTime'>
    readonly updatedAt: FieldRef<"PendaftaranPPDB", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendaftaranPPDB findUnique
   */
  export type PendaftaranPPDBFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranPPDB to fetch.
     */
    where: PendaftaranPPDBWhereUniqueInput
  }

  /**
   * PendaftaranPPDB findUniqueOrThrow
   */
  export type PendaftaranPPDBFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranPPDB to fetch.
     */
    where: PendaftaranPPDBWhereUniqueInput
  }

  /**
   * PendaftaranPPDB findFirst
   */
  export type PendaftaranPPDBFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranPPDB to fetch.
     */
    where?: PendaftaranPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftaranPPDBS to fetch.
     */
    orderBy?: PendaftaranPPDBOrderByWithRelationInput | PendaftaranPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendaftaranPPDBS.
     */
    cursor?: PendaftaranPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftaranPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftaranPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendaftaranPPDBS.
     */
    distinct?: PendaftaranPPDBScalarFieldEnum | PendaftaranPPDBScalarFieldEnum[]
  }

  /**
   * PendaftaranPPDB findFirstOrThrow
   */
  export type PendaftaranPPDBFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranPPDB to fetch.
     */
    where?: PendaftaranPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftaranPPDBS to fetch.
     */
    orderBy?: PendaftaranPPDBOrderByWithRelationInput | PendaftaranPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendaftaranPPDBS.
     */
    cursor?: PendaftaranPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftaranPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftaranPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendaftaranPPDBS.
     */
    distinct?: PendaftaranPPDBScalarFieldEnum | PendaftaranPPDBScalarFieldEnum[]
  }

  /**
   * PendaftaranPPDB findMany
   */
  export type PendaftaranPPDBFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranPPDBS to fetch.
     */
    where?: PendaftaranPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftaranPPDBS to fetch.
     */
    orderBy?: PendaftaranPPDBOrderByWithRelationInput | PendaftaranPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendaftaranPPDBS.
     */
    cursor?: PendaftaranPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftaranPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftaranPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendaftaranPPDBS.
     */
    distinct?: PendaftaranPPDBScalarFieldEnum | PendaftaranPPDBScalarFieldEnum[]
  }

  /**
   * PendaftaranPPDB create
   */
  export type PendaftaranPPDBCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    /**
     * The data needed to create a PendaftaranPPDB.
     */
    data: XOR<PendaftaranPPDBCreateInput, PendaftaranPPDBUncheckedCreateInput>
  }

  /**
   * PendaftaranPPDB createMany
   */
  export type PendaftaranPPDBCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendaftaranPPDBS.
     */
    data: PendaftaranPPDBCreateManyInput | PendaftaranPPDBCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendaftaranPPDB update
   */
  export type PendaftaranPPDBUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    /**
     * The data needed to update a PendaftaranPPDB.
     */
    data: XOR<PendaftaranPPDBUpdateInput, PendaftaranPPDBUncheckedUpdateInput>
    /**
     * Choose, which PendaftaranPPDB to update.
     */
    where: PendaftaranPPDBWhereUniqueInput
  }

  /**
   * PendaftaranPPDB updateMany
   */
  export type PendaftaranPPDBUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendaftaranPPDBS.
     */
    data: XOR<PendaftaranPPDBUpdateManyMutationInput, PendaftaranPPDBUncheckedUpdateManyInput>
    /**
     * Filter which PendaftaranPPDBS to update
     */
    where?: PendaftaranPPDBWhereInput
    /**
     * Limit how many PendaftaranPPDBS to update.
     */
    limit?: number
  }

  /**
   * PendaftaranPPDB upsert
   */
  export type PendaftaranPPDBUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    /**
     * The filter to search for the PendaftaranPPDB to update in case it exists.
     */
    where: PendaftaranPPDBWhereUniqueInput
    /**
     * In case the PendaftaranPPDB found by the `where` argument doesn't exist, create a new PendaftaranPPDB with this data.
     */
    create: XOR<PendaftaranPPDBCreateInput, PendaftaranPPDBUncheckedCreateInput>
    /**
     * In case the PendaftaranPPDB was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendaftaranPPDBUpdateInput, PendaftaranPPDBUncheckedUpdateInput>
  }

  /**
   * PendaftaranPPDB delete
   */
  export type PendaftaranPPDBDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
    /**
     * Filter which PendaftaranPPDB to delete.
     */
    where: PendaftaranPPDBWhereUniqueInput
  }

  /**
   * PendaftaranPPDB deleteMany
   */
  export type PendaftaranPPDBDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendaftaranPPDBS to delete
     */
    where?: PendaftaranPPDBWhereInput
    /**
     * Limit how many PendaftaranPPDBS to delete.
     */
    limit?: number
  }

  /**
   * PendaftaranPPDB.biodata
   */
  export type PendaftaranPPDB$biodataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    where?: BiodataSiswaPPDBWhereInput
  }

  /**
   * PendaftaranPPDB.orangTua
   */
  export type PendaftaranPPDB$orangTuaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    where?: DataOrangTuaPPDBWhereInput
  }

  /**
   * PendaftaranPPDB.dokumen
   */
  export type PendaftaranPPDB$dokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    where?: DokumenPPDBWhereInput
    orderBy?: DokumenPPDBOrderByWithRelationInput | DokumenPPDBOrderByWithRelationInput[]
    cursor?: DokumenPPDBWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DokumenPPDBScalarFieldEnum | DokumenPPDBScalarFieldEnum[]
  }

  /**
   * PendaftaranPPDB without action
   */
  export type PendaftaranPPDBDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranPPDB
     */
    select?: PendaftaranPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranPPDB
     */
    omit?: PendaftaranPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranPPDBInclude<ExtArgs> | null
  }


  /**
   * Model BiodataSiswaPPDB
   */

  export type AggregateBiodataSiswaPPDB = {
    _count: BiodataSiswaPPDBCountAggregateOutputType | null
    _min: BiodataSiswaPPDBMinAggregateOutputType | null
    _max: BiodataSiswaPPDBMaxAggregateOutputType | null
  }

  export type BiodataSiswaPPDBMinAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    namaLengkap: string | null
    nisn: string | null
    nik: string | null
    tempatLahir: string | null
    tanggalLahir: Date | null
    jenisKelamin: $Enums.JenisKelamin | null
    agama: string | null
    alamat: string | null
    asalSekolah: string | null
  }

  export type BiodataSiswaPPDBMaxAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    namaLengkap: string | null
    nisn: string | null
    nik: string | null
    tempatLahir: string | null
    tanggalLahir: Date | null
    jenisKelamin: $Enums.JenisKelamin | null
    agama: string | null
    alamat: string | null
    asalSekolah: string | null
  }

  export type BiodataSiswaPPDBCountAggregateOutputType = {
    id: number
    pendaftaranId: number
    namaLengkap: number
    nisn: number
    nik: number
    tempatLahir: number
    tanggalLahir: number
    jenisKelamin: number
    agama: number
    alamat: number
    asalSekolah: number
    _all: number
  }


  export type BiodataSiswaPPDBMinAggregateInputType = {
    id?: true
    pendaftaranId?: true
    namaLengkap?: true
    nisn?: true
    nik?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    agama?: true
    alamat?: true
    asalSekolah?: true
  }

  export type BiodataSiswaPPDBMaxAggregateInputType = {
    id?: true
    pendaftaranId?: true
    namaLengkap?: true
    nisn?: true
    nik?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    agama?: true
    alamat?: true
    asalSekolah?: true
  }

  export type BiodataSiswaPPDBCountAggregateInputType = {
    id?: true
    pendaftaranId?: true
    namaLengkap?: true
    nisn?: true
    nik?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    agama?: true
    alamat?: true
    asalSekolah?: true
    _all?: true
  }

  export type BiodataSiswaPPDBAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiodataSiswaPPDB to aggregate.
     */
    where?: BiodataSiswaPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiodataSiswaPPDBS to fetch.
     */
    orderBy?: BiodataSiswaPPDBOrderByWithRelationInput | BiodataSiswaPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BiodataSiswaPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiodataSiswaPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiodataSiswaPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BiodataSiswaPPDBS
    **/
    _count?: true | BiodataSiswaPPDBCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiodataSiswaPPDBMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiodataSiswaPPDBMaxAggregateInputType
  }

  export type GetBiodataSiswaPPDBAggregateType<T extends BiodataSiswaPPDBAggregateArgs> = {
        [P in keyof T & keyof AggregateBiodataSiswaPPDB]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiodataSiswaPPDB[P]>
      : GetScalarType<T[P], AggregateBiodataSiswaPPDB[P]>
  }




  export type BiodataSiswaPPDBGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiodataSiswaPPDBWhereInput
    orderBy?: BiodataSiswaPPDBOrderByWithAggregationInput | BiodataSiswaPPDBOrderByWithAggregationInput[]
    by: BiodataSiswaPPDBScalarFieldEnum[] | BiodataSiswaPPDBScalarFieldEnum
    having?: BiodataSiswaPPDBScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiodataSiswaPPDBCountAggregateInputType | true
    _min?: BiodataSiswaPPDBMinAggregateInputType
    _max?: BiodataSiswaPPDBMaxAggregateInputType
  }

  export type BiodataSiswaPPDBGroupByOutputType = {
    id: string
    pendaftaranId: string
    namaLengkap: string
    nisn: string | null
    nik: string | null
    tempatLahir: string
    tanggalLahir: Date
    jenisKelamin: $Enums.JenisKelamin
    agama: string
    alamat: string
    asalSekolah: string
    _count: BiodataSiswaPPDBCountAggregateOutputType | null
    _min: BiodataSiswaPPDBMinAggregateOutputType | null
    _max: BiodataSiswaPPDBMaxAggregateOutputType | null
  }

  type GetBiodataSiswaPPDBGroupByPayload<T extends BiodataSiswaPPDBGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiodataSiswaPPDBGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiodataSiswaPPDBGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiodataSiswaPPDBGroupByOutputType[P]>
            : GetScalarType<T[P], BiodataSiswaPPDBGroupByOutputType[P]>
        }
      >
    >


  export type BiodataSiswaPPDBSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pendaftaranId?: boolean
    namaLengkap?: boolean
    nisn?: boolean
    nik?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    agama?: boolean
    alamat?: boolean
    asalSekolah?: boolean
    pendaftaran?: boolean | PendaftaranPPDBDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biodataSiswaPPDB"]>



  export type BiodataSiswaPPDBSelectScalar = {
    id?: boolean
    pendaftaranId?: boolean
    namaLengkap?: boolean
    nisn?: boolean
    nik?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    agama?: boolean
    alamat?: boolean
    asalSekolah?: boolean
  }

  export type BiodataSiswaPPDBOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pendaftaranId" | "namaLengkap" | "nisn" | "nik" | "tempatLahir" | "tanggalLahir" | "jenisKelamin" | "agama" | "alamat" | "asalSekolah", ExtArgs["result"]["biodataSiswaPPDB"]>
  export type BiodataSiswaPPDBInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranPPDBDefaultArgs<ExtArgs>
  }

  export type $BiodataSiswaPPDBPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BiodataSiswaPPDB"
    objects: {
      pendaftaran: Prisma.$PendaftaranPPDBPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pendaftaranId: string
      namaLengkap: string
      nisn: string | null
      nik: string | null
      tempatLahir: string
      tanggalLahir: Date
      jenisKelamin: $Enums.JenisKelamin
      agama: string
      alamat: string
      asalSekolah: string
    }, ExtArgs["result"]["biodataSiswaPPDB"]>
    composites: {}
  }

  type BiodataSiswaPPDBGetPayload<S extends boolean | null | undefined | BiodataSiswaPPDBDefaultArgs> = $Result.GetResult<Prisma.$BiodataSiswaPPDBPayload, S>

  type BiodataSiswaPPDBCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BiodataSiswaPPDBFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BiodataSiswaPPDBCountAggregateInputType | true
    }

  export interface BiodataSiswaPPDBDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BiodataSiswaPPDB'], meta: { name: 'BiodataSiswaPPDB' } }
    /**
     * Find zero or one BiodataSiswaPPDB that matches the filter.
     * @param {BiodataSiswaPPDBFindUniqueArgs} args - Arguments to find a BiodataSiswaPPDB
     * @example
     * // Get one BiodataSiswaPPDB
     * const biodataSiswaPPDB = await prisma.biodataSiswaPPDB.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiodataSiswaPPDBFindUniqueArgs>(args: SelectSubset<T, BiodataSiswaPPDBFindUniqueArgs<ExtArgs>>): Prisma__BiodataSiswaPPDBClient<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BiodataSiswaPPDB that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiodataSiswaPPDBFindUniqueOrThrowArgs} args - Arguments to find a BiodataSiswaPPDB
     * @example
     * // Get one BiodataSiswaPPDB
     * const biodataSiswaPPDB = await prisma.biodataSiswaPPDB.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiodataSiswaPPDBFindUniqueOrThrowArgs>(args: SelectSubset<T, BiodataSiswaPPDBFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BiodataSiswaPPDBClient<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiodataSiswaPPDB that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataSiswaPPDBFindFirstArgs} args - Arguments to find a BiodataSiswaPPDB
     * @example
     * // Get one BiodataSiswaPPDB
     * const biodataSiswaPPDB = await prisma.biodataSiswaPPDB.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiodataSiswaPPDBFindFirstArgs>(args?: SelectSubset<T, BiodataSiswaPPDBFindFirstArgs<ExtArgs>>): Prisma__BiodataSiswaPPDBClient<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiodataSiswaPPDB that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataSiswaPPDBFindFirstOrThrowArgs} args - Arguments to find a BiodataSiswaPPDB
     * @example
     * // Get one BiodataSiswaPPDB
     * const biodataSiswaPPDB = await prisma.biodataSiswaPPDB.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiodataSiswaPPDBFindFirstOrThrowArgs>(args?: SelectSubset<T, BiodataSiswaPPDBFindFirstOrThrowArgs<ExtArgs>>): Prisma__BiodataSiswaPPDBClient<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BiodataSiswaPPDBS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataSiswaPPDBFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BiodataSiswaPPDBS
     * const biodataSiswaPPDBS = await prisma.biodataSiswaPPDB.findMany()
     * 
     * // Get first 10 BiodataSiswaPPDBS
     * const biodataSiswaPPDBS = await prisma.biodataSiswaPPDB.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const biodataSiswaPPDBWithIdOnly = await prisma.biodataSiswaPPDB.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BiodataSiswaPPDBFindManyArgs>(args?: SelectSubset<T, BiodataSiswaPPDBFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BiodataSiswaPPDB.
     * @param {BiodataSiswaPPDBCreateArgs} args - Arguments to create a BiodataSiswaPPDB.
     * @example
     * // Create one BiodataSiswaPPDB
     * const BiodataSiswaPPDB = await prisma.biodataSiswaPPDB.create({
     *   data: {
     *     // ... data to create a BiodataSiswaPPDB
     *   }
     * })
     * 
     */
    create<T extends BiodataSiswaPPDBCreateArgs>(args: SelectSubset<T, BiodataSiswaPPDBCreateArgs<ExtArgs>>): Prisma__BiodataSiswaPPDBClient<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BiodataSiswaPPDBS.
     * @param {BiodataSiswaPPDBCreateManyArgs} args - Arguments to create many BiodataSiswaPPDBS.
     * @example
     * // Create many BiodataSiswaPPDBS
     * const biodataSiswaPPDB = await prisma.biodataSiswaPPDB.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BiodataSiswaPPDBCreateManyArgs>(args?: SelectSubset<T, BiodataSiswaPPDBCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BiodataSiswaPPDB.
     * @param {BiodataSiswaPPDBDeleteArgs} args - Arguments to delete one BiodataSiswaPPDB.
     * @example
     * // Delete one BiodataSiswaPPDB
     * const BiodataSiswaPPDB = await prisma.biodataSiswaPPDB.delete({
     *   where: {
     *     // ... filter to delete one BiodataSiswaPPDB
     *   }
     * })
     * 
     */
    delete<T extends BiodataSiswaPPDBDeleteArgs>(args: SelectSubset<T, BiodataSiswaPPDBDeleteArgs<ExtArgs>>): Prisma__BiodataSiswaPPDBClient<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BiodataSiswaPPDB.
     * @param {BiodataSiswaPPDBUpdateArgs} args - Arguments to update one BiodataSiswaPPDB.
     * @example
     * // Update one BiodataSiswaPPDB
     * const biodataSiswaPPDB = await prisma.biodataSiswaPPDB.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BiodataSiswaPPDBUpdateArgs>(args: SelectSubset<T, BiodataSiswaPPDBUpdateArgs<ExtArgs>>): Prisma__BiodataSiswaPPDBClient<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BiodataSiswaPPDBS.
     * @param {BiodataSiswaPPDBDeleteManyArgs} args - Arguments to filter BiodataSiswaPPDBS to delete.
     * @example
     * // Delete a few BiodataSiswaPPDBS
     * const { count } = await prisma.biodataSiswaPPDB.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BiodataSiswaPPDBDeleteManyArgs>(args?: SelectSubset<T, BiodataSiswaPPDBDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiodataSiswaPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataSiswaPPDBUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BiodataSiswaPPDBS
     * const biodataSiswaPPDB = await prisma.biodataSiswaPPDB.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BiodataSiswaPPDBUpdateManyArgs>(args: SelectSubset<T, BiodataSiswaPPDBUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BiodataSiswaPPDB.
     * @param {BiodataSiswaPPDBUpsertArgs} args - Arguments to update or create a BiodataSiswaPPDB.
     * @example
     * // Update or create a BiodataSiswaPPDB
     * const biodataSiswaPPDB = await prisma.biodataSiswaPPDB.upsert({
     *   create: {
     *     // ... data to create a BiodataSiswaPPDB
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BiodataSiswaPPDB we want to update
     *   }
     * })
     */
    upsert<T extends BiodataSiswaPPDBUpsertArgs>(args: SelectSubset<T, BiodataSiswaPPDBUpsertArgs<ExtArgs>>): Prisma__BiodataSiswaPPDBClient<$Result.GetResult<Prisma.$BiodataSiswaPPDBPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BiodataSiswaPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataSiswaPPDBCountArgs} args - Arguments to filter BiodataSiswaPPDBS to count.
     * @example
     * // Count the number of BiodataSiswaPPDBS
     * const count = await prisma.biodataSiswaPPDB.count({
     *   where: {
     *     // ... the filter for the BiodataSiswaPPDBS we want to count
     *   }
     * })
    **/
    count<T extends BiodataSiswaPPDBCountArgs>(
      args?: Subset<T, BiodataSiswaPPDBCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiodataSiswaPPDBCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BiodataSiswaPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataSiswaPPDBAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BiodataSiswaPPDBAggregateArgs>(args: Subset<T, BiodataSiswaPPDBAggregateArgs>): Prisma.PrismaPromise<GetBiodataSiswaPPDBAggregateType<T>>

    /**
     * Group by BiodataSiswaPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataSiswaPPDBGroupByArgs} args - Group by arguments.
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
      T extends BiodataSiswaPPDBGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BiodataSiswaPPDBGroupByArgs['orderBy'] }
        : { orderBy?: BiodataSiswaPPDBGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BiodataSiswaPPDBGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiodataSiswaPPDBGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BiodataSiswaPPDB model
   */
  readonly fields: BiodataSiswaPPDBFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BiodataSiswaPPDB.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BiodataSiswaPPDBClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pendaftaran<T extends PendaftaranPPDBDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PendaftaranPPDBDefaultArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BiodataSiswaPPDB model
   */
  interface BiodataSiswaPPDBFieldRefs {
    readonly id: FieldRef<"BiodataSiswaPPDB", 'String'>
    readonly pendaftaranId: FieldRef<"BiodataSiswaPPDB", 'String'>
    readonly namaLengkap: FieldRef<"BiodataSiswaPPDB", 'String'>
    readonly nisn: FieldRef<"BiodataSiswaPPDB", 'String'>
    readonly nik: FieldRef<"BiodataSiswaPPDB", 'String'>
    readonly tempatLahir: FieldRef<"BiodataSiswaPPDB", 'String'>
    readonly tanggalLahir: FieldRef<"BiodataSiswaPPDB", 'DateTime'>
    readonly jenisKelamin: FieldRef<"BiodataSiswaPPDB", 'JenisKelamin'>
    readonly agama: FieldRef<"BiodataSiswaPPDB", 'String'>
    readonly alamat: FieldRef<"BiodataSiswaPPDB", 'String'>
    readonly asalSekolah: FieldRef<"BiodataSiswaPPDB", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BiodataSiswaPPDB findUnique
   */
  export type BiodataSiswaPPDBFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which BiodataSiswaPPDB to fetch.
     */
    where: BiodataSiswaPPDBWhereUniqueInput
  }

  /**
   * BiodataSiswaPPDB findUniqueOrThrow
   */
  export type BiodataSiswaPPDBFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which BiodataSiswaPPDB to fetch.
     */
    where: BiodataSiswaPPDBWhereUniqueInput
  }

  /**
   * BiodataSiswaPPDB findFirst
   */
  export type BiodataSiswaPPDBFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which BiodataSiswaPPDB to fetch.
     */
    where?: BiodataSiswaPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiodataSiswaPPDBS to fetch.
     */
    orderBy?: BiodataSiswaPPDBOrderByWithRelationInput | BiodataSiswaPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiodataSiswaPPDBS.
     */
    cursor?: BiodataSiswaPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiodataSiswaPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiodataSiswaPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiodataSiswaPPDBS.
     */
    distinct?: BiodataSiswaPPDBScalarFieldEnum | BiodataSiswaPPDBScalarFieldEnum[]
  }

  /**
   * BiodataSiswaPPDB findFirstOrThrow
   */
  export type BiodataSiswaPPDBFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which BiodataSiswaPPDB to fetch.
     */
    where?: BiodataSiswaPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiodataSiswaPPDBS to fetch.
     */
    orderBy?: BiodataSiswaPPDBOrderByWithRelationInput | BiodataSiswaPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiodataSiswaPPDBS.
     */
    cursor?: BiodataSiswaPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiodataSiswaPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiodataSiswaPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiodataSiswaPPDBS.
     */
    distinct?: BiodataSiswaPPDBScalarFieldEnum | BiodataSiswaPPDBScalarFieldEnum[]
  }

  /**
   * BiodataSiswaPPDB findMany
   */
  export type BiodataSiswaPPDBFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which BiodataSiswaPPDBS to fetch.
     */
    where?: BiodataSiswaPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiodataSiswaPPDBS to fetch.
     */
    orderBy?: BiodataSiswaPPDBOrderByWithRelationInput | BiodataSiswaPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BiodataSiswaPPDBS.
     */
    cursor?: BiodataSiswaPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiodataSiswaPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiodataSiswaPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiodataSiswaPPDBS.
     */
    distinct?: BiodataSiswaPPDBScalarFieldEnum | BiodataSiswaPPDBScalarFieldEnum[]
  }

  /**
   * BiodataSiswaPPDB create
   */
  export type BiodataSiswaPPDBCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    /**
     * The data needed to create a BiodataSiswaPPDB.
     */
    data: XOR<BiodataSiswaPPDBCreateInput, BiodataSiswaPPDBUncheckedCreateInput>
  }

  /**
   * BiodataSiswaPPDB createMany
   */
  export type BiodataSiswaPPDBCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BiodataSiswaPPDBS.
     */
    data: BiodataSiswaPPDBCreateManyInput | BiodataSiswaPPDBCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiodataSiswaPPDB update
   */
  export type BiodataSiswaPPDBUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    /**
     * The data needed to update a BiodataSiswaPPDB.
     */
    data: XOR<BiodataSiswaPPDBUpdateInput, BiodataSiswaPPDBUncheckedUpdateInput>
    /**
     * Choose, which BiodataSiswaPPDB to update.
     */
    where: BiodataSiswaPPDBWhereUniqueInput
  }

  /**
   * BiodataSiswaPPDB updateMany
   */
  export type BiodataSiswaPPDBUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BiodataSiswaPPDBS.
     */
    data: XOR<BiodataSiswaPPDBUpdateManyMutationInput, BiodataSiswaPPDBUncheckedUpdateManyInput>
    /**
     * Filter which BiodataSiswaPPDBS to update
     */
    where?: BiodataSiswaPPDBWhereInput
    /**
     * Limit how many BiodataSiswaPPDBS to update.
     */
    limit?: number
  }

  /**
   * BiodataSiswaPPDB upsert
   */
  export type BiodataSiswaPPDBUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    /**
     * The filter to search for the BiodataSiswaPPDB to update in case it exists.
     */
    where: BiodataSiswaPPDBWhereUniqueInput
    /**
     * In case the BiodataSiswaPPDB found by the `where` argument doesn't exist, create a new BiodataSiswaPPDB with this data.
     */
    create: XOR<BiodataSiswaPPDBCreateInput, BiodataSiswaPPDBUncheckedCreateInput>
    /**
     * In case the BiodataSiswaPPDB was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BiodataSiswaPPDBUpdateInput, BiodataSiswaPPDBUncheckedUpdateInput>
  }

  /**
   * BiodataSiswaPPDB delete
   */
  export type BiodataSiswaPPDBDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
    /**
     * Filter which BiodataSiswaPPDB to delete.
     */
    where: BiodataSiswaPPDBWhereUniqueInput
  }

  /**
   * BiodataSiswaPPDB deleteMany
   */
  export type BiodataSiswaPPDBDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiodataSiswaPPDBS to delete
     */
    where?: BiodataSiswaPPDBWhereInput
    /**
     * Limit how many BiodataSiswaPPDBS to delete.
     */
    limit?: number
  }

  /**
   * BiodataSiswaPPDB without action
   */
  export type BiodataSiswaPPDBDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiodataSiswaPPDB
     */
    select?: BiodataSiswaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiodataSiswaPPDB
     */
    omit?: BiodataSiswaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataSiswaPPDBInclude<ExtArgs> | null
  }


  /**
   * Model DataOrangTuaPPDB
   */

  export type AggregateDataOrangTuaPPDB = {
    _count: DataOrangTuaPPDBCountAggregateOutputType | null
    _min: DataOrangTuaPPDBMinAggregateOutputType | null
    _max: DataOrangTuaPPDBMaxAggregateOutputType | null
  }

  export type DataOrangTuaPPDBMinAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    namaAyah: string | null
    pekerjaanAyah: string | null
    noHpAyah: string | null
    namaIbu: string | null
    pekerjaanIbu: string | null
    noHpIbu: string | null
    alamatOrangTua: string | null
  }

  export type DataOrangTuaPPDBMaxAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    namaAyah: string | null
    pekerjaanAyah: string | null
    noHpAyah: string | null
    namaIbu: string | null
    pekerjaanIbu: string | null
    noHpIbu: string | null
    alamatOrangTua: string | null
  }

  export type DataOrangTuaPPDBCountAggregateOutputType = {
    id: number
    pendaftaranId: number
    namaAyah: number
    pekerjaanAyah: number
    noHpAyah: number
    namaIbu: number
    pekerjaanIbu: number
    noHpIbu: number
    alamatOrangTua: number
    _all: number
  }


  export type DataOrangTuaPPDBMinAggregateInputType = {
    id?: true
    pendaftaranId?: true
    namaAyah?: true
    pekerjaanAyah?: true
    noHpAyah?: true
    namaIbu?: true
    pekerjaanIbu?: true
    noHpIbu?: true
    alamatOrangTua?: true
  }

  export type DataOrangTuaPPDBMaxAggregateInputType = {
    id?: true
    pendaftaranId?: true
    namaAyah?: true
    pekerjaanAyah?: true
    noHpAyah?: true
    namaIbu?: true
    pekerjaanIbu?: true
    noHpIbu?: true
    alamatOrangTua?: true
  }

  export type DataOrangTuaPPDBCountAggregateInputType = {
    id?: true
    pendaftaranId?: true
    namaAyah?: true
    pekerjaanAyah?: true
    noHpAyah?: true
    namaIbu?: true
    pekerjaanIbu?: true
    noHpIbu?: true
    alamatOrangTua?: true
    _all?: true
  }

  export type DataOrangTuaPPDBAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataOrangTuaPPDB to aggregate.
     */
    where?: DataOrangTuaPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataOrangTuaPPDBS to fetch.
     */
    orderBy?: DataOrangTuaPPDBOrderByWithRelationInput | DataOrangTuaPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataOrangTuaPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataOrangTuaPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataOrangTuaPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataOrangTuaPPDBS
    **/
    _count?: true | DataOrangTuaPPDBCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataOrangTuaPPDBMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataOrangTuaPPDBMaxAggregateInputType
  }

  export type GetDataOrangTuaPPDBAggregateType<T extends DataOrangTuaPPDBAggregateArgs> = {
        [P in keyof T & keyof AggregateDataOrangTuaPPDB]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataOrangTuaPPDB[P]>
      : GetScalarType<T[P], AggregateDataOrangTuaPPDB[P]>
  }




  export type DataOrangTuaPPDBGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataOrangTuaPPDBWhereInput
    orderBy?: DataOrangTuaPPDBOrderByWithAggregationInput | DataOrangTuaPPDBOrderByWithAggregationInput[]
    by: DataOrangTuaPPDBScalarFieldEnum[] | DataOrangTuaPPDBScalarFieldEnum
    having?: DataOrangTuaPPDBScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataOrangTuaPPDBCountAggregateInputType | true
    _min?: DataOrangTuaPPDBMinAggregateInputType
    _max?: DataOrangTuaPPDBMaxAggregateInputType
  }

  export type DataOrangTuaPPDBGroupByOutputType = {
    id: string
    pendaftaranId: string
    namaAyah: string
    pekerjaanAyah: string | null
    noHpAyah: string | null
    namaIbu: string
    pekerjaanIbu: string | null
    noHpIbu: string | null
    alamatOrangTua: string | null
    _count: DataOrangTuaPPDBCountAggregateOutputType | null
    _min: DataOrangTuaPPDBMinAggregateOutputType | null
    _max: DataOrangTuaPPDBMaxAggregateOutputType | null
  }

  type GetDataOrangTuaPPDBGroupByPayload<T extends DataOrangTuaPPDBGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataOrangTuaPPDBGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataOrangTuaPPDBGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataOrangTuaPPDBGroupByOutputType[P]>
            : GetScalarType<T[P], DataOrangTuaPPDBGroupByOutputType[P]>
        }
      >
    >


  export type DataOrangTuaPPDBSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pendaftaranId?: boolean
    namaAyah?: boolean
    pekerjaanAyah?: boolean
    noHpAyah?: boolean
    namaIbu?: boolean
    pekerjaanIbu?: boolean
    noHpIbu?: boolean
    alamatOrangTua?: boolean
    pendaftaran?: boolean | PendaftaranPPDBDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataOrangTuaPPDB"]>



  export type DataOrangTuaPPDBSelectScalar = {
    id?: boolean
    pendaftaranId?: boolean
    namaAyah?: boolean
    pekerjaanAyah?: boolean
    noHpAyah?: boolean
    namaIbu?: boolean
    pekerjaanIbu?: boolean
    noHpIbu?: boolean
    alamatOrangTua?: boolean
  }

  export type DataOrangTuaPPDBOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pendaftaranId" | "namaAyah" | "pekerjaanAyah" | "noHpAyah" | "namaIbu" | "pekerjaanIbu" | "noHpIbu" | "alamatOrangTua", ExtArgs["result"]["dataOrangTuaPPDB"]>
  export type DataOrangTuaPPDBInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranPPDBDefaultArgs<ExtArgs>
  }

  export type $DataOrangTuaPPDBPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataOrangTuaPPDB"
    objects: {
      pendaftaran: Prisma.$PendaftaranPPDBPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pendaftaranId: string
      namaAyah: string
      pekerjaanAyah: string | null
      noHpAyah: string | null
      namaIbu: string
      pekerjaanIbu: string | null
      noHpIbu: string | null
      alamatOrangTua: string | null
    }, ExtArgs["result"]["dataOrangTuaPPDB"]>
    composites: {}
  }

  type DataOrangTuaPPDBGetPayload<S extends boolean | null | undefined | DataOrangTuaPPDBDefaultArgs> = $Result.GetResult<Prisma.$DataOrangTuaPPDBPayload, S>

  type DataOrangTuaPPDBCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataOrangTuaPPDBFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataOrangTuaPPDBCountAggregateInputType | true
    }

  export interface DataOrangTuaPPDBDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataOrangTuaPPDB'], meta: { name: 'DataOrangTuaPPDB' } }
    /**
     * Find zero or one DataOrangTuaPPDB that matches the filter.
     * @param {DataOrangTuaPPDBFindUniqueArgs} args - Arguments to find a DataOrangTuaPPDB
     * @example
     * // Get one DataOrangTuaPPDB
     * const dataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataOrangTuaPPDBFindUniqueArgs>(args: SelectSubset<T, DataOrangTuaPPDBFindUniqueArgs<ExtArgs>>): Prisma__DataOrangTuaPPDBClient<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataOrangTuaPPDB that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataOrangTuaPPDBFindUniqueOrThrowArgs} args - Arguments to find a DataOrangTuaPPDB
     * @example
     * // Get one DataOrangTuaPPDB
     * const dataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataOrangTuaPPDBFindUniqueOrThrowArgs>(args: SelectSubset<T, DataOrangTuaPPDBFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataOrangTuaPPDBClient<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataOrangTuaPPDB that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataOrangTuaPPDBFindFirstArgs} args - Arguments to find a DataOrangTuaPPDB
     * @example
     * // Get one DataOrangTuaPPDB
     * const dataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataOrangTuaPPDBFindFirstArgs>(args?: SelectSubset<T, DataOrangTuaPPDBFindFirstArgs<ExtArgs>>): Prisma__DataOrangTuaPPDBClient<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataOrangTuaPPDB that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataOrangTuaPPDBFindFirstOrThrowArgs} args - Arguments to find a DataOrangTuaPPDB
     * @example
     * // Get one DataOrangTuaPPDB
     * const dataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataOrangTuaPPDBFindFirstOrThrowArgs>(args?: SelectSubset<T, DataOrangTuaPPDBFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataOrangTuaPPDBClient<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataOrangTuaPPDBS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataOrangTuaPPDBFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataOrangTuaPPDBS
     * const dataOrangTuaPPDBS = await prisma.dataOrangTuaPPDB.findMany()
     * 
     * // Get first 10 DataOrangTuaPPDBS
     * const dataOrangTuaPPDBS = await prisma.dataOrangTuaPPDB.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataOrangTuaPPDBWithIdOnly = await prisma.dataOrangTuaPPDB.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataOrangTuaPPDBFindManyArgs>(args?: SelectSubset<T, DataOrangTuaPPDBFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataOrangTuaPPDB.
     * @param {DataOrangTuaPPDBCreateArgs} args - Arguments to create a DataOrangTuaPPDB.
     * @example
     * // Create one DataOrangTuaPPDB
     * const DataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.create({
     *   data: {
     *     // ... data to create a DataOrangTuaPPDB
     *   }
     * })
     * 
     */
    create<T extends DataOrangTuaPPDBCreateArgs>(args: SelectSubset<T, DataOrangTuaPPDBCreateArgs<ExtArgs>>): Prisma__DataOrangTuaPPDBClient<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataOrangTuaPPDBS.
     * @param {DataOrangTuaPPDBCreateManyArgs} args - Arguments to create many DataOrangTuaPPDBS.
     * @example
     * // Create many DataOrangTuaPPDBS
     * const dataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataOrangTuaPPDBCreateManyArgs>(args?: SelectSubset<T, DataOrangTuaPPDBCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataOrangTuaPPDB.
     * @param {DataOrangTuaPPDBDeleteArgs} args - Arguments to delete one DataOrangTuaPPDB.
     * @example
     * // Delete one DataOrangTuaPPDB
     * const DataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.delete({
     *   where: {
     *     // ... filter to delete one DataOrangTuaPPDB
     *   }
     * })
     * 
     */
    delete<T extends DataOrangTuaPPDBDeleteArgs>(args: SelectSubset<T, DataOrangTuaPPDBDeleteArgs<ExtArgs>>): Prisma__DataOrangTuaPPDBClient<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataOrangTuaPPDB.
     * @param {DataOrangTuaPPDBUpdateArgs} args - Arguments to update one DataOrangTuaPPDB.
     * @example
     * // Update one DataOrangTuaPPDB
     * const dataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataOrangTuaPPDBUpdateArgs>(args: SelectSubset<T, DataOrangTuaPPDBUpdateArgs<ExtArgs>>): Prisma__DataOrangTuaPPDBClient<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataOrangTuaPPDBS.
     * @param {DataOrangTuaPPDBDeleteManyArgs} args - Arguments to filter DataOrangTuaPPDBS to delete.
     * @example
     * // Delete a few DataOrangTuaPPDBS
     * const { count } = await prisma.dataOrangTuaPPDB.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataOrangTuaPPDBDeleteManyArgs>(args?: SelectSubset<T, DataOrangTuaPPDBDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataOrangTuaPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataOrangTuaPPDBUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataOrangTuaPPDBS
     * const dataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataOrangTuaPPDBUpdateManyArgs>(args: SelectSubset<T, DataOrangTuaPPDBUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataOrangTuaPPDB.
     * @param {DataOrangTuaPPDBUpsertArgs} args - Arguments to update or create a DataOrangTuaPPDB.
     * @example
     * // Update or create a DataOrangTuaPPDB
     * const dataOrangTuaPPDB = await prisma.dataOrangTuaPPDB.upsert({
     *   create: {
     *     // ... data to create a DataOrangTuaPPDB
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataOrangTuaPPDB we want to update
     *   }
     * })
     */
    upsert<T extends DataOrangTuaPPDBUpsertArgs>(args: SelectSubset<T, DataOrangTuaPPDBUpsertArgs<ExtArgs>>): Prisma__DataOrangTuaPPDBClient<$Result.GetResult<Prisma.$DataOrangTuaPPDBPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataOrangTuaPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataOrangTuaPPDBCountArgs} args - Arguments to filter DataOrangTuaPPDBS to count.
     * @example
     * // Count the number of DataOrangTuaPPDBS
     * const count = await prisma.dataOrangTuaPPDB.count({
     *   where: {
     *     // ... the filter for the DataOrangTuaPPDBS we want to count
     *   }
     * })
    **/
    count<T extends DataOrangTuaPPDBCountArgs>(
      args?: Subset<T, DataOrangTuaPPDBCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataOrangTuaPPDBCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataOrangTuaPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataOrangTuaPPDBAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataOrangTuaPPDBAggregateArgs>(args: Subset<T, DataOrangTuaPPDBAggregateArgs>): Prisma.PrismaPromise<GetDataOrangTuaPPDBAggregateType<T>>

    /**
     * Group by DataOrangTuaPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataOrangTuaPPDBGroupByArgs} args - Group by arguments.
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
      T extends DataOrangTuaPPDBGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataOrangTuaPPDBGroupByArgs['orderBy'] }
        : { orderBy?: DataOrangTuaPPDBGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataOrangTuaPPDBGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataOrangTuaPPDBGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataOrangTuaPPDB model
   */
  readonly fields: DataOrangTuaPPDBFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataOrangTuaPPDB.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataOrangTuaPPDBClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pendaftaran<T extends PendaftaranPPDBDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PendaftaranPPDBDefaultArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DataOrangTuaPPDB model
   */
  interface DataOrangTuaPPDBFieldRefs {
    readonly id: FieldRef<"DataOrangTuaPPDB", 'String'>
    readonly pendaftaranId: FieldRef<"DataOrangTuaPPDB", 'String'>
    readonly namaAyah: FieldRef<"DataOrangTuaPPDB", 'String'>
    readonly pekerjaanAyah: FieldRef<"DataOrangTuaPPDB", 'String'>
    readonly noHpAyah: FieldRef<"DataOrangTuaPPDB", 'String'>
    readonly namaIbu: FieldRef<"DataOrangTuaPPDB", 'String'>
    readonly pekerjaanIbu: FieldRef<"DataOrangTuaPPDB", 'String'>
    readonly noHpIbu: FieldRef<"DataOrangTuaPPDB", 'String'>
    readonly alamatOrangTua: FieldRef<"DataOrangTuaPPDB", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DataOrangTuaPPDB findUnique
   */
  export type DataOrangTuaPPDBFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DataOrangTuaPPDB to fetch.
     */
    where: DataOrangTuaPPDBWhereUniqueInput
  }

  /**
   * DataOrangTuaPPDB findUniqueOrThrow
   */
  export type DataOrangTuaPPDBFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DataOrangTuaPPDB to fetch.
     */
    where: DataOrangTuaPPDBWhereUniqueInput
  }

  /**
   * DataOrangTuaPPDB findFirst
   */
  export type DataOrangTuaPPDBFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DataOrangTuaPPDB to fetch.
     */
    where?: DataOrangTuaPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataOrangTuaPPDBS to fetch.
     */
    orderBy?: DataOrangTuaPPDBOrderByWithRelationInput | DataOrangTuaPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataOrangTuaPPDBS.
     */
    cursor?: DataOrangTuaPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataOrangTuaPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataOrangTuaPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataOrangTuaPPDBS.
     */
    distinct?: DataOrangTuaPPDBScalarFieldEnum | DataOrangTuaPPDBScalarFieldEnum[]
  }

  /**
   * DataOrangTuaPPDB findFirstOrThrow
   */
  export type DataOrangTuaPPDBFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DataOrangTuaPPDB to fetch.
     */
    where?: DataOrangTuaPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataOrangTuaPPDBS to fetch.
     */
    orderBy?: DataOrangTuaPPDBOrderByWithRelationInput | DataOrangTuaPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataOrangTuaPPDBS.
     */
    cursor?: DataOrangTuaPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataOrangTuaPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataOrangTuaPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataOrangTuaPPDBS.
     */
    distinct?: DataOrangTuaPPDBScalarFieldEnum | DataOrangTuaPPDBScalarFieldEnum[]
  }

  /**
   * DataOrangTuaPPDB findMany
   */
  export type DataOrangTuaPPDBFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DataOrangTuaPPDBS to fetch.
     */
    where?: DataOrangTuaPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataOrangTuaPPDBS to fetch.
     */
    orderBy?: DataOrangTuaPPDBOrderByWithRelationInput | DataOrangTuaPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataOrangTuaPPDBS.
     */
    cursor?: DataOrangTuaPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataOrangTuaPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataOrangTuaPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataOrangTuaPPDBS.
     */
    distinct?: DataOrangTuaPPDBScalarFieldEnum | DataOrangTuaPPDBScalarFieldEnum[]
  }

  /**
   * DataOrangTuaPPDB create
   */
  export type DataOrangTuaPPDBCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    /**
     * The data needed to create a DataOrangTuaPPDB.
     */
    data: XOR<DataOrangTuaPPDBCreateInput, DataOrangTuaPPDBUncheckedCreateInput>
  }

  /**
   * DataOrangTuaPPDB createMany
   */
  export type DataOrangTuaPPDBCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataOrangTuaPPDBS.
     */
    data: DataOrangTuaPPDBCreateManyInput | DataOrangTuaPPDBCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataOrangTuaPPDB update
   */
  export type DataOrangTuaPPDBUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    /**
     * The data needed to update a DataOrangTuaPPDB.
     */
    data: XOR<DataOrangTuaPPDBUpdateInput, DataOrangTuaPPDBUncheckedUpdateInput>
    /**
     * Choose, which DataOrangTuaPPDB to update.
     */
    where: DataOrangTuaPPDBWhereUniqueInput
  }

  /**
   * DataOrangTuaPPDB updateMany
   */
  export type DataOrangTuaPPDBUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataOrangTuaPPDBS.
     */
    data: XOR<DataOrangTuaPPDBUpdateManyMutationInput, DataOrangTuaPPDBUncheckedUpdateManyInput>
    /**
     * Filter which DataOrangTuaPPDBS to update
     */
    where?: DataOrangTuaPPDBWhereInput
    /**
     * Limit how many DataOrangTuaPPDBS to update.
     */
    limit?: number
  }

  /**
   * DataOrangTuaPPDB upsert
   */
  export type DataOrangTuaPPDBUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    /**
     * The filter to search for the DataOrangTuaPPDB to update in case it exists.
     */
    where: DataOrangTuaPPDBWhereUniqueInput
    /**
     * In case the DataOrangTuaPPDB found by the `where` argument doesn't exist, create a new DataOrangTuaPPDB with this data.
     */
    create: XOR<DataOrangTuaPPDBCreateInput, DataOrangTuaPPDBUncheckedCreateInput>
    /**
     * In case the DataOrangTuaPPDB was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataOrangTuaPPDBUpdateInput, DataOrangTuaPPDBUncheckedUpdateInput>
  }

  /**
   * DataOrangTuaPPDB delete
   */
  export type DataOrangTuaPPDBDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
    /**
     * Filter which DataOrangTuaPPDB to delete.
     */
    where: DataOrangTuaPPDBWhereUniqueInput
  }

  /**
   * DataOrangTuaPPDB deleteMany
   */
  export type DataOrangTuaPPDBDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataOrangTuaPPDBS to delete
     */
    where?: DataOrangTuaPPDBWhereInput
    /**
     * Limit how many DataOrangTuaPPDBS to delete.
     */
    limit?: number
  }

  /**
   * DataOrangTuaPPDB without action
   */
  export type DataOrangTuaPPDBDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataOrangTuaPPDB
     */
    select?: DataOrangTuaPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataOrangTuaPPDB
     */
    omit?: DataOrangTuaPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataOrangTuaPPDBInclude<ExtArgs> | null
  }


  /**
   * Model DokumenPPDB
   */

  export type AggregateDokumenPPDB = {
    _count: DokumenPPDBCountAggregateOutputType | null
    _min: DokumenPPDBMinAggregateOutputType | null
    _max: DokumenPPDBMaxAggregateOutputType | null
  }

  export type DokumenPPDBMinAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    jenisDokumen: $Enums.JenisDokumen | null
    fileUrl: string | null
    isVerified: boolean | null
  }

  export type DokumenPPDBMaxAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    jenisDokumen: $Enums.JenisDokumen | null
    fileUrl: string | null
    isVerified: boolean | null
  }

  export type DokumenPPDBCountAggregateOutputType = {
    id: number
    pendaftaranId: number
    jenisDokumen: number
    fileUrl: number
    isVerified: number
    _all: number
  }


  export type DokumenPPDBMinAggregateInputType = {
    id?: true
    pendaftaranId?: true
    jenisDokumen?: true
    fileUrl?: true
    isVerified?: true
  }

  export type DokumenPPDBMaxAggregateInputType = {
    id?: true
    pendaftaranId?: true
    jenisDokumen?: true
    fileUrl?: true
    isVerified?: true
  }

  export type DokumenPPDBCountAggregateInputType = {
    id?: true
    pendaftaranId?: true
    jenisDokumen?: true
    fileUrl?: true
    isVerified?: true
    _all?: true
  }

  export type DokumenPPDBAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DokumenPPDB to aggregate.
     */
    where?: DokumenPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DokumenPPDBS to fetch.
     */
    orderBy?: DokumenPPDBOrderByWithRelationInput | DokumenPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DokumenPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DokumenPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DokumenPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DokumenPPDBS
    **/
    _count?: true | DokumenPPDBCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DokumenPPDBMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DokumenPPDBMaxAggregateInputType
  }

  export type GetDokumenPPDBAggregateType<T extends DokumenPPDBAggregateArgs> = {
        [P in keyof T & keyof AggregateDokumenPPDB]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDokumenPPDB[P]>
      : GetScalarType<T[P], AggregateDokumenPPDB[P]>
  }




  export type DokumenPPDBGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumenPPDBWhereInput
    orderBy?: DokumenPPDBOrderByWithAggregationInput | DokumenPPDBOrderByWithAggregationInput[]
    by: DokumenPPDBScalarFieldEnum[] | DokumenPPDBScalarFieldEnum
    having?: DokumenPPDBScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DokumenPPDBCountAggregateInputType | true
    _min?: DokumenPPDBMinAggregateInputType
    _max?: DokumenPPDBMaxAggregateInputType
  }

  export type DokumenPPDBGroupByOutputType = {
    id: string
    pendaftaranId: string
    jenisDokumen: $Enums.JenisDokumen
    fileUrl: string
    isVerified: boolean
    _count: DokumenPPDBCountAggregateOutputType | null
    _min: DokumenPPDBMinAggregateOutputType | null
    _max: DokumenPPDBMaxAggregateOutputType | null
  }

  type GetDokumenPPDBGroupByPayload<T extends DokumenPPDBGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DokumenPPDBGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DokumenPPDBGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DokumenPPDBGroupByOutputType[P]>
            : GetScalarType<T[P], DokumenPPDBGroupByOutputType[P]>
        }
      >
    >


  export type DokumenPPDBSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pendaftaranId?: boolean
    jenisDokumen?: boolean
    fileUrl?: boolean
    isVerified?: boolean
    pendaftaran?: boolean | PendaftaranPPDBDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumenPPDB"]>



  export type DokumenPPDBSelectScalar = {
    id?: boolean
    pendaftaranId?: boolean
    jenisDokumen?: boolean
    fileUrl?: boolean
    isVerified?: boolean
  }

  export type DokumenPPDBOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pendaftaranId" | "jenisDokumen" | "fileUrl" | "isVerified", ExtArgs["result"]["dokumenPPDB"]>
  export type DokumenPPDBInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranPPDBDefaultArgs<ExtArgs>
  }

  export type $DokumenPPDBPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DokumenPPDB"
    objects: {
      pendaftaran: Prisma.$PendaftaranPPDBPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pendaftaranId: string
      jenisDokumen: $Enums.JenisDokumen
      fileUrl: string
      isVerified: boolean
    }, ExtArgs["result"]["dokumenPPDB"]>
    composites: {}
  }

  type DokumenPPDBGetPayload<S extends boolean | null | undefined | DokumenPPDBDefaultArgs> = $Result.GetResult<Prisma.$DokumenPPDBPayload, S>

  type DokumenPPDBCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DokumenPPDBFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DokumenPPDBCountAggregateInputType | true
    }

  export interface DokumenPPDBDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DokumenPPDB'], meta: { name: 'DokumenPPDB' } }
    /**
     * Find zero or one DokumenPPDB that matches the filter.
     * @param {DokumenPPDBFindUniqueArgs} args - Arguments to find a DokumenPPDB
     * @example
     * // Get one DokumenPPDB
     * const dokumenPPDB = await prisma.dokumenPPDB.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DokumenPPDBFindUniqueArgs>(args: SelectSubset<T, DokumenPPDBFindUniqueArgs<ExtArgs>>): Prisma__DokumenPPDBClient<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DokumenPPDB that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DokumenPPDBFindUniqueOrThrowArgs} args - Arguments to find a DokumenPPDB
     * @example
     * // Get one DokumenPPDB
     * const dokumenPPDB = await prisma.dokumenPPDB.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DokumenPPDBFindUniqueOrThrowArgs>(args: SelectSubset<T, DokumenPPDBFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DokumenPPDBClient<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DokumenPPDB that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPPDBFindFirstArgs} args - Arguments to find a DokumenPPDB
     * @example
     * // Get one DokumenPPDB
     * const dokumenPPDB = await prisma.dokumenPPDB.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DokumenPPDBFindFirstArgs>(args?: SelectSubset<T, DokumenPPDBFindFirstArgs<ExtArgs>>): Prisma__DokumenPPDBClient<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DokumenPPDB that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPPDBFindFirstOrThrowArgs} args - Arguments to find a DokumenPPDB
     * @example
     * // Get one DokumenPPDB
     * const dokumenPPDB = await prisma.dokumenPPDB.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DokumenPPDBFindFirstOrThrowArgs>(args?: SelectSubset<T, DokumenPPDBFindFirstOrThrowArgs<ExtArgs>>): Prisma__DokumenPPDBClient<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DokumenPPDBS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPPDBFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DokumenPPDBS
     * const dokumenPPDBS = await prisma.dokumenPPDB.findMany()
     * 
     * // Get first 10 DokumenPPDBS
     * const dokumenPPDBS = await prisma.dokumenPPDB.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dokumenPPDBWithIdOnly = await prisma.dokumenPPDB.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DokumenPPDBFindManyArgs>(args?: SelectSubset<T, DokumenPPDBFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DokumenPPDB.
     * @param {DokumenPPDBCreateArgs} args - Arguments to create a DokumenPPDB.
     * @example
     * // Create one DokumenPPDB
     * const DokumenPPDB = await prisma.dokumenPPDB.create({
     *   data: {
     *     // ... data to create a DokumenPPDB
     *   }
     * })
     * 
     */
    create<T extends DokumenPPDBCreateArgs>(args: SelectSubset<T, DokumenPPDBCreateArgs<ExtArgs>>): Prisma__DokumenPPDBClient<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DokumenPPDBS.
     * @param {DokumenPPDBCreateManyArgs} args - Arguments to create many DokumenPPDBS.
     * @example
     * // Create many DokumenPPDBS
     * const dokumenPPDB = await prisma.dokumenPPDB.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DokumenPPDBCreateManyArgs>(args?: SelectSubset<T, DokumenPPDBCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DokumenPPDB.
     * @param {DokumenPPDBDeleteArgs} args - Arguments to delete one DokumenPPDB.
     * @example
     * // Delete one DokumenPPDB
     * const DokumenPPDB = await prisma.dokumenPPDB.delete({
     *   where: {
     *     // ... filter to delete one DokumenPPDB
     *   }
     * })
     * 
     */
    delete<T extends DokumenPPDBDeleteArgs>(args: SelectSubset<T, DokumenPPDBDeleteArgs<ExtArgs>>): Prisma__DokumenPPDBClient<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DokumenPPDB.
     * @param {DokumenPPDBUpdateArgs} args - Arguments to update one DokumenPPDB.
     * @example
     * // Update one DokumenPPDB
     * const dokumenPPDB = await prisma.dokumenPPDB.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DokumenPPDBUpdateArgs>(args: SelectSubset<T, DokumenPPDBUpdateArgs<ExtArgs>>): Prisma__DokumenPPDBClient<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DokumenPPDBS.
     * @param {DokumenPPDBDeleteManyArgs} args - Arguments to filter DokumenPPDBS to delete.
     * @example
     * // Delete a few DokumenPPDBS
     * const { count } = await prisma.dokumenPPDB.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DokumenPPDBDeleteManyArgs>(args?: SelectSubset<T, DokumenPPDBDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DokumenPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPPDBUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DokumenPPDBS
     * const dokumenPPDB = await prisma.dokumenPPDB.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DokumenPPDBUpdateManyArgs>(args: SelectSubset<T, DokumenPPDBUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DokumenPPDB.
     * @param {DokumenPPDBUpsertArgs} args - Arguments to update or create a DokumenPPDB.
     * @example
     * // Update or create a DokumenPPDB
     * const dokumenPPDB = await prisma.dokumenPPDB.upsert({
     *   create: {
     *     // ... data to create a DokumenPPDB
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DokumenPPDB we want to update
     *   }
     * })
     */
    upsert<T extends DokumenPPDBUpsertArgs>(args: SelectSubset<T, DokumenPPDBUpsertArgs<ExtArgs>>): Prisma__DokumenPPDBClient<$Result.GetResult<Prisma.$DokumenPPDBPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DokumenPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPPDBCountArgs} args - Arguments to filter DokumenPPDBS to count.
     * @example
     * // Count the number of DokumenPPDBS
     * const count = await prisma.dokumenPPDB.count({
     *   where: {
     *     // ... the filter for the DokumenPPDBS we want to count
     *   }
     * })
    **/
    count<T extends DokumenPPDBCountArgs>(
      args?: Subset<T, DokumenPPDBCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DokumenPPDBCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DokumenPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPPDBAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DokumenPPDBAggregateArgs>(args: Subset<T, DokumenPPDBAggregateArgs>): Prisma.PrismaPromise<GetDokumenPPDBAggregateType<T>>

    /**
     * Group by DokumenPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenPPDBGroupByArgs} args - Group by arguments.
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
      T extends DokumenPPDBGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DokumenPPDBGroupByArgs['orderBy'] }
        : { orderBy?: DokumenPPDBGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DokumenPPDBGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDokumenPPDBGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DokumenPPDB model
   */
  readonly fields: DokumenPPDBFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DokumenPPDB.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DokumenPPDBClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pendaftaran<T extends PendaftaranPPDBDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PendaftaranPPDBDefaultArgs<ExtArgs>>): Prisma__PendaftaranPPDBClient<$Result.GetResult<Prisma.$PendaftaranPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DokumenPPDB model
   */
  interface DokumenPPDBFieldRefs {
    readonly id: FieldRef<"DokumenPPDB", 'String'>
    readonly pendaftaranId: FieldRef<"DokumenPPDB", 'String'>
    readonly jenisDokumen: FieldRef<"DokumenPPDB", 'JenisDokumen'>
    readonly fileUrl: FieldRef<"DokumenPPDB", 'String'>
    readonly isVerified: FieldRef<"DokumenPPDB", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DokumenPPDB findUnique
   */
  export type DokumenPPDBFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPPDB to fetch.
     */
    where: DokumenPPDBWhereUniqueInput
  }

  /**
   * DokumenPPDB findUniqueOrThrow
   */
  export type DokumenPPDBFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPPDB to fetch.
     */
    where: DokumenPPDBWhereUniqueInput
  }

  /**
   * DokumenPPDB findFirst
   */
  export type DokumenPPDBFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPPDB to fetch.
     */
    where?: DokumenPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DokumenPPDBS to fetch.
     */
    orderBy?: DokumenPPDBOrderByWithRelationInput | DokumenPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DokumenPPDBS.
     */
    cursor?: DokumenPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DokumenPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DokumenPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DokumenPPDBS.
     */
    distinct?: DokumenPPDBScalarFieldEnum | DokumenPPDBScalarFieldEnum[]
  }

  /**
   * DokumenPPDB findFirstOrThrow
   */
  export type DokumenPPDBFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPPDB to fetch.
     */
    where?: DokumenPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DokumenPPDBS to fetch.
     */
    orderBy?: DokumenPPDBOrderByWithRelationInput | DokumenPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DokumenPPDBS.
     */
    cursor?: DokumenPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DokumenPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DokumenPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DokumenPPDBS.
     */
    distinct?: DokumenPPDBScalarFieldEnum | DokumenPPDBScalarFieldEnum[]
  }

  /**
   * DokumenPPDB findMany
   */
  export type DokumenPPDBFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    /**
     * Filter, which DokumenPPDBS to fetch.
     */
    where?: DokumenPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DokumenPPDBS to fetch.
     */
    orderBy?: DokumenPPDBOrderByWithRelationInput | DokumenPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DokumenPPDBS.
     */
    cursor?: DokumenPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DokumenPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DokumenPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DokumenPPDBS.
     */
    distinct?: DokumenPPDBScalarFieldEnum | DokumenPPDBScalarFieldEnum[]
  }

  /**
   * DokumenPPDB create
   */
  export type DokumenPPDBCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    /**
     * The data needed to create a DokumenPPDB.
     */
    data: XOR<DokumenPPDBCreateInput, DokumenPPDBUncheckedCreateInput>
  }

  /**
   * DokumenPPDB createMany
   */
  export type DokumenPPDBCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DokumenPPDBS.
     */
    data: DokumenPPDBCreateManyInput | DokumenPPDBCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DokumenPPDB update
   */
  export type DokumenPPDBUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    /**
     * The data needed to update a DokumenPPDB.
     */
    data: XOR<DokumenPPDBUpdateInput, DokumenPPDBUncheckedUpdateInput>
    /**
     * Choose, which DokumenPPDB to update.
     */
    where: DokumenPPDBWhereUniqueInput
  }

  /**
   * DokumenPPDB updateMany
   */
  export type DokumenPPDBUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DokumenPPDBS.
     */
    data: XOR<DokumenPPDBUpdateManyMutationInput, DokumenPPDBUncheckedUpdateManyInput>
    /**
     * Filter which DokumenPPDBS to update
     */
    where?: DokumenPPDBWhereInput
    /**
     * Limit how many DokumenPPDBS to update.
     */
    limit?: number
  }

  /**
   * DokumenPPDB upsert
   */
  export type DokumenPPDBUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    /**
     * The filter to search for the DokumenPPDB to update in case it exists.
     */
    where: DokumenPPDBWhereUniqueInput
    /**
     * In case the DokumenPPDB found by the `where` argument doesn't exist, create a new DokumenPPDB with this data.
     */
    create: XOR<DokumenPPDBCreateInput, DokumenPPDBUncheckedCreateInput>
    /**
     * In case the DokumenPPDB was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DokumenPPDBUpdateInput, DokumenPPDBUncheckedUpdateInput>
  }

  /**
   * DokumenPPDB delete
   */
  export type DokumenPPDBDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
    /**
     * Filter which DokumenPPDB to delete.
     */
    where: DokumenPPDBWhereUniqueInput
  }

  /**
   * DokumenPPDB deleteMany
   */
  export type DokumenPPDBDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DokumenPPDBS to delete
     */
    where?: DokumenPPDBWhereInput
    /**
     * Limit how many DokumenPPDBS to delete.
     */
    limit?: number
  }

  /**
   * DokumenPPDB without action
   */
  export type DokumenPPDBDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DokumenPPDB
     */
    select?: DokumenPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DokumenPPDB
     */
    omit?: DokumenPPDBOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenPPDBInclude<ExtArgs> | null
  }


  /**
   * Model PengaturanPPDB
   */

  export type AggregatePengaturanPPDB = {
    _count: PengaturanPPDBCountAggregateOutputType | null
    _min: PengaturanPPDBMinAggregateOutputType | null
    _max: PengaturanPPDBMaxAggregateOutputType | null
  }

  export type PengaturanPPDBMinAggregateOutputType = {
    id: string | null
    tahunAjaran: string | null
    kodeSurat: string | null
    tempatPenerbitan: string | null
    namaKetuaPanitia: string | null
    nipKetuaPanitia: string | null
    namaKepalaMadrasah: string | null
    nipKepalaMadrasah: string | null
    catatanSurat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PengaturanPPDBMaxAggregateOutputType = {
    id: string | null
    tahunAjaran: string | null
    kodeSurat: string | null
    tempatPenerbitan: string | null
    namaKetuaPanitia: string | null
    nipKetuaPanitia: string | null
    namaKepalaMadrasah: string | null
    nipKepalaMadrasah: string | null
    catatanSurat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PengaturanPPDBCountAggregateOutputType = {
    id: number
    tahunAjaran: number
    kodeSurat: number
    tempatPenerbitan: number
    namaKetuaPanitia: number
    nipKetuaPanitia: number
    namaKepalaMadrasah: number
    nipKepalaMadrasah: number
    catatanSurat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PengaturanPPDBMinAggregateInputType = {
    id?: true
    tahunAjaran?: true
    kodeSurat?: true
    tempatPenerbitan?: true
    namaKetuaPanitia?: true
    nipKetuaPanitia?: true
    namaKepalaMadrasah?: true
    nipKepalaMadrasah?: true
    catatanSurat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PengaturanPPDBMaxAggregateInputType = {
    id?: true
    tahunAjaran?: true
    kodeSurat?: true
    tempatPenerbitan?: true
    namaKetuaPanitia?: true
    nipKetuaPanitia?: true
    namaKepalaMadrasah?: true
    nipKepalaMadrasah?: true
    catatanSurat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PengaturanPPDBCountAggregateInputType = {
    id?: true
    tahunAjaran?: true
    kodeSurat?: true
    tempatPenerbitan?: true
    namaKetuaPanitia?: true
    nipKetuaPanitia?: true
    namaKepalaMadrasah?: true
    nipKepalaMadrasah?: true
    catatanSurat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PengaturanPPDBAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PengaturanPPDB to aggregate.
     */
    where?: PengaturanPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengaturanPPDBS to fetch.
     */
    orderBy?: PengaturanPPDBOrderByWithRelationInput | PengaturanPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PengaturanPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengaturanPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengaturanPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PengaturanPPDBS
    **/
    _count?: true | PengaturanPPDBCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengaturanPPDBMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengaturanPPDBMaxAggregateInputType
  }

  export type GetPengaturanPPDBAggregateType<T extends PengaturanPPDBAggregateArgs> = {
        [P in keyof T & keyof AggregatePengaturanPPDB]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengaturanPPDB[P]>
      : GetScalarType<T[P], AggregatePengaturanPPDB[P]>
  }




  export type PengaturanPPDBGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengaturanPPDBWhereInput
    orderBy?: PengaturanPPDBOrderByWithAggregationInput | PengaturanPPDBOrderByWithAggregationInput[]
    by: PengaturanPPDBScalarFieldEnum[] | PengaturanPPDBScalarFieldEnum
    having?: PengaturanPPDBScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengaturanPPDBCountAggregateInputType | true
    _min?: PengaturanPPDBMinAggregateInputType
    _max?: PengaturanPPDBMaxAggregateInputType
  }

  export type PengaturanPPDBGroupByOutputType = {
    id: string
    tahunAjaran: string
    kodeSurat: string
    tempatPenerbitan: string | null
    namaKetuaPanitia: string | null
    nipKetuaPanitia: string | null
    namaKepalaMadrasah: string | null
    nipKepalaMadrasah: string | null
    catatanSurat: string | null
    createdAt: Date
    updatedAt: Date
    _count: PengaturanPPDBCountAggregateOutputType | null
    _min: PengaturanPPDBMinAggregateOutputType | null
    _max: PengaturanPPDBMaxAggregateOutputType | null
  }

  type GetPengaturanPPDBGroupByPayload<T extends PengaturanPPDBGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PengaturanPPDBGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengaturanPPDBGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengaturanPPDBGroupByOutputType[P]>
            : GetScalarType<T[P], PengaturanPPDBGroupByOutputType[P]>
        }
      >
    >


  export type PengaturanPPDBSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tahunAjaran?: boolean
    kodeSurat?: boolean
    tempatPenerbitan?: boolean
    namaKetuaPanitia?: boolean
    nipKetuaPanitia?: boolean
    namaKepalaMadrasah?: boolean
    nipKepalaMadrasah?: boolean
    catatanSurat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pengaturanPPDB"]>



  export type PengaturanPPDBSelectScalar = {
    id?: boolean
    tahunAjaran?: boolean
    kodeSurat?: boolean
    tempatPenerbitan?: boolean
    namaKetuaPanitia?: boolean
    nipKetuaPanitia?: boolean
    namaKepalaMadrasah?: boolean
    nipKepalaMadrasah?: boolean
    catatanSurat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PengaturanPPDBOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tahunAjaran" | "kodeSurat" | "tempatPenerbitan" | "namaKetuaPanitia" | "nipKetuaPanitia" | "namaKepalaMadrasah" | "nipKepalaMadrasah" | "catatanSurat" | "createdAt" | "updatedAt", ExtArgs["result"]["pengaturanPPDB"]>

  export type $PengaturanPPDBPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PengaturanPPDB"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tahunAjaran: string
      kodeSurat: string
      tempatPenerbitan: string | null
      namaKetuaPanitia: string | null
      nipKetuaPanitia: string | null
      namaKepalaMadrasah: string | null
      nipKepalaMadrasah: string | null
      catatanSurat: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pengaturanPPDB"]>
    composites: {}
  }

  type PengaturanPPDBGetPayload<S extends boolean | null | undefined | PengaturanPPDBDefaultArgs> = $Result.GetResult<Prisma.$PengaturanPPDBPayload, S>

  type PengaturanPPDBCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PengaturanPPDBFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PengaturanPPDBCountAggregateInputType | true
    }

  export interface PengaturanPPDBDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PengaturanPPDB'], meta: { name: 'PengaturanPPDB' } }
    /**
     * Find zero or one PengaturanPPDB that matches the filter.
     * @param {PengaturanPPDBFindUniqueArgs} args - Arguments to find a PengaturanPPDB
     * @example
     * // Get one PengaturanPPDB
     * const pengaturanPPDB = await prisma.pengaturanPPDB.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PengaturanPPDBFindUniqueArgs>(args: SelectSubset<T, PengaturanPPDBFindUniqueArgs<ExtArgs>>): Prisma__PengaturanPPDBClient<$Result.GetResult<Prisma.$PengaturanPPDBPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PengaturanPPDB that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PengaturanPPDBFindUniqueOrThrowArgs} args - Arguments to find a PengaturanPPDB
     * @example
     * // Get one PengaturanPPDB
     * const pengaturanPPDB = await prisma.pengaturanPPDB.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PengaturanPPDBFindUniqueOrThrowArgs>(args: SelectSubset<T, PengaturanPPDBFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PengaturanPPDBClient<$Result.GetResult<Prisma.$PengaturanPPDBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PengaturanPPDB that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengaturanPPDBFindFirstArgs} args - Arguments to find a PengaturanPPDB
     * @example
     * // Get one PengaturanPPDB
     * const pengaturanPPDB = await prisma.pengaturanPPDB.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PengaturanPPDBFindFirstArgs>(args?: SelectSubset<T, PengaturanPPDBFindFirstArgs<ExtArgs>>): Prisma__PengaturanPPDBClient<$Result.GetResult<Prisma.$PengaturanPPDBPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PengaturanPPDB that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengaturanPPDBFindFirstOrThrowArgs} args - Arguments to find a PengaturanPPDB
     * @example
     * // Get one PengaturanPPDB
     * const pengaturanPPDB = await prisma.pengaturanPPDB.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PengaturanPPDBFindFirstOrThrowArgs>(args?: SelectSubset<T, PengaturanPPDBFindFirstOrThrowArgs<ExtArgs>>): Prisma__PengaturanPPDBClient<$Result.GetResult<Prisma.$PengaturanPPDBPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PengaturanPPDBS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengaturanPPDBFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PengaturanPPDBS
     * const pengaturanPPDBS = await prisma.pengaturanPPDB.findMany()
     * 
     * // Get first 10 PengaturanPPDBS
     * const pengaturanPPDBS = await prisma.pengaturanPPDB.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pengaturanPPDBWithIdOnly = await prisma.pengaturanPPDB.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PengaturanPPDBFindManyArgs>(args?: SelectSubset<T, PengaturanPPDBFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengaturanPPDBPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PengaturanPPDB.
     * @param {PengaturanPPDBCreateArgs} args - Arguments to create a PengaturanPPDB.
     * @example
     * // Create one PengaturanPPDB
     * const PengaturanPPDB = await prisma.pengaturanPPDB.create({
     *   data: {
     *     // ... data to create a PengaturanPPDB
     *   }
     * })
     * 
     */
    create<T extends PengaturanPPDBCreateArgs>(args: SelectSubset<T, PengaturanPPDBCreateArgs<ExtArgs>>): Prisma__PengaturanPPDBClient<$Result.GetResult<Prisma.$PengaturanPPDBPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PengaturanPPDBS.
     * @param {PengaturanPPDBCreateManyArgs} args - Arguments to create many PengaturanPPDBS.
     * @example
     * // Create many PengaturanPPDBS
     * const pengaturanPPDB = await prisma.pengaturanPPDB.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PengaturanPPDBCreateManyArgs>(args?: SelectSubset<T, PengaturanPPDBCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PengaturanPPDB.
     * @param {PengaturanPPDBDeleteArgs} args - Arguments to delete one PengaturanPPDB.
     * @example
     * // Delete one PengaturanPPDB
     * const PengaturanPPDB = await prisma.pengaturanPPDB.delete({
     *   where: {
     *     // ... filter to delete one PengaturanPPDB
     *   }
     * })
     * 
     */
    delete<T extends PengaturanPPDBDeleteArgs>(args: SelectSubset<T, PengaturanPPDBDeleteArgs<ExtArgs>>): Prisma__PengaturanPPDBClient<$Result.GetResult<Prisma.$PengaturanPPDBPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PengaturanPPDB.
     * @param {PengaturanPPDBUpdateArgs} args - Arguments to update one PengaturanPPDB.
     * @example
     * // Update one PengaturanPPDB
     * const pengaturanPPDB = await prisma.pengaturanPPDB.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PengaturanPPDBUpdateArgs>(args: SelectSubset<T, PengaturanPPDBUpdateArgs<ExtArgs>>): Prisma__PengaturanPPDBClient<$Result.GetResult<Prisma.$PengaturanPPDBPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PengaturanPPDBS.
     * @param {PengaturanPPDBDeleteManyArgs} args - Arguments to filter PengaturanPPDBS to delete.
     * @example
     * // Delete a few PengaturanPPDBS
     * const { count } = await prisma.pengaturanPPDB.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PengaturanPPDBDeleteManyArgs>(args?: SelectSubset<T, PengaturanPPDBDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PengaturanPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengaturanPPDBUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PengaturanPPDBS
     * const pengaturanPPDB = await prisma.pengaturanPPDB.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PengaturanPPDBUpdateManyArgs>(args: SelectSubset<T, PengaturanPPDBUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PengaturanPPDB.
     * @param {PengaturanPPDBUpsertArgs} args - Arguments to update or create a PengaturanPPDB.
     * @example
     * // Update or create a PengaturanPPDB
     * const pengaturanPPDB = await prisma.pengaturanPPDB.upsert({
     *   create: {
     *     // ... data to create a PengaturanPPDB
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PengaturanPPDB we want to update
     *   }
     * })
     */
    upsert<T extends PengaturanPPDBUpsertArgs>(args: SelectSubset<T, PengaturanPPDBUpsertArgs<ExtArgs>>): Prisma__PengaturanPPDBClient<$Result.GetResult<Prisma.$PengaturanPPDBPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PengaturanPPDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengaturanPPDBCountArgs} args - Arguments to filter PengaturanPPDBS to count.
     * @example
     * // Count the number of PengaturanPPDBS
     * const count = await prisma.pengaturanPPDB.count({
     *   where: {
     *     // ... the filter for the PengaturanPPDBS we want to count
     *   }
     * })
    **/
    count<T extends PengaturanPPDBCountArgs>(
      args?: Subset<T, PengaturanPPDBCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengaturanPPDBCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PengaturanPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengaturanPPDBAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PengaturanPPDBAggregateArgs>(args: Subset<T, PengaturanPPDBAggregateArgs>): Prisma.PrismaPromise<GetPengaturanPPDBAggregateType<T>>

    /**
     * Group by PengaturanPPDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengaturanPPDBGroupByArgs} args - Group by arguments.
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
      T extends PengaturanPPDBGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PengaturanPPDBGroupByArgs['orderBy'] }
        : { orderBy?: PengaturanPPDBGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PengaturanPPDBGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengaturanPPDBGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PengaturanPPDB model
   */
  readonly fields: PengaturanPPDBFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PengaturanPPDB.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PengaturanPPDBClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PengaturanPPDB model
   */
  interface PengaturanPPDBFieldRefs {
    readonly id: FieldRef<"PengaturanPPDB", 'String'>
    readonly tahunAjaran: FieldRef<"PengaturanPPDB", 'String'>
    readonly kodeSurat: FieldRef<"PengaturanPPDB", 'String'>
    readonly tempatPenerbitan: FieldRef<"PengaturanPPDB", 'String'>
    readonly namaKetuaPanitia: FieldRef<"PengaturanPPDB", 'String'>
    readonly nipKetuaPanitia: FieldRef<"PengaturanPPDB", 'String'>
    readonly namaKepalaMadrasah: FieldRef<"PengaturanPPDB", 'String'>
    readonly nipKepalaMadrasah: FieldRef<"PengaturanPPDB", 'String'>
    readonly catatanSurat: FieldRef<"PengaturanPPDB", 'String'>
    readonly createdAt: FieldRef<"PengaturanPPDB", 'DateTime'>
    readonly updatedAt: FieldRef<"PengaturanPPDB", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PengaturanPPDB findUnique
   */
  export type PengaturanPPDBFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
    /**
     * Filter, which PengaturanPPDB to fetch.
     */
    where: PengaturanPPDBWhereUniqueInput
  }

  /**
   * PengaturanPPDB findUniqueOrThrow
   */
  export type PengaturanPPDBFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
    /**
     * Filter, which PengaturanPPDB to fetch.
     */
    where: PengaturanPPDBWhereUniqueInput
  }

  /**
   * PengaturanPPDB findFirst
   */
  export type PengaturanPPDBFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
    /**
     * Filter, which PengaturanPPDB to fetch.
     */
    where?: PengaturanPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengaturanPPDBS to fetch.
     */
    orderBy?: PengaturanPPDBOrderByWithRelationInput | PengaturanPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PengaturanPPDBS.
     */
    cursor?: PengaturanPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengaturanPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengaturanPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PengaturanPPDBS.
     */
    distinct?: PengaturanPPDBScalarFieldEnum | PengaturanPPDBScalarFieldEnum[]
  }

  /**
   * PengaturanPPDB findFirstOrThrow
   */
  export type PengaturanPPDBFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
    /**
     * Filter, which PengaturanPPDB to fetch.
     */
    where?: PengaturanPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengaturanPPDBS to fetch.
     */
    orderBy?: PengaturanPPDBOrderByWithRelationInput | PengaturanPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PengaturanPPDBS.
     */
    cursor?: PengaturanPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengaturanPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengaturanPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PengaturanPPDBS.
     */
    distinct?: PengaturanPPDBScalarFieldEnum | PengaturanPPDBScalarFieldEnum[]
  }

  /**
   * PengaturanPPDB findMany
   */
  export type PengaturanPPDBFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
    /**
     * Filter, which PengaturanPPDBS to fetch.
     */
    where?: PengaturanPPDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PengaturanPPDBS to fetch.
     */
    orderBy?: PengaturanPPDBOrderByWithRelationInput | PengaturanPPDBOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PengaturanPPDBS.
     */
    cursor?: PengaturanPPDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PengaturanPPDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PengaturanPPDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PengaturanPPDBS.
     */
    distinct?: PengaturanPPDBScalarFieldEnum | PengaturanPPDBScalarFieldEnum[]
  }

  /**
   * PengaturanPPDB create
   */
  export type PengaturanPPDBCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
    /**
     * The data needed to create a PengaturanPPDB.
     */
    data: XOR<PengaturanPPDBCreateInput, PengaturanPPDBUncheckedCreateInput>
  }

  /**
   * PengaturanPPDB createMany
   */
  export type PengaturanPPDBCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PengaturanPPDBS.
     */
    data: PengaturanPPDBCreateManyInput | PengaturanPPDBCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PengaturanPPDB update
   */
  export type PengaturanPPDBUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
    /**
     * The data needed to update a PengaturanPPDB.
     */
    data: XOR<PengaturanPPDBUpdateInput, PengaturanPPDBUncheckedUpdateInput>
    /**
     * Choose, which PengaturanPPDB to update.
     */
    where: PengaturanPPDBWhereUniqueInput
  }

  /**
   * PengaturanPPDB updateMany
   */
  export type PengaturanPPDBUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PengaturanPPDBS.
     */
    data: XOR<PengaturanPPDBUpdateManyMutationInput, PengaturanPPDBUncheckedUpdateManyInput>
    /**
     * Filter which PengaturanPPDBS to update
     */
    where?: PengaturanPPDBWhereInput
    /**
     * Limit how many PengaturanPPDBS to update.
     */
    limit?: number
  }

  /**
   * PengaturanPPDB upsert
   */
  export type PengaturanPPDBUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
    /**
     * The filter to search for the PengaturanPPDB to update in case it exists.
     */
    where: PengaturanPPDBWhereUniqueInput
    /**
     * In case the PengaturanPPDB found by the `where` argument doesn't exist, create a new PengaturanPPDB with this data.
     */
    create: XOR<PengaturanPPDBCreateInput, PengaturanPPDBUncheckedCreateInput>
    /**
     * In case the PengaturanPPDB was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PengaturanPPDBUpdateInput, PengaturanPPDBUncheckedUpdateInput>
  }

  /**
   * PengaturanPPDB delete
   */
  export type PengaturanPPDBDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
    /**
     * Filter which PengaturanPPDB to delete.
     */
    where: PengaturanPPDBWhereUniqueInput
  }

  /**
   * PengaturanPPDB deleteMany
   */
  export type PengaturanPPDBDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PengaturanPPDBS to delete
     */
    where?: PengaturanPPDBWhereInput
    /**
     * Limit how many PengaturanPPDBS to delete.
     */
    limit?: number
  }

  /**
   * PengaturanPPDB without action
   */
  export type PengaturanPPDBDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PengaturanPPDB
     */
    select?: PengaturanPPDBSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PengaturanPPDB
     */
    omit?: PengaturanPPDBOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    foto: 'foto',
    isVerified: 'isVerified',
    emailToken: 'emailToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfilSekolahScalarFieldEnum: {
    id: 'id',
    namaSekolah: 'namaSekolah',
    npsn: 'npsn',
    akreditasi: 'akreditasi',
    tagline: 'tagline',
    deskripsi: 'deskripsi',
    sejarah: 'sejarah',
    logo: 'logo',
    banner: 'banner',
    alamat: 'alamat',
    email: 'email',
    telepon: 'telepon',
    whatsapp: 'whatsapp',
    mapsUrl: 'mapsUrl',
    visi: 'visi',
    misi: 'misi',
    rdmUrl: 'rdmUrl',
    rdmKeterangan: 'rdmKeterangan',
    rdmAktif: 'rdmAktif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfilSekolahScalarFieldEnum = (typeof ProfilSekolahScalarFieldEnum)[keyof typeof ProfilSekolahScalarFieldEnum]


  export const StrukturOrganisasiScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    jabatan: 'jabatan',
    foto: 'foto',
    urutan: 'urutan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StrukturOrganisasiScalarFieldEnum = (typeof StrukturOrganisasiScalarFieldEnum)[keyof typeof StrukturOrganisasiScalarFieldEnum]


  export const FasilitasScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    ikon: 'ikon',
    gambar: 'gambar',
    urutan: 'urutan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FasilitasScalarFieldEnum = (typeof FasilitasScalarFieldEnum)[keyof typeof FasilitasScalarFieldEnum]


  export const KategoriBeritaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    slug: 'slug'
  };

  export type KategoriBeritaScalarFieldEnum = (typeof KategoriBeritaScalarFieldEnum)[keyof typeof KategoriBeritaScalarFieldEnum]


  export const BeritaScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    slug: 'slug',
    konten: 'konten',
    gambar: 'gambar',
    isPublished: 'isPublished',
    authorId: 'authorId',
    kategoriId: 'kategoriId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BeritaScalarFieldEnum = (typeof BeritaScalarFieldEnum)[keyof typeof BeritaScalarFieldEnum]


  export const PengumumanScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    slug: 'slug',
    konten: 'konten',
    fileUrl: 'fileUrl',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PengumumanScalarFieldEnum = (typeof PengumumanScalarFieldEnum)[keyof typeof PengumumanScalarFieldEnum]


  export const GaleriScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    deskripsi: 'deskripsi',
    imageUrl: 'imageUrl',
    kategori: 'kategori',
    createdAt: 'createdAt'
  };

  export type GaleriScalarFieldEnum = (typeof GaleriScalarFieldEnum)[keyof typeof GaleriScalarFieldEnum]


  export const PesanKontakScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    subjek: 'subjek',
    pesan: 'pesan',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type PesanKontakScalarFieldEnum = (typeof PesanKontakScalarFieldEnum)[keyof typeof PesanKontakScalarFieldEnum]


  export const AgendaScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    slug: 'slug',
    deskripsi: 'deskripsi',
    lokasi: 'lokasi',
    mulai: 'mulai',
    selesai: 'selesai',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgendaScalarFieldEnum = (typeof AgendaScalarFieldEnum)[keyof typeof AgendaScalarFieldEnum]


  export const PrestasiScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    peraih: 'peraih',
    tingkat: 'tingkat',
    juara: 'juara',
    tahun: 'tahun',
    deskripsi: 'deskripsi',
    gambar: 'gambar',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrestasiScalarFieldEnum = (typeof PrestasiScalarFieldEnum)[keyof typeof PrestasiScalarFieldEnum]


  export const UnduhanScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    deskripsi: 'deskripsi',
    kategori: 'kategori',
    fileUrl: 'fileUrl',
    namaFile: 'namaFile',
    tipeFile: 'tipeFile',
    ukuran: 'ukuran',
    jumlahUnduhan: 'jumlahUnduhan',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnduhanScalarFieldEnum = (typeof UnduhanScalarFieldEnum)[keyof typeof UnduhanScalarFieldEnum]


  export const FaqScalarFieldEnum: {
    id: 'id',
    pertanyaan: 'pertanyaan',
    jawaban: 'jawaban',
    kategori: 'kategori',
    urutan: 'urutan',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum]


  export const PendaftaranPPDBScalarFieldEnum: {
    id: 'id',
    nomorPendaftaran: 'nomorPendaftaran',
    userId: 'userId',
    status: 'status',
    gelombang: 'gelombang',
    catatan: 'catatan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PendaftaranPPDBScalarFieldEnum = (typeof PendaftaranPPDBScalarFieldEnum)[keyof typeof PendaftaranPPDBScalarFieldEnum]


  export const BiodataSiswaPPDBScalarFieldEnum: {
    id: 'id',
    pendaftaranId: 'pendaftaranId',
    namaLengkap: 'namaLengkap',
    nisn: 'nisn',
    nik: 'nik',
    tempatLahir: 'tempatLahir',
    tanggalLahir: 'tanggalLahir',
    jenisKelamin: 'jenisKelamin',
    agama: 'agama',
    alamat: 'alamat',
    asalSekolah: 'asalSekolah'
  };

  export type BiodataSiswaPPDBScalarFieldEnum = (typeof BiodataSiswaPPDBScalarFieldEnum)[keyof typeof BiodataSiswaPPDBScalarFieldEnum]


  export const DataOrangTuaPPDBScalarFieldEnum: {
    id: 'id',
    pendaftaranId: 'pendaftaranId',
    namaAyah: 'namaAyah',
    pekerjaanAyah: 'pekerjaanAyah',
    noHpAyah: 'noHpAyah',
    namaIbu: 'namaIbu',
    pekerjaanIbu: 'pekerjaanIbu',
    noHpIbu: 'noHpIbu',
    alamatOrangTua: 'alamatOrangTua'
  };

  export type DataOrangTuaPPDBScalarFieldEnum = (typeof DataOrangTuaPPDBScalarFieldEnum)[keyof typeof DataOrangTuaPPDBScalarFieldEnum]


  export const DokumenPPDBScalarFieldEnum: {
    id: 'id',
    pendaftaranId: 'pendaftaranId',
    jenisDokumen: 'jenisDokumen',
    fileUrl: 'fileUrl',
    isVerified: 'isVerified'
  };

  export type DokumenPPDBScalarFieldEnum = (typeof DokumenPPDBScalarFieldEnum)[keyof typeof DokumenPPDBScalarFieldEnum]


  export const PengaturanPPDBScalarFieldEnum: {
    id: 'id',
    tahunAjaran: 'tahunAjaran',
    kodeSurat: 'kodeSurat',
    tempatPenerbitan: 'tempatPenerbitan',
    namaKetuaPanitia: 'namaKetuaPanitia',
    nipKetuaPanitia: 'nipKetuaPanitia',
    namaKepalaMadrasah: 'namaKepalaMadrasah',
    nipKepalaMadrasah: 'nipKepalaMadrasah',
    catatanSurat: 'catatanSurat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PengaturanPPDBScalarFieldEnum = (typeof PengaturanPPDBScalarFieldEnum)[keyof typeof PengaturanPPDBScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    foto: 'foto',
    emailToken: 'emailToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


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


  export const ProfilSekolahOrderByRelevanceFieldEnum: {
    id: 'id',
    namaSekolah: 'namaSekolah',
    npsn: 'npsn',
    akreditasi: 'akreditasi',
    tagline: 'tagline',
    deskripsi: 'deskripsi',
    sejarah: 'sejarah',
    logo: 'logo',
    banner: 'banner',
    alamat: 'alamat',
    email: 'email',
    telepon: 'telepon',
    whatsapp: 'whatsapp',
    mapsUrl: 'mapsUrl',
    visi: 'visi',
    rdmUrl: 'rdmUrl',
    rdmKeterangan: 'rdmKeterangan'
  };

  export type ProfilSekolahOrderByRelevanceFieldEnum = (typeof ProfilSekolahOrderByRelevanceFieldEnum)[keyof typeof ProfilSekolahOrderByRelevanceFieldEnum]


  export const StrukturOrganisasiOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    jabatan: 'jabatan',
    foto: 'foto'
  };

  export type StrukturOrganisasiOrderByRelevanceFieldEnum = (typeof StrukturOrganisasiOrderByRelevanceFieldEnum)[keyof typeof StrukturOrganisasiOrderByRelevanceFieldEnum]


  export const FasilitasOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    ikon: 'ikon',
    gambar: 'gambar'
  };

  export type FasilitasOrderByRelevanceFieldEnum = (typeof FasilitasOrderByRelevanceFieldEnum)[keyof typeof FasilitasOrderByRelevanceFieldEnum]


  export const KategoriBeritaOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    slug: 'slug'
  };

  export type KategoriBeritaOrderByRelevanceFieldEnum = (typeof KategoriBeritaOrderByRelevanceFieldEnum)[keyof typeof KategoriBeritaOrderByRelevanceFieldEnum]


  export const BeritaOrderByRelevanceFieldEnum: {
    id: 'id',
    judul: 'judul',
    slug: 'slug',
    konten: 'konten',
    gambar: 'gambar',
    authorId: 'authorId',
    kategoriId: 'kategoriId'
  };

  export type BeritaOrderByRelevanceFieldEnum = (typeof BeritaOrderByRelevanceFieldEnum)[keyof typeof BeritaOrderByRelevanceFieldEnum]


  export const PengumumanOrderByRelevanceFieldEnum: {
    id: 'id',
    judul: 'judul',
    slug: 'slug',
    konten: 'konten',
    fileUrl: 'fileUrl'
  };

  export type PengumumanOrderByRelevanceFieldEnum = (typeof PengumumanOrderByRelevanceFieldEnum)[keyof typeof PengumumanOrderByRelevanceFieldEnum]


  export const GaleriOrderByRelevanceFieldEnum: {
    id: 'id',
    judul: 'judul',
    deskripsi: 'deskripsi',
    imageUrl: 'imageUrl',
    kategori: 'kategori'
  };

  export type GaleriOrderByRelevanceFieldEnum = (typeof GaleriOrderByRelevanceFieldEnum)[keyof typeof GaleriOrderByRelevanceFieldEnum]


  export const PesanKontakOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    subjek: 'subjek',
    pesan: 'pesan'
  };

  export type PesanKontakOrderByRelevanceFieldEnum = (typeof PesanKontakOrderByRelevanceFieldEnum)[keyof typeof PesanKontakOrderByRelevanceFieldEnum]


  export const AgendaOrderByRelevanceFieldEnum: {
    id: 'id',
    judul: 'judul',
    slug: 'slug',
    deskripsi: 'deskripsi',
    lokasi: 'lokasi'
  };

  export type AgendaOrderByRelevanceFieldEnum = (typeof AgendaOrderByRelevanceFieldEnum)[keyof typeof AgendaOrderByRelevanceFieldEnum]


  export const PrestasiOrderByRelevanceFieldEnum: {
    id: 'id',
    judul: 'judul',
    peraih: 'peraih',
    tingkat: 'tingkat',
    juara: 'juara',
    deskripsi: 'deskripsi',
    gambar: 'gambar'
  };

  export type PrestasiOrderByRelevanceFieldEnum = (typeof PrestasiOrderByRelevanceFieldEnum)[keyof typeof PrestasiOrderByRelevanceFieldEnum]


  export const UnduhanOrderByRelevanceFieldEnum: {
    id: 'id',
    judul: 'judul',
    deskripsi: 'deskripsi',
    kategori: 'kategori',
    fileUrl: 'fileUrl',
    namaFile: 'namaFile',
    tipeFile: 'tipeFile'
  };

  export type UnduhanOrderByRelevanceFieldEnum = (typeof UnduhanOrderByRelevanceFieldEnum)[keyof typeof UnduhanOrderByRelevanceFieldEnum]


  export const FaqOrderByRelevanceFieldEnum: {
    id: 'id',
    pertanyaan: 'pertanyaan',
    jawaban: 'jawaban',
    kategori: 'kategori'
  };

  export type FaqOrderByRelevanceFieldEnum = (typeof FaqOrderByRelevanceFieldEnum)[keyof typeof FaqOrderByRelevanceFieldEnum]


  export const PendaftaranPPDBOrderByRelevanceFieldEnum: {
    id: 'id',
    nomorPendaftaran: 'nomorPendaftaran',
    userId: 'userId',
    gelombang: 'gelombang',
    catatan: 'catatan'
  };

  export type PendaftaranPPDBOrderByRelevanceFieldEnum = (typeof PendaftaranPPDBOrderByRelevanceFieldEnum)[keyof typeof PendaftaranPPDBOrderByRelevanceFieldEnum]


  export const BiodataSiswaPPDBOrderByRelevanceFieldEnum: {
    id: 'id',
    pendaftaranId: 'pendaftaranId',
    namaLengkap: 'namaLengkap',
    nisn: 'nisn',
    nik: 'nik',
    tempatLahir: 'tempatLahir',
    agama: 'agama',
    alamat: 'alamat',
    asalSekolah: 'asalSekolah'
  };

  export type BiodataSiswaPPDBOrderByRelevanceFieldEnum = (typeof BiodataSiswaPPDBOrderByRelevanceFieldEnum)[keyof typeof BiodataSiswaPPDBOrderByRelevanceFieldEnum]


  export const DataOrangTuaPPDBOrderByRelevanceFieldEnum: {
    id: 'id',
    pendaftaranId: 'pendaftaranId',
    namaAyah: 'namaAyah',
    pekerjaanAyah: 'pekerjaanAyah',
    noHpAyah: 'noHpAyah',
    namaIbu: 'namaIbu',
    pekerjaanIbu: 'pekerjaanIbu',
    noHpIbu: 'noHpIbu',
    alamatOrangTua: 'alamatOrangTua'
  };

  export type DataOrangTuaPPDBOrderByRelevanceFieldEnum = (typeof DataOrangTuaPPDBOrderByRelevanceFieldEnum)[keyof typeof DataOrangTuaPPDBOrderByRelevanceFieldEnum]


  export const DokumenPPDBOrderByRelevanceFieldEnum: {
    id: 'id',
    pendaftaranId: 'pendaftaranId',
    fileUrl: 'fileUrl'
  };

  export type DokumenPPDBOrderByRelevanceFieldEnum = (typeof DokumenPPDBOrderByRelevanceFieldEnum)[keyof typeof DokumenPPDBOrderByRelevanceFieldEnum]


  export const PengaturanPPDBOrderByRelevanceFieldEnum: {
    id: 'id',
    tahunAjaran: 'tahunAjaran',
    kodeSurat: 'kodeSurat',
    tempatPenerbitan: 'tempatPenerbitan',
    namaKetuaPanitia: 'namaKetuaPanitia',
    nipKetuaPanitia: 'nipKetuaPanitia',
    namaKepalaMadrasah: 'namaKepalaMadrasah',
    nipKepalaMadrasah: 'nipKepalaMadrasah',
    catatanSurat: 'catatanSurat'
  };

  export type PengaturanPPDBOrderByRelevanceFieldEnum = (typeof PengaturanPPDBOrderByRelevanceFieldEnum)[keyof typeof PengaturanPPDBOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'StatusPPDB'
   */
  export type EnumStatusPPDBFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPPDB'>
    


  /**
   * Reference to a field of type 'JenisKelamin'
   */
  export type EnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin'>
    


  /**
   * Reference to a field of type 'JenisDokumen'
   */
  export type EnumJenisDokumenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisDokumen'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    foto?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    emailToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pendaftaran?: XOR<PendaftaranPPDBNullableScalarRelationFilter, PendaftaranPPDBWhereInput> | null
    berita?: BeritaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    foto?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    emailToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pendaftaran?: PendaftaranPPDBOrderByWithRelationInput
    berita?: BeritaOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    foto?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    emailToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pendaftaran?: XOR<PendaftaranPPDBNullableScalarRelationFilter, PendaftaranPPDBWhereInput> | null
    berita?: BeritaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    foto?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    emailToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    foto?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfilSekolahWhereInput = {
    AND?: ProfilSekolahWhereInput | ProfilSekolahWhereInput[]
    OR?: ProfilSekolahWhereInput[]
    NOT?: ProfilSekolahWhereInput | ProfilSekolahWhereInput[]
    id?: StringFilter<"ProfilSekolah"> | string
    namaSekolah?: StringFilter<"ProfilSekolah"> | string
    npsn?: StringFilter<"ProfilSekolah"> | string
    akreditasi?: StringFilter<"ProfilSekolah"> | string
    tagline?: StringNullableFilter<"ProfilSekolah"> | string | null
    deskripsi?: StringNullableFilter<"ProfilSekolah"> | string | null
    sejarah?: StringNullableFilter<"ProfilSekolah"> | string | null
    logo?: StringNullableFilter<"ProfilSekolah"> | string | null
    banner?: StringNullableFilter<"ProfilSekolah"> | string | null
    alamat?: StringNullableFilter<"ProfilSekolah"> | string | null
    email?: StringNullableFilter<"ProfilSekolah"> | string | null
    telepon?: StringNullableFilter<"ProfilSekolah"> | string | null
    whatsapp?: StringNullableFilter<"ProfilSekolah"> | string | null
    mapsUrl?: StringNullableFilter<"ProfilSekolah"> | string | null
    visi?: StringNullableFilter<"ProfilSekolah"> | string | null
    misi?: JsonNullableFilter<"ProfilSekolah">
    rdmUrl?: StringNullableFilter<"ProfilSekolah"> | string | null
    rdmKeterangan?: StringNullableFilter<"ProfilSekolah"> | string | null
    rdmAktif?: BoolFilter<"ProfilSekolah"> | boolean
    createdAt?: DateTimeFilter<"ProfilSekolah"> | Date | string
    updatedAt?: DateTimeFilter<"ProfilSekolah"> | Date | string
  }

  export type ProfilSekolahOrderByWithRelationInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    npsn?: SortOrder
    akreditasi?: SortOrder
    tagline?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    sejarah?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telepon?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    mapsUrl?: SortOrderInput | SortOrder
    visi?: SortOrderInput | SortOrder
    misi?: SortOrderInput | SortOrder
    rdmUrl?: SortOrderInput | SortOrder
    rdmKeterangan?: SortOrderInput | SortOrder
    rdmAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ProfilSekolahOrderByRelevanceInput
  }

  export type ProfilSekolahWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfilSekolahWhereInput | ProfilSekolahWhereInput[]
    OR?: ProfilSekolahWhereInput[]
    NOT?: ProfilSekolahWhereInput | ProfilSekolahWhereInput[]
    namaSekolah?: StringFilter<"ProfilSekolah"> | string
    npsn?: StringFilter<"ProfilSekolah"> | string
    akreditasi?: StringFilter<"ProfilSekolah"> | string
    tagline?: StringNullableFilter<"ProfilSekolah"> | string | null
    deskripsi?: StringNullableFilter<"ProfilSekolah"> | string | null
    sejarah?: StringNullableFilter<"ProfilSekolah"> | string | null
    logo?: StringNullableFilter<"ProfilSekolah"> | string | null
    banner?: StringNullableFilter<"ProfilSekolah"> | string | null
    alamat?: StringNullableFilter<"ProfilSekolah"> | string | null
    email?: StringNullableFilter<"ProfilSekolah"> | string | null
    telepon?: StringNullableFilter<"ProfilSekolah"> | string | null
    whatsapp?: StringNullableFilter<"ProfilSekolah"> | string | null
    mapsUrl?: StringNullableFilter<"ProfilSekolah"> | string | null
    visi?: StringNullableFilter<"ProfilSekolah"> | string | null
    misi?: JsonNullableFilter<"ProfilSekolah">
    rdmUrl?: StringNullableFilter<"ProfilSekolah"> | string | null
    rdmKeterangan?: StringNullableFilter<"ProfilSekolah"> | string | null
    rdmAktif?: BoolFilter<"ProfilSekolah"> | boolean
    createdAt?: DateTimeFilter<"ProfilSekolah"> | Date | string
    updatedAt?: DateTimeFilter<"ProfilSekolah"> | Date | string
  }, "id">

  export type ProfilSekolahOrderByWithAggregationInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    npsn?: SortOrder
    akreditasi?: SortOrder
    tagline?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    sejarah?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telepon?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    mapsUrl?: SortOrderInput | SortOrder
    visi?: SortOrderInput | SortOrder
    misi?: SortOrderInput | SortOrder
    rdmUrl?: SortOrderInput | SortOrder
    rdmKeterangan?: SortOrderInput | SortOrder
    rdmAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfilSekolahCountOrderByAggregateInput
    _max?: ProfilSekolahMaxOrderByAggregateInput
    _min?: ProfilSekolahMinOrderByAggregateInput
  }

  export type ProfilSekolahScalarWhereWithAggregatesInput = {
    AND?: ProfilSekolahScalarWhereWithAggregatesInput | ProfilSekolahScalarWhereWithAggregatesInput[]
    OR?: ProfilSekolahScalarWhereWithAggregatesInput[]
    NOT?: ProfilSekolahScalarWhereWithAggregatesInput | ProfilSekolahScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfilSekolah"> | string
    namaSekolah?: StringWithAggregatesFilter<"ProfilSekolah"> | string
    npsn?: StringWithAggregatesFilter<"ProfilSekolah"> | string
    akreditasi?: StringWithAggregatesFilter<"ProfilSekolah"> | string
    tagline?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    sejarah?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    logo?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    banner?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    email?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    telepon?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    mapsUrl?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    visi?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    misi?: JsonNullableWithAggregatesFilter<"ProfilSekolah">
    rdmUrl?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    rdmKeterangan?: StringNullableWithAggregatesFilter<"ProfilSekolah"> | string | null
    rdmAktif?: BoolWithAggregatesFilter<"ProfilSekolah"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProfilSekolah"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfilSekolah"> | Date | string
  }

  export type StrukturOrganisasiWhereInput = {
    AND?: StrukturOrganisasiWhereInput | StrukturOrganisasiWhereInput[]
    OR?: StrukturOrganisasiWhereInput[]
    NOT?: StrukturOrganisasiWhereInput | StrukturOrganisasiWhereInput[]
    id?: StringFilter<"StrukturOrganisasi"> | string
    nama?: StringFilter<"StrukturOrganisasi"> | string
    jabatan?: StringFilter<"StrukturOrganisasi"> | string
    foto?: StringNullableFilter<"StrukturOrganisasi"> | string | null
    urutan?: IntFilter<"StrukturOrganisasi"> | number
    createdAt?: DateTimeFilter<"StrukturOrganisasi"> | Date | string
    updatedAt?: DateTimeFilter<"StrukturOrganisasi"> | Date | string
  }

  export type StrukturOrganisasiOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    foto?: SortOrderInput | SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: StrukturOrganisasiOrderByRelevanceInput
  }

  export type StrukturOrganisasiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StrukturOrganisasiWhereInput | StrukturOrganisasiWhereInput[]
    OR?: StrukturOrganisasiWhereInput[]
    NOT?: StrukturOrganisasiWhereInput | StrukturOrganisasiWhereInput[]
    nama?: StringFilter<"StrukturOrganisasi"> | string
    jabatan?: StringFilter<"StrukturOrganisasi"> | string
    foto?: StringNullableFilter<"StrukturOrganisasi"> | string | null
    urutan?: IntFilter<"StrukturOrganisasi"> | number
    createdAt?: DateTimeFilter<"StrukturOrganisasi"> | Date | string
    updatedAt?: DateTimeFilter<"StrukturOrganisasi"> | Date | string
  }, "id">

  export type StrukturOrganisasiOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    foto?: SortOrderInput | SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StrukturOrganisasiCountOrderByAggregateInput
    _avg?: StrukturOrganisasiAvgOrderByAggregateInput
    _max?: StrukturOrganisasiMaxOrderByAggregateInput
    _min?: StrukturOrganisasiMinOrderByAggregateInput
    _sum?: StrukturOrganisasiSumOrderByAggregateInput
  }

  export type StrukturOrganisasiScalarWhereWithAggregatesInput = {
    AND?: StrukturOrganisasiScalarWhereWithAggregatesInput | StrukturOrganisasiScalarWhereWithAggregatesInput[]
    OR?: StrukturOrganisasiScalarWhereWithAggregatesInput[]
    NOT?: StrukturOrganisasiScalarWhereWithAggregatesInput | StrukturOrganisasiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StrukturOrganisasi"> | string
    nama?: StringWithAggregatesFilter<"StrukturOrganisasi"> | string
    jabatan?: StringWithAggregatesFilter<"StrukturOrganisasi"> | string
    foto?: StringNullableWithAggregatesFilter<"StrukturOrganisasi"> | string | null
    urutan?: IntWithAggregatesFilter<"StrukturOrganisasi"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StrukturOrganisasi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StrukturOrganisasi"> | Date | string
  }

  export type FasilitasWhereInput = {
    AND?: FasilitasWhereInput | FasilitasWhereInput[]
    OR?: FasilitasWhereInput[]
    NOT?: FasilitasWhereInput | FasilitasWhereInput[]
    id?: StringFilter<"Fasilitas"> | string
    nama?: StringFilter<"Fasilitas"> | string
    deskripsi?: StringNullableFilter<"Fasilitas"> | string | null
    ikon?: StringNullableFilter<"Fasilitas"> | string | null
    gambar?: StringNullableFilter<"Fasilitas"> | string | null
    urutan?: IntFilter<"Fasilitas"> | number
    createdAt?: DateTimeFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeFilter<"Fasilitas"> | Date | string
  }

  export type FasilitasOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    ikon?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: FasilitasOrderByRelevanceInput
  }

  export type FasilitasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FasilitasWhereInput | FasilitasWhereInput[]
    OR?: FasilitasWhereInput[]
    NOT?: FasilitasWhereInput | FasilitasWhereInput[]
    nama?: StringFilter<"Fasilitas"> | string
    deskripsi?: StringNullableFilter<"Fasilitas"> | string | null
    ikon?: StringNullableFilter<"Fasilitas"> | string | null
    gambar?: StringNullableFilter<"Fasilitas"> | string | null
    urutan?: IntFilter<"Fasilitas"> | number
    createdAt?: DateTimeFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeFilter<"Fasilitas"> | Date | string
  }, "id">

  export type FasilitasOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    ikon?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FasilitasCountOrderByAggregateInput
    _avg?: FasilitasAvgOrderByAggregateInput
    _max?: FasilitasMaxOrderByAggregateInput
    _min?: FasilitasMinOrderByAggregateInput
    _sum?: FasilitasSumOrderByAggregateInput
  }

  export type FasilitasScalarWhereWithAggregatesInput = {
    AND?: FasilitasScalarWhereWithAggregatesInput | FasilitasScalarWhereWithAggregatesInput[]
    OR?: FasilitasScalarWhereWithAggregatesInput[]
    NOT?: FasilitasScalarWhereWithAggregatesInput | FasilitasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fasilitas"> | string
    nama?: StringWithAggregatesFilter<"Fasilitas"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Fasilitas"> | string | null
    ikon?: StringNullableWithAggregatesFilter<"Fasilitas"> | string | null
    gambar?: StringNullableWithAggregatesFilter<"Fasilitas"> | string | null
    urutan?: IntWithAggregatesFilter<"Fasilitas"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Fasilitas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fasilitas"> | Date | string
  }

  export type KategoriBeritaWhereInput = {
    AND?: KategoriBeritaWhereInput | KategoriBeritaWhereInput[]
    OR?: KategoriBeritaWhereInput[]
    NOT?: KategoriBeritaWhereInput | KategoriBeritaWhereInput[]
    id?: StringFilter<"KategoriBerita"> | string
    nama?: StringFilter<"KategoriBerita"> | string
    slug?: StringFilter<"KategoriBerita"> | string
    berita?: BeritaListRelationFilter
  }

  export type KategoriBeritaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
    berita?: BeritaOrderByRelationAggregateInput
    _relevance?: KategoriBeritaOrderByRelevanceInput
  }

  export type KategoriBeritaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: KategoriBeritaWhereInput | KategoriBeritaWhereInput[]
    OR?: KategoriBeritaWhereInput[]
    NOT?: KategoriBeritaWhereInput | KategoriBeritaWhereInput[]
    nama?: StringFilter<"KategoriBerita"> | string
    berita?: BeritaListRelationFilter
  }, "id" | "slug">

  export type KategoriBeritaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
    _count?: KategoriBeritaCountOrderByAggregateInput
    _max?: KategoriBeritaMaxOrderByAggregateInput
    _min?: KategoriBeritaMinOrderByAggregateInput
  }

  export type KategoriBeritaScalarWhereWithAggregatesInput = {
    AND?: KategoriBeritaScalarWhereWithAggregatesInput | KategoriBeritaScalarWhereWithAggregatesInput[]
    OR?: KategoriBeritaScalarWhereWithAggregatesInput[]
    NOT?: KategoriBeritaScalarWhereWithAggregatesInput | KategoriBeritaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KategoriBerita"> | string
    nama?: StringWithAggregatesFilter<"KategoriBerita"> | string
    slug?: StringWithAggregatesFilter<"KategoriBerita"> | string
  }

  export type BeritaWhereInput = {
    AND?: BeritaWhereInput | BeritaWhereInput[]
    OR?: BeritaWhereInput[]
    NOT?: BeritaWhereInput | BeritaWhereInput[]
    id?: StringFilter<"Berita"> | string
    judul?: StringFilter<"Berita"> | string
    slug?: StringFilter<"Berita"> | string
    konten?: StringFilter<"Berita"> | string
    gambar?: StringNullableFilter<"Berita"> | string | null
    isPublished?: BoolFilter<"Berita"> | boolean
    authorId?: StringFilter<"Berita"> | string
    kategoriId?: StringNullableFilter<"Berita"> | string | null
    createdAt?: DateTimeFilter<"Berita"> | Date | string
    updatedAt?: DateTimeFilter<"Berita"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    kategori?: XOR<KategoriBeritaNullableScalarRelationFilter, KategoriBeritaWhereInput> | null
  }

  export type BeritaOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    gambar?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    kategoriId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    kategori?: KategoriBeritaOrderByWithRelationInput
    _relevance?: BeritaOrderByRelevanceInput
  }

  export type BeritaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BeritaWhereInput | BeritaWhereInput[]
    OR?: BeritaWhereInput[]
    NOT?: BeritaWhereInput | BeritaWhereInput[]
    judul?: StringFilter<"Berita"> | string
    konten?: StringFilter<"Berita"> | string
    gambar?: StringNullableFilter<"Berita"> | string | null
    isPublished?: BoolFilter<"Berita"> | boolean
    authorId?: StringFilter<"Berita"> | string
    kategoriId?: StringNullableFilter<"Berita"> | string | null
    createdAt?: DateTimeFilter<"Berita"> | Date | string
    updatedAt?: DateTimeFilter<"Berita"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    kategori?: XOR<KategoriBeritaNullableScalarRelationFilter, KategoriBeritaWhereInput> | null
  }, "id" | "slug">

  export type BeritaOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    gambar?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    kategoriId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BeritaCountOrderByAggregateInput
    _max?: BeritaMaxOrderByAggregateInput
    _min?: BeritaMinOrderByAggregateInput
  }

  export type BeritaScalarWhereWithAggregatesInput = {
    AND?: BeritaScalarWhereWithAggregatesInput | BeritaScalarWhereWithAggregatesInput[]
    OR?: BeritaScalarWhereWithAggregatesInput[]
    NOT?: BeritaScalarWhereWithAggregatesInput | BeritaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Berita"> | string
    judul?: StringWithAggregatesFilter<"Berita"> | string
    slug?: StringWithAggregatesFilter<"Berita"> | string
    konten?: StringWithAggregatesFilter<"Berita"> | string
    gambar?: StringNullableWithAggregatesFilter<"Berita"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Berita"> | boolean
    authorId?: StringWithAggregatesFilter<"Berita"> | string
    kategoriId?: StringNullableWithAggregatesFilter<"Berita"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Berita"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Berita"> | Date | string
  }

  export type PengumumanWhereInput = {
    AND?: PengumumanWhereInput | PengumumanWhereInput[]
    OR?: PengumumanWhereInput[]
    NOT?: PengumumanWhereInput | PengumumanWhereInput[]
    id?: StringFilter<"Pengumuman"> | string
    judul?: StringFilter<"Pengumuman"> | string
    slug?: StringFilter<"Pengumuman"> | string
    konten?: StringFilter<"Pengumuman"> | string
    fileUrl?: StringNullableFilter<"Pengumuman"> | string | null
    isPublished?: BoolFilter<"Pengumuman"> | boolean
    createdAt?: DateTimeFilter<"Pengumuman"> | Date | string
    updatedAt?: DateTimeFilter<"Pengumuman"> | Date | string
  }

  export type PengumumanOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PengumumanOrderByRelevanceInput
  }

  export type PengumumanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PengumumanWhereInput | PengumumanWhereInput[]
    OR?: PengumumanWhereInput[]
    NOT?: PengumumanWhereInput | PengumumanWhereInput[]
    judul?: StringFilter<"Pengumuman"> | string
    konten?: StringFilter<"Pengumuman"> | string
    fileUrl?: StringNullableFilter<"Pengumuman"> | string | null
    isPublished?: BoolFilter<"Pengumuman"> | boolean
    createdAt?: DateTimeFilter<"Pengumuman"> | Date | string
    updatedAt?: DateTimeFilter<"Pengumuman"> | Date | string
  }, "id" | "slug">

  export type PengumumanOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PengumumanCountOrderByAggregateInput
    _max?: PengumumanMaxOrderByAggregateInput
    _min?: PengumumanMinOrderByAggregateInput
  }

  export type PengumumanScalarWhereWithAggregatesInput = {
    AND?: PengumumanScalarWhereWithAggregatesInput | PengumumanScalarWhereWithAggregatesInput[]
    OR?: PengumumanScalarWhereWithAggregatesInput[]
    NOT?: PengumumanScalarWhereWithAggregatesInput | PengumumanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pengumuman"> | string
    judul?: StringWithAggregatesFilter<"Pengumuman"> | string
    slug?: StringWithAggregatesFilter<"Pengumuman"> | string
    konten?: StringWithAggregatesFilter<"Pengumuman"> | string
    fileUrl?: StringNullableWithAggregatesFilter<"Pengumuman"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Pengumuman"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Pengumuman"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pengumuman"> | Date | string
  }

  export type GaleriWhereInput = {
    AND?: GaleriWhereInput | GaleriWhereInput[]
    OR?: GaleriWhereInput[]
    NOT?: GaleriWhereInput | GaleriWhereInput[]
    id?: StringFilter<"Galeri"> | string
    judul?: StringFilter<"Galeri"> | string
    deskripsi?: StringNullableFilter<"Galeri"> | string | null
    imageUrl?: StringFilter<"Galeri"> | string
    kategori?: StringNullableFilter<"Galeri"> | string | null
    createdAt?: DateTimeFilter<"Galeri"> | Date | string
  }

  export type GaleriOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    kategori?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: GaleriOrderByRelevanceInput
  }

  export type GaleriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GaleriWhereInput | GaleriWhereInput[]
    OR?: GaleriWhereInput[]
    NOT?: GaleriWhereInput | GaleriWhereInput[]
    judul?: StringFilter<"Galeri"> | string
    deskripsi?: StringNullableFilter<"Galeri"> | string | null
    imageUrl?: StringFilter<"Galeri"> | string
    kategori?: StringNullableFilter<"Galeri"> | string | null
    createdAt?: DateTimeFilter<"Galeri"> | Date | string
  }, "id">

  export type GaleriOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    kategori?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GaleriCountOrderByAggregateInput
    _max?: GaleriMaxOrderByAggregateInput
    _min?: GaleriMinOrderByAggregateInput
  }

  export type GaleriScalarWhereWithAggregatesInput = {
    AND?: GaleriScalarWhereWithAggregatesInput | GaleriScalarWhereWithAggregatesInput[]
    OR?: GaleriScalarWhereWithAggregatesInput[]
    NOT?: GaleriScalarWhereWithAggregatesInput | GaleriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Galeri"> | string
    judul?: StringWithAggregatesFilter<"Galeri"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Galeri"> | string | null
    imageUrl?: StringWithAggregatesFilter<"Galeri"> | string
    kategori?: StringNullableWithAggregatesFilter<"Galeri"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Galeri"> | Date | string
  }

  export type PesanKontakWhereInput = {
    AND?: PesanKontakWhereInput | PesanKontakWhereInput[]
    OR?: PesanKontakWhereInput[]
    NOT?: PesanKontakWhereInput | PesanKontakWhereInput[]
    id?: StringFilter<"PesanKontak"> | string
    nama?: StringFilter<"PesanKontak"> | string
    email?: StringFilter<"PesanKontak"> | string
    subjek?: StringFilter<"PesanKontak"> | string
    pesan?: StringFilter<"PesanKontak"> | string
    isRead?: BoolFilter<"PesanKontak"> | boolean
    createdAt?: DateTimeFilter<"PesanKontak"> | Date | string
  }

  export type PesanKontakOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    subjek?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _relevance?: PesanKontakOrderByRelevanceInput
  }

  export type PesanKontakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PesanKontakWhereInput | PesanKontakWhereInput[]
    OR?: PesanKontakWhereInput[]
    NOT?: PesanKontakWhereInput | PesanKontakWhereInput[]
    nama?: StringFilter<"PesanKontak"> | string
    email?: StringFilter<"PesanKontak"> | string
    subjek?: StringFilter<"PesanKontak"> | string
    pesan?: StringFilter<"PesanKontak"> | string
    isRead?: BoolFilter<"PesanKontak"> | boolean
    createdAt?: DateTimeFilter<"PesanKontak"> | Date | string
  }, "id">

  export type PesanKontakOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    subjek?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: PesanKontakCountOrderByAggregateInput
    _max?: PesanKontakMaxOrderByAggregateInput
    _min?: PesanKontakMinOrderByAggregateInput
  }

  export type PesanKontakScalarWhereWithAggregatesInput = {
    AND?: PesanKontakScalarWhereWithAggregatesInput | PesanKontakScalarWhereWithAggregatesInput[]
    OR?: PesanKontakScalarWhereWithAggregatesInput[]
    NOT?: PesanKontakScalarWhereWithAggregatesInput | PesanKontakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PesanKontak"> | string
    nama?: StringWithAggregatesFilter<"PesanKontak"> | string
    email?: StringWithAggregatesFilter<"PesanKontak"> | string
    subjek?: StringWithAggregatesFilter<"PesanKontak"> | string
    pesan?: StringWithAggregatesFilter<"PesanKontak"> | string
    isRead?: BoolWithAggregatesFilter<"PesanKontak"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PesanKontak"> | Date | string
  }

  export type AgendaWhereInput = {
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    id?: StringFilter<"Agenda"> | string
    judul?: StringFilter<"Agenda"> | string
    slug?: StringFilter<"Agenda"> | string
    deskripsi?: StringFilter<"Agenda"> | string
    lokasi?: StringNullableFilter<"Agenda"> | string | null
    mulai?: DateTimeFilter<"Agenda"> | Date | string
    selesai?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    isPublished?: BoolFilter<"Agenda"> | boolean
    createdAt?: DateTimeFilter<"Agenda"> | Date | string
    updatedAt?: DateTimeFilter<"Agenda"> | Date | string
  }

  export type AgendaOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    lokasi?: SortOrderInput | SortOrder
    mulai?: SortOrder
    selesai?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AgendaOrderByRelevanceInput
  }

  export type AgendaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    judul?: StringFilter<"Agenda"> | string
    deskripsi?: StringFilter<"Agenda"> | string
    lokasi?: StringNullableFilter<"Agenda"> | string | null
    mulai?: DateTimeFilter<"Agenda"> | Date | string
    selesai?: DateTimeNullableFilter<"Agenda"> | Date | string | null
    isPublished?: BoolFilter<"Agenda"> | boolean
    createdAt?: DateTimeFilter<"Agenda"> | Date | string
    updatedAt?: DateTimeFilter<"Agenda"> | Date | string
  }, "id" | "slug">

  export type AgendaOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    lokasi?: SortOrderInput | SortOrder
    mulai?: SortOrder
    selesai?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgendaCountOrderByAggregateInput
    _max?: AgendaMaxOrderByAggregateInput
    _min?: AgendaMinOrderByAggregateInput
  }

  export type AgendaScalarWhereWithAggregatesInput = {
    AND?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    OR?: AgendaScalarWhereWithAggregatesInput[]
    NOT?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agenda"> | string
    judul?: StringWithAggregatesFilter<"Agenda"> | string
    slug?: StringWithAggregatesFilter<"Agenda"> | string
    deskripsi?: StringWithAggregatesFilter<"Agenda"> | string
    lokasi?: StringNullableWithAggregatesFilter<"Agenda"> | string | null
    mulai?: DateTimeWithAggregatesFilter<"Agenda"> | Date | string
    selesai?: DateTimeNullableWithAggregatesFilter<"Agenda"> | Date | string | null
    isPublished?: BoolWithAggregatesFilter<"Agenda"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Agenda"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agenda"> | Date | string
  }

  export type PrestasiWhereInput = {
    AND?: PrestasiWhereInput | PrestasiWhereInput[]
    OR?: PrestasiWhereInput[]
    NOT?: PrestasiWhereInput | PrestasiWhereInput[]
    id?: StringFilter<"Prestasi"> | string
    judul?: StringFilter<"Prestasi"> | string
    peraih?: StringNullableFilter<"Prestasi"> | string | null
    tingkat?: StringFilter<"Prestasi"> | string
    juara?: StringNullableFilter<"Prestasi"> | string | null
    tahun?: IntFilter<"Prestasi"> | number
    deskripsi?: StringNullableFilter<"Prestasi"> | string | null
    gambar?: StringNullableFilter<"Prestasi"> | string | null
    isPublished?: BoolFilter<"Prestasi"> | boolean
    createdAt?: DateTimeFilter<"Prestasi"> | Date | string
    updatedAt?: DateTimeFilter<"Prestasi"> | Date | string
  }

  export type PrestasiOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    peraih?: SortOrderInput | SortOrder
    tingkat?: SortOrder
    juara?: SortOrderInput | SortOrder
    tahun?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PrestasiOrderByRelevanceInput
  }

  export type PrestasiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrestasiWhereInput | PrestasiWhereInput[]
    OR?: PrestasiWhereInput[]
    NOT?: PrestasiWhereInput | PrestasiWhereInput[]
    judul?: StringFilter<"Prestasi"> | string
    peraih?: StringNullableFilter<"Prestasi"> | string | null
    tingkat?: StringFilter<"Prestasi"> | string
    juara?: StringNullableFilter<"Prestasi"> | string | null
    tahun?: IntFilter<"Prestasi"> | number
    deskripsi?: StringNullableFilter<"Prestasi"> | string | null
    gambar?: StringNullableFilter<"Prestasi"> | string | null
    isPublished?: BoolFilter<"Prestasi"> | boolean
    createdAt?: DateTimeFilter<"Prestasi"> | Date | string
    updatedAt?: DateTimeFilter<"Prestasi"> | Date | string
  }, "id">

  export type PrestasiOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    peraih?: SortOrderInput | SortOrder
    tingkat?: SortOrder
    juara?: SortOrderInput | SortOrder
    tahun?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrestasiCountOrderByAggregateInput
    _avg?: PrestasiAvgOrderByAggregateInput
    _max?: PrestasiMaxOrderByAggregateInput
    _min?: PrestasiMinOrderByAggregateInput
    _sum?: PrestasiSumOrderByAggregateInput
  }

  export type PrestasiScalarWhereWithAggregatesInput = {
    AND?: PrestasiScalarWhereWithAggregatesInput | PrestasiScalarWhereWithAggregatesInput[]
    OR?: PrestasiScalarWhereWithAggregatesInput[]
    NOT?: PrestasiScalarWhereWithAggregatesInput | PrestasiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prestasi"> | string
    judul?: StringWithAggregatesFilter<"Prestasi"> | string
    peraih?: StringNullableWithAggregatesFilter<"Prestasi"> | string | null
    tingkat?: StringWithAggregatesFilter<"Prestasi"> | string
    juara?: StringNullableWithAggregatesFilter<"Prestasi"> | string | null
    tahun?: IntWithAggregatesFilter<"Prestasi"> | number
    deskripsi?: StringNullableWithAggregatesFilter<"Prestasi"> | string | null
    gambar?: StringNullableWithAggregatesFilter<"Prestasi"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Prestasi"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Prestasi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prestasi"> | Date | string
  }

  export type UnduhanWhereInput = {
    AND?: UnduhanWhereInput | UnduhanWhereInput[]
    OR?: UnduhanWhereInput[]
    NOT?: UnduhanWhereInput | UnduhanWhereInput[]
    id?: StringFilter<"Unduhan"> | string
    judul?: StringFilter<"Unduhan"> | string
    deskripsi?: StringNullableFilter<"Unduhan"> | string | null
    kategori?: StringFilter<"Unduhan"> | string
    fileUrl?: StringFilter<"Unduhan"> | string
    namaFile?: StringFilter<"Unduhan"> | string
    tipeFile?: StringNullableFilter<"Unduhan"> | string | null
    ukuran?: IntNullableFilter<"Unduhan"> | number | null
    jumlahUnduhan?: IntFilter<"Unduhan"> | number
    isPublished?: BoolFilter<"Unduhan"> | boolean
    createdAt?: DateTimeFilter<"Unduhan"> | Date | string
    updatedAt?: DateTimeFilter<"Unduhan"> | Date | string
  }

  export type UnduhanOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    kategori?: SortOrder
    fileUrl?: SortOrder
    namaFile?: SortOrder
    tipeFile?: SortOrderInput | SortOrder
    ukuran?: SortOrderInput | SortOrder
    jumlahUnduhan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UnduhanOrderByRelevanceInput
  }

  export type UnduhanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnduhanWhereInput | UnduhanWhereInput[]
    OR?: UnduhanWhereInput[]
    NOT?: UnduhanWhereInput | UnduhanWhereInput[]
    judul?: StringFilter<"Unduhan"> | string
    deskripsi?: StringNullableFilter<"Unduhan"> | string | null
    kategori?: StringFilter<"Unduhan"> | string
    fileUrl?: StringFilter<"Unduhan"> | string
    namaFile?: StringFilter<"Unduhan"> | string
    tipeFile?: StringNullableFilter<"Unduhan"> | string | null
    ukuran?: IntNullableFilter<"Unduhan"> | number | null
    jumlahUnduhan?: IntFilter<"Unduhan"> | number
    isPublished?: BoolFilter<"Unduhan"> | boolean
    createdAt?: DateTimeFilter<"Unduhan"> | Date | string
    updatedAt?: DateTimeFilter<"Unduhan"> | Date | string
  }, "id">

  export type UnduhanOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    kategori?: SortOrder
    fileUrl?: SortOrder
    namaFile?: SortOrder
    tipeFile?: SortOrderInput | SortOrder
    ukuran?: SortOrderInput | SortOrder
    jumlahUnduhan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnduhanCountOrderByAggregateInput
    _avg?: UnduhanAvgOrderByAggregateInput
    _max?: UnduhanMaxOrderByAggregateInput
    _min?: UnduhanMinOrderByAggregateInput
    _sum?: UnduhanSumOrderByAggregateInput
  }

  export type UnduhanScalarWhereWithAggregatesInput = {
    AND?: UnduhanScalarWhereWithAggregatesInput | UnduhanScalarWhereWithAggregatesInput[]
    OR?: UnduhanScalarWhereWithAggregatesInput[]
    NOT?: UnduhanScalarWhereWithAggregatesInput | UnduhanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unduhan"> | string
    judul?: StringWithAggregatesFilter<"Unduhan"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Unduhan"> | string | null
    kategori?: StringWithAggregatesFilter<"Unduhan"> | string
    fileUrl?: StringWithAggregatesFilter<"Unduhan"> | string
    namaFile?: StringWithAggregatesFilter<"Unduhan"> | string
    tipeFile?: StringNullableWithAggregatesFilter<"Unduhan"> | string | null
    ukuran?: IntNullableWithAggregatesFilter<"Unduhan"> | number | null
    jumlahUnduhan?: IntWithAggregatesFilter<"Unduhan"> | number
    isPublished?: BoolWithAggregatesFilter<"Unduhan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Unduhan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unduhan"> | Date | string
  }

  export type FaqWhereInput = {
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    id?: StringFilter<"Faq"> | string
    pertanyaan?: StringFilter<"Faq"> | string
    jawaban?: StringFilter<"Faq"> | string
    kategori?: StringFilter<"Faq"> | string
    urutan?: IntFilter<"Faq"> | number
    isPublished?: BoolFilter<"Faq"> | boolean
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }

  export type FaqOrderByWithRelationInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    jawaban?: SortOrder
    kategori?: SortOrder
    urutan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: FaqOrderByRelevanceInput
  }

  export type FaqWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    pertanyaan?: StringFilter<"Faq"> | string
    jawaban?: StringFilter<"Faq"> | string
    kategori?: StringFilter<"Faq"> | string
    urutan?: IntFilter<"Faq"> | number
    isPublished?: BoolFilter<"Faq"> | boolean
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }, "id">

  export type FaqOrderByWithAggregationInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    jawaban?: SortOrder
    kategori?: SortOrder
    urutan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FaqCountOrderByAggregateInput
    _avg?: FaqAvgOrderByAggregateInput
    _max?: FaqMaxOrderByAggregateInput
    _min?: FaqMinOrderByAggregateInput
    _sum?: FaqSumOrderByAggregateInput
  }

  export type FaqScalarWhereWithAggregatesInput = {
    AND?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    OR?: FaqScalarWhereWithAggregatesInput[]
    NOT?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Faq"> | string
    pertanyaan?: StringWithAggregatesFilter<"Faq"> | string
    jawaban?: StringWithAggregatesFilter<"Faq"> | string
    kategori?: StringWithAggregatesFilter<"Faq"> | string
    urutan?: IntWithAggregatesFilter<"Faq"> | number
    isPublished?: BoolWithAggregatesFilter<"Faq"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
  }

  export type PendaftaranPPDBWhereInput = {
    AND?: PendaftaranPPDBWhereInput | PendaftaranPPDBWhereInput[]
    OR?: PendaftaranPPDBWhereInput[]
    NOT?: PendaftaranPPDBWhereInput | PendaftaranPPDBWhereInput[]
    id?: StringFilter<"PendaftaranPPDB"> | string
    nomorPendaftaran?: StringFilter<"PendaftaranPPDB"> | string
    userId?: StringFilter<"PendaftaranPPDB"> | string
    status?: EnumStatusPPDBFilter<"PendaftaranPPDB"> | $Enums.StatusPPDB
    gelombang?: StringFilter<"PendaftaranPPDB"> | string
    catatan?: StringNullableFilter<"PendaftaranPPDB"> | string | null
    createdAt?: DateTimeFilter<"PendaftaranPPDB"> | Date | string
    updatedAt?: DateTimeFilter<"PendaftaranPPDB"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    biodata?: XOR<BiodataSiswaPPDBNullableScalarRelationFilter, BiodataSiswaPPDBWhereInput> | null
    orangTua?: XOR<DataOrangTuaPPDBNullableScalarRelationFilter, DataOrangTuaPPDBWhereInput> | null
    dokumen?: DokumenPPDBListRelationFilter
  }

  export type PendaftaranPPDBOrderByWithRelationInput = {
    id?: SortOrder
    nomorPendaftaran?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gelombang?: SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    biodata?: BiodataSiswaPPDBOrderByWithRelationInput
    orangTua?: DataOrangTuaPPDBOrderByWithRelationInput
    dokumen?: DokumenPPDBOrderByRelationAggregateInput
    _relevance?: PendaftaranPPDBOrderByRelevanceInput
  }

  export type PendaftaranPPDBWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nomorPendaftaran?: string
    userId?: string
    AND?: PendaftaranPPDBWhereInput | PendaftaranPPDBWhereInput[]
    OR?: PendaftaranPPDBWhereInput[]
    NOT?: PendaftaranPPDBWhereInput | PendaftaranPPDBWhereInput[]
    status?: EnumStatusPPDBFilter<"PendaftaranPPDB"> | $Enums.StatusPPDB
    gelombang?: StringFilter<"PendaftaranPPDB"> | string
    catatan?: StringNullableFilter<"PendaftaranPPDB"> | string | null
    createdAt?: DateTimeFilter<"PendaftaranPPDB"> | Date | string
    updatedAt?: DateTimeFilter<"PendaftaranPPDB"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    biodata?: XOR<BiodataSiswaPPDBNullableScalarRelationFilter, BiodataSiswaPPDBWhereInput> | null
    orangTua?: XOR<DataOrangTuaPPDBNullableScalarRelationFilter, DataOrangTuaPPDBWhereInput> | null
    dokumen?: DokumenPPDBListRelationFilter
  }, "id" | "nomorPendaftaran" | "userId">

  export type PendaftaranPPDBOrderByWithAggregationInput = {
    id?: SortOrder
    nomorPendaftaran?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gelombang?: SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PendaftaranPPDBCountOrderByAggregateInput
    _max?: PendaftaranPPDBMaxOrderByAggregateInput
    _min?: PendaftaranPPDBMinOrderByAggregateInput
  }

  export type PendaftaranPPDBScalarWhereWithAggregatesInput = {
    AND?: PendaftaranPPDBScalarWhereWithAggregatesInput | PendaftaranPPDBScalarWhereWithAggregatesInput[]
    OR?: PendaftaranPPDBScalarWhereWithAggregatesInput[]
    NOT?: PendaftaranPPDBScalarWhereWithAggregatesInput | PendaftaranPPDBScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendaftaranPPDB"> | string
    nomorPendaftaran?: StringWithAggregatesFilter<"PendaftaranPPDB"> | string
    userId?: StringWithAggregatesFilter<"PendaftaranPPDB"> | string
    status?: EnumStatusPPDBWithAggregatesFilter<"PendaftaranPPDB"> | $Enums.StatusPPDB
    gelombang?: StringWithAggregatesFilter<"PendaftaranPPDB"> | string
    catatan?: StringNullableWithAggregatesFilter<"PendaftaranPPDB"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PendaftaranPPDB"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PendaftaranPPDB"> | Date | string
  }

  export type BiodataSiswaPPDBWhereInput = {
    AND?: BiodataSiswaPPDBWhereInput | BiodataSiswaPPDBWhereInput[]
    OR?: BiodataSiswaPPDBWhereInput[]
    NOT?: BiodataSiswaPPDBWhereInput | BiodataSiswaPPDBWhereInput[]
    id?: StringFilter<"BiodataSiswaPPDB"> | string
    pendaftaranId?: StringFilter<"BiodataSiswaPPDB"> | string
    namaLengkap?: StringFilter<"BiodataSiswaPPDB"> | string
    nisn?: StringNullableFilter<"BiodataSiswaPPDB"> | string | null
    nik?: StringNullableFilter<"BiodataSiswaPPDB"> | string | null
    tempatLahir?: StringFilter<"BiodataSiswaPPDB"> | string
    tanggalLahir?: DateTimeFilter<"BiodataSiswaPPDB"> | Date | string
    jenisKelamin?: EnumJenisKelaminFilter<"BiodataSiswaPPDB"> | $Enums.JenisKelamin
    agama?: StringFilter<"BiodataSiswaPPDB"> | string
    alamat?: StringFilter<"BiodataSiswaPPDB"> | string
    asalSekolah?: StringFilter<"BiodataSiswaPPDB"> | string
    pendaftaran?: XOR<PendaftaranPPDBScalarRelationFilter, PendaftaranPPDBWhereInput>
  }

  export type BiodataSiswaPPDBOrderByWithRelationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaLengkap?: SortOrder
    nisn?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    agama?: SortOrder
    alamat?: SortOrder
    asalSekolah?: SortOrder
    pendaftaran?: PendaftaranPPDBOrderByWithRelationInput
    _relevance?: BiodataSiswaPPDBOrderByRelevanceInput
  }

  export type BiodataSiswaPPDBWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pendaftaranId?: string
    AND?: BiodataSiswaPPDBWhereInput | BiodataSiswaPPDBWhereInput[]
    OR?: BiodataSiswaPPDBWhereInput[]
    NOT?: BiodataSiswaPPDBWhereInput | BiodataSiswaPPDBWhereInput[]
    namaLengkap?: StringFilter<"BiodataSiswaPPDB"> | string
    nisn?: StringNullableFilter<"BiodataSiswaPPDB"> | string | null
    nik?: StringNullableFilter<"BiodataSiswaPPDB"> | string | null
    tempatLahir?: StringFilter<"BiodataSiswaPPDB"> | string
    tanggalLahir?: DateTimeFilter<"BiodataSiswaPPDB"> | Date | string
    jenisKelamin?: EnumJenisKelaminFilter<"BiodataSiswaPPDB"> | $Enums.JenisKelamin
    agama?: StringFilter<"BiodataSiswaPPDB"> | string
    alamat?: StringFilter<"BiodataSiswaPPDB"> | string
    asalSekolah?: StringFilter<"BiodataSiswaPPDB"> | string
    pendaftaran?: XOR<PendaftaranPPDBScalarRelationFilter, PendaftaranPPDBWhereInput>
  }, "id" | "pendaftaranId">

  export type BiodataSiswaPPDBOrderByWithAggregationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaLengkap?: SortOrder
    nisn?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    agama?: SortOrder
    alamat?: SortOrder
    asalSekolah?: SortOrder
    _count?: BiodataSiswaPPDBCountOrderByAggregateInput
    _max?: BiodataSiswaPPDBMaxOrderByAggregateInput
    _min?: BiodataSiswaPPDBMinOrderByAggregateInput
  }

  export type BiodataSiswaPPDBScalarWhereWithAggregatesInput = {
    AND?: BiodataSiswaPPDBScalarWhereWithAggregatesInput | BiodataSiswaPPDBScalarWhereWithAggregatesInput[]
    OR?: BiodataSiswaPPDBScalarWhereWithAggregatesInput[]
    NOT?: BiodataSiswaPPDBScalarWhereWithAggregatesInput | BiodataSiswaPPDBScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BiodataSiswaPPDB"> | string
    pendaftaranId?: StringWithAggregatesFilter<"BiodataSiswaPPDB"> | string
    namaLengkap?: StringWithAggregatesFilter<"BiodataSiswaPPDB"> | string
    nisn?: StringNullableWithAggregatesFilter<"BiodataSiswaPPDB"> | string | null
    nik?: StringNullableWithAggregatesFilter<"BiodataSiswaPPDB"> | string | null
    tempatLahir?: StringWithAggregatesFilter<"BiodataSiswaPPDB"> | string
    tanggalLahir?: DateTimeWithAggregatesFilter<"BiodataSiswaPPDB"> | Date | string
    jenisKelamin?: EnumJenisKelaminWithAggregatesFilter<"BiodataSiswaPPDB"> | $Enums.JenisKelamin
    agama?: StringWithAggregatesFilter<"BiodataSiswaPPDB"> | string
    alamat?: StringWithAggregatesFilter<"BiodataSiswaPPDB"> | string
    asalSekolah?: StringWithAggregatesFilter<"BiodataSiswaPPDB"> | string
  }

  export type DataOrangTuaPPDBWhereInput = {
    AND?: DataOrangTuaPPDBWhereInput | DataOrangTuaPPDBWhereInput[]
    OR?: DataOrangTuaPPDBWhereInput[]
    NOT?: DataOrangTuaPPDBWhereInput | DataOrangTuaPPDBWhereInput[]
    id?: StringFilter<"DataOrangTuaPPDB"> | string
    pendaftaranId?: StringFilter<"DataOrangTuaPPDB"> | string
    namaAyah?: StringFilter<"DataOrangTuaPPDB"> | string
    pekerjaanAyah?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    noHpAyah?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    namaIbu?: StringFilter<"DataOrangTuaPPDB"> | string
    pekerjaanIbu?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    noHpIbu?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    alamatOrangTua?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    pendaftaran?: XOR<PendaftaranPPDBScalarRelationFilter, PendaftaranPPDBWhereInput>
  }

  export type DataOrangTuaPPDBOrderByWithRelationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaAyah?: SortOrder
    pekerjaanAyah?: SortOrderInput | SortOrder
    noHpAyah?: SortOrderInput | SortOrder
    namaIbu?: SortOrder
    pekerjaanIbu?: SortOrderInput | SortOrder
    noHpIbu?: SortOrderInput | SortOrder
    alamatOrangTua?: SortOrderInput | SortOrder
    pendaftaran?: PendaftaranPPDBOrderByWithRelationInput
    _relevance?: DataOrangTuaPPDBOrderByRelevanceInput
  }

  export type DataOrangTuaPPDBWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pendaftaranId?: string
    AND?: DataOrangTuaPPDBWhereInput | DataOrangTuaPPDBWhereInput[]
    OR?: DataOrangTuaPPDBWhereInput[]
    NOT?: DataOrangTuaPPDBWhereInput | DataOrangTuaPPDBWhereInput[]
    namaAyah?: StringFilter<"DataOrangTuaPPDB"> | string
    pekerjaanAyah?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    noHpAyah?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    namaIbu?: StringFilter<"DataOrangTuaPPDB"> | string
    pekerjaanIbu?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    noHpIbu?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    alamatOrangTua?: StringNullableFilter<"DataOrangTuaPPDB"> | string | null
    pendaftaran?: XOR<PendaftaranPPDBScalarRelationFilter, PendaftaranPPDBWhereInput>
  }, "id" | "pendaftaranId">

  export type DataOrangTuaPPDBOrderByWithAggregationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaAyah?: SortOrder
    pekerjaanAyah?: SortOrderInput | SortOrder
    noHpAyah?: SortOrderInput | SortOrder
    namaIbu?: SortOrder
    pekerjaanIbu?: SortOrderInput | SortOrder
    noHpIbu?: SortOrderInput | SortOrder
    alamatOrangTua?: SortOrderInput | SortOrder
    _count?: DataOrangTuaPPDBCountOrderByAggregateInput
    _max?: DataOrangTuaPPDBMaxOrderByAggregateInput
    _min?: DataOrangTuaPPDBMinOrderByAggregateInput
  }

  export type DataOrangTuaPPDBScalarWhereWithAggregatesInput = {
    AND?: DataOrangTuaPPDBScalarWhereWithAggregatesInput | DataOrangTuaPPDBScalarWhereWithAggregatesInput[]
    OR?: DataOrangTuaPPDBScalarWhereWithAggregatesInput[]
    NOT?: DataOrangTuaPPDBScalarWhereWithAggregatesInput | DataOrangTuaPPDBScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataOrangTuaPPDB"> | string
    pendaftaranId?: StringWithAggregatesFilter<"DataOrangTuaPPDB"> | string
    namaAyah?: StringWithAggregatesFilter<"DataOrangTuaPPDB"> | string
    pekerjaanAyah?: StringNullableWithAggregatesFilter<"DataOrangTuaPPDB"> | string | null
    noHpAyah?: StringNullableWithAggregatesFilter<"DataOrangTuaPPDB"> | string | null
    namaIbu?: StringWithAggregatesFilter<"DataOrangTuaPPDB"> | string
    pekerjaanIbu?: StringNullableWithAggregatesFilter<"DataOrangTuaPPDB"> | string | null
    noHpIbu?: StringNullableWithAggregatesFilter<"DataOrangTuaPPDB"> | string | null
    alamatOrangTua?: StringNullableWithAggregatesFilter<"DataOrangTuaPPDB"> | string | null
  }

  export type DokumenPPDBWhereInput = {
    AND?: DokumenPPDBWhereInput | DokumenPPDBWhereInput[]
    OR?: DokumenPPDBWhereInput[]
    NOT?: DokumenPPDBWhereInput | DokumenPPDBWhereInput[]
    id?: StringFilter<"DokumenPPDB"> | string
    pendaftaranId?: StringFilter<"DokumenPPDB"> | string
    jenisDokumen?: EnumJenisDokumenFilter<"DokumenPPDB"> | $Enums.JenisDokumen
    fileUrl?: StringFilter<"DokumenPPDB"> | string
    isVerified?: BoolFilter<"DokumenPPDB"> | boolean
    pendaftaran?: XOR<PendaftaranPPDBScalarRelationFilter, PendaftaranPPDBWhereInput>
  }

  export type DokumenPPDBOrderByWithRelationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    jenisDokumen?: SortOrder
    fileUrl?: SortOrder
    isVerified?: SortOrder
    pendaftaran?: PendaftaranPPDBOrderByWithRelationInput
    _relevance?: DokumenPPDBOrderByRelevanceInput
  }

  export type DokumenPPDBWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pendaftaranId_jenisDokumen?: DokumenPPDBPendaftaranIdJenisDokumenCompoundUniqueInput
    AND?: DokumenPPDBWhereInput | DokumenPPDBWhereInput[]
    OR?: DokumenPPDBWhereInput[]
    NOT?: DokumenPPDBWhereInput | DokumenPPDBWhereInput[]
    pendaftaranId?: StringFilter<"DokumenPPDB"> | string
    jenisDokumen?: EnumJenisDokumenFilter<"DokumenPPDB"> | $Enums.JenisDokumen
    fileUrl?: StringFilter<"DokumenPPDB"> | string
    isVerified?: BoolFilter<"DokumenPPDB"> | boolean
    pendaftaran?: XOR<PendaftaranPPDBScalarRelationFilter, PendaftaranPPDBWhereInput>
  }, "id" | "pendaftaranId_jenisDokumen">

  export type DokumenPPDBOrderByWithAggregationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    jenisDokumen?: SortOrder
    fileUrl?: SortOrder
    isVerified?: SortOrder
    _count?: DokumenPPDBCountOrderByAggregateInput
    _max?: DokumenPPDBMaxOrderByAggregateInput
    _min?: DokumenPPDBMinOrderByAggregateInput
  }

  export type DokumenPPDBScalarWhereWithAggregatesInput = {
    AND?: DokumenPPDBScalarWhereWithAggregatesInput | DokumenPPDBScalarWhereWithAggregatesInput[]
    OR?: DokumenPPDBScalarWhereWithAggregatesInput[]
    NOT?: DokumenPPDBScalarWhereWithAggregatesInput | DokumenPPDBScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DokumenPPDB"> | string
    pendaftaranId?: StringWithAggregatesFilter<"DokumenPPDB"> | string
    jenisDokumen?: EnumJenisDokumenWithAggregatesFilter<"DokumenPPDB"> | $Enums.JenisDokumen
    fileUrl?: StringWithAggregatesFilter<"DokumenPPDB"> | string
    isVerified?: BoolWithAggregatesFilter<"DokumenPPDB"> | boolean
  }

  export type PengaturanPPDBWhereInput = {
    AND?: PengaturanPPDBWhereInput | PengaturanPPDBWhereInput[]
    OR?: PengaturanPPDBWhereInput[]
    NOT?: PengaturanPPDBWhereInput | PengaturanPPDBWhereInput[]
    id?: StringFilter<"PengaturanPPDB"> | string
    tahunAjaran?: StringFilter<"PengaturanPPDB"> | string
    kodeSurat?: StringFilter<"PengaturanPPDB"> | string
    tempatPenerbitan?: StringNullableFilter<"PengaturanPPDB"> | string | null
    namaKetuaPanitia?: StringNullableFilter<"PengaturanPPDB"> | string | null
    nipKetuaPanitia?: StringNullableFilter<"PengaturanPPDB"> | string | null
    namaKepalaMadrasah?: StringNullableFilter<"PengaturanPPDB"> | string | null
    nipKepalaMadrasah?: StringNullableFilter<"PengaturanPPDB"> | string | null
    catatanSurat?: StringNullableFilter<"PengaturanPPDB"> | string | null
    createdAt?: DateTimeFilter<"PengaturanPPDB"> | Date | string
    updatedAt?: DateTimeFilter<"PengaturanPPDB"> | Date | string
  }

  export type PengaturanPPDBOrderByWithRelationInput = {
    id?: SortOrder
    tahunAjaran?: SortOrder
    kodeSurat?: SortOrder
    tempatPenerbitan?: SortOrderInput | SortOrder
    namaKetuaPanitia?: SortOrderInput | SortOrder
    nipKetuaPanitia?: SortOrderInput | SortOrder
    namaKepalaMadrasah?: SortOrderInput | SortOrder
    nipKepalaMadrasah?: SortOrderInput | SortOrder
    catatanSurat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PengaturanPPDBOrderByRelevanceInput
  }

  export type PengaturanPPDBWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PengaturanPPDBWhereInput | PengaturanPPDBWhereInput[]
    OR?: PengaturanPPDBWhereInput[]
    NOT?: PengaturanPPDBWhereInput | PengaturanPPDBWhereInput[]
    tahunAjaran?: StringFilter<"PengaturanPPDB"> | string
    kodeSurat?: StringFilter<"PengaturanPPDB"> | string
    tempatPenerbitan?: StringNullableFilter<"PengaturanPPDB"> | string | null
    namaKetuaPanitia?: StringNullableFilter<"PengaturanPPDB"> | string | null
    nipKetuaPanitia?: StringNullableFilter<"PengaturanPPDB"> | string | null
    namaKepalaMadrasah?: StringNullableFilter<"PengaturanPPDB"> | string | null
    nipKepalaMadrasah?: StringNullableFilter<"PengaturanPPDB"> | string | null
    catatanSurat?: StringNullableFilter<"PengaturanPPDB"> | string | null
    createdAt?: DateTimeFilter<"PengaturanPPDB"> | Date | string
    updatedAt?: DateTimeFilter<"PengaturanPPDB"> | Date | string
  }, "id">

  export type PengaturanPPDBOrderByWithAggregationInput = {
    id?: SortOrder
    tahunAjaran?: SortOrder
    kodeSurat?: SortOrder
    tempatPenerbitan?: SortOrderInput | SortOrder
    namaKetuaPanitia?: SortOrderInput | SortOrder
    nipKetuaPanitia?: SortOrderInput | SortOrder
    namaKepalaMadrasah?: SortOrderInput | SortOrder
    nipKepalaMadrasah?: SortOrderInput | SortOrder
    catatanSurat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PengaturanPPDBCountOrderByAggregateInput
    _max?: PengaturanPPDBMaxOrderByAggregateInput
    _min?: PengaturanPPDBMinOrderByAggregateInput
  }

  export type PengaturanPPDBScalarWhereWithAggregatesInput = {
    AND?: PengaturanPPDBScalarWhereWithAggregatesInput | PengaturanPPDBScalarWhereWithAggregatesInput[]
    OR?: PengaturanPPDBScalarWhereWithAggregatesInput[]
    NOT?: PengaturanPPDBScalarWhereWithAggregatesInput | PengaturanPPDBScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PengaturanPPDB"> | string
    tahunAjaran?: StringWithAggregatesFilter<"PengaturanPPDB"> | string
    kodeSurat?: StringWithAggregatesFilter<"PengaturanPPDB"> | string
    tempatPenerbitan?: StringNullableWithAggregatesFilter<"PengaturanPPDB"> | string | null
    namaKetuaPanitia?: StringNullableWithAggregatesFilter<"PengaturanPPDB"> | string | null
    nipKetuaPanitia?: StringNullableWithAggregatesFilter<"PengaturanPPDB"> | string | null
    namaKepalaMadrasah?: StringNullableWithAggregatesFilter<"PengaturanPPDB"> | string | null
    nipKepalaMadrasah?: StringNullableWithAggregatesFilter<"PengaturanPPDB"> | string | null
    catatanSurat?: StringNullableWithAggregatesFilter<"PengaturanPPDB"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PengaturanPPDB"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PengaturanPPDB"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    foto?: string | null
    isVerified?: boolean
    emailToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendaftaran?: PendaftaranPPDBCreateNestedOneWithoutUserInput
    berita?: BeritaCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    foto?: string | null
    isVerified?: boolean
    emailToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendaftaran?: PendaftaranPPDBUncheckedCreateNestedOneWithoutUserInput
    berita?: BeritaUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendaftaran?: PendaftaranPPDBUpdateOneWithoutUserNestedInput
    berita?: BeritaUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendaftaran?: PendaftaranPPDBUncheckedUpdateOneWithoutUserNestedInput
    berita?: BeritaUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    foto?: string | null
    isVerified?: boolean
    emailToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilSekolahCreateInput = {
    id?: string
    namaSekolah?: string
    npsn?: string
    akreditasi?: string
    tagline?: string | null
    deskripsi?: string | null
    sejarah?: string | null
    logo?: string | null
    banner?: string | null
    alamat?: string | null
    email?: string | null
    telepon?: string | null
    whatsapp?: string | null
    mapsUrl?: string | null
    visi?: string | null
    misi?: NullableJsonNullValueInput | InputJsonValue
    rdmUrl?: string | null
    rdmKeterangan?: string | null
    rdmAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilSekolahUncheckedCreateInput = {
    id?: string
    namaSekolah?: string
    npsn?: string
    akreditasi?: string
    tagline?: string | null
    deskripsi?: string | null
    sejarah?: string | null
    logo?: string | null
    banner?: string | null
    alamat?: string | null
    email?: string | null
    telepon?: string | null
    whatsapp?: string | null
    mapsUrl?: string | null
    visi?: string | null
    misi?: NullableJsonNullValueInput | InputJsonValue
    rdmUrl?: string | null
    rdmKeterangan?: string | null
    rdmAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilSekolahUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaSekolah?: StringFieldUpdateOperationsInput | string
    npsn?: StringFieldUpdateOperationsInput | string
    akreditasi?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    sejarah?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visi?: NullableStringFieldUpdateOperationsInput | string | null
    misi?: NullableJsonNullValueInput | InputJsonValue
    rdmUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rdmKeterangan?: NullableStringFieldUpdateOperationsInput | string | null
    rdmAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilSekolahUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaSekolah?: StringFieldUpdateOperationsInput | string
    npsn?: StringFieldUpdateOperationsInput | string
    akreditasi?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    sejarah?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visi?: NullableStringFieldUpdateOperationsInput | string | null
    misi?: NullableJsonNullValueInput | InputJsonValue
    rdmUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rdmKeterangan?: NullableStringFieldUpdateOperationsInput | string | null
    rdmAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilSekolahCreateManyInput = {
    id?: string
    namaSekolah?: string
    npsn?: string
    akreditasi?: string
    tagline?: string | null
    deskripsi?: string | null
    sejarah?: string | null
    logo?: string | null
    banner?: string | null
    alamat?: string | null
    email?: string | null
    telepon?: string | null
    whatsapp?: string | null
    mapsUrl?: string | null
    visi?: string | null
    misi?: NullableJsonNullValueInput | InputJsonValue
    rdmUrl?: string | null
    rdmKeterangan?: string | null
    rdmAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfilSekolahUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaSekolah?: StringFieldUpdateOperationsInput | string
    npsn?: StringFieldUpdateOperationsInput | string
    akreditasi?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    sejarah?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visi?: NullableStringFieldUpdateOperationsInput | string | null
    misi?: NullableJsonNullValueInput | InputJsonValue
    rdmUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rdmKeterangan?: NullableStringFieldUpdateOperationsInput | string | null
    rdmAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilSekolahUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaSekolah?: StringFieldUpdateOperationsInput | string
    npsn?: StringFieldUpdateOperationsInput | string
    akreditasi?: StringFieldUpdateOperationsInput | string
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    sejarah?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telepon?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visi?: NullableStringFieldUpdateOperationsInput | string | null
    misi?: NullableJsonNullValueInput | InputJsonValue
    rdmUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rdmKeterangan?: NullableStringFieldUpdateOperationsInput | string | null
    rdmAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrukturOrganisasiCreateInput = {
    id?: string
    nama: string
    jabatan: string
    foto?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrukturOrganisasiUncheckedCreateInput = {
    id?: string
    nama: string
    jabatan: string
    foto?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrukturOrganisasiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrukturOrganisasiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrukturOrganisasiCreateManyInput = {
    id?: string
    nama: string
    jabatan: string
    foto?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrukturOrganisasiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrukturOrganisasiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasCreateInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    ikon?: string | null
    gambar?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasUncheckedCreateInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    ikon?: string | null
    gambar?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasCreateManyInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    ikon?: string | null
    gambar?: string | null
    urutan?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FasilitasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FasilitasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    ikon?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriBeritaCreateInput = {
    id?: string
    nama: string
    slug: string
    berita?: BeritaCreateNestedManyWithoutKategoriInput
  }

  export type KategoriBeritaUncheckedCreateInput = {
    id?: string
    nama: string
    slug: string
    berita?: BeritaUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriBeritaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    berita?: BeritaUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriBeritaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    berita?: BeritaUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriBeritaCreateManyInput = {
    id?: string
    nama: string
    slug: string
  }

  export type KategoriBeritaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriBeritaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type BeritaCreateInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    gambar?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutBeritaInput
    kategori?: KategoriBeritaCreateNestedOneWithoutBeritaInput
  }

  export type BeritaUncheckedCreateInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    gambar?: string | null
    isPublished?: boolean
    authorId: string
    kategoriId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeritaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutBeritaNestedInput
    kategori?: KategoriBeritaUpdateOneWithoutBeritaNestedInput
  }

  export type BeritaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    kategoriId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaCreateManyInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    gambar?: string | null
    isPublished?: boolean
    authorId: string
    kategoriId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeritaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    kategoriId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengumumanCreateInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    fileUrl?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengumumanUncheckedCreateInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    fileUrl?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengumumanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengumumanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengumumanCreateManyInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    fileUrl?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengumumanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengumumanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GaleriCreateInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    imageUrl: string
    kategori?: string | null
    createdAt?: Date | string
  }

  export type GaleriUncheckedCreateInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    imageUrl: string
    kategori?: string | null
    createdAt?: Date | string
  }

  export type GaleriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GaleriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GaleriCreateManyInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    imageUrl: string
    kategori?: string | null
    createdAt?: Date | string
  }

  export type GaleriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GaleriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesanKontakCreateInput = {
    id?: string
    nama: string
    email: string
    subjek: string
    pesan: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type PesanKontakUncheckedCreateInput = {
    id?: string
    nama: string
    email: string
    subjek: string
    pesan: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type PesanKontakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subjek?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesanKontakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subjek?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesanKontakCreateManyInput = {
    id?: string
    nama: string
    email: string
    subjek: string
    pesan: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type PesanKontakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subjek?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesanKontakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subjek?: StringFieldUpdateOperationsInput | string
    pesan?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaCreateInput = {
    id?: string
    judul: string
    slug: string
    deskripsi: string
    lokasi?: string | null
    mulai: Date | string
    selesai?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaUncheckedCreateInput = {
    id?: string
    judul: string
    slug: string
    deskripsi: string
    lokasi?: string | null
    mulai: Date | string
    selesai?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    selesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    selesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaCreateManyInput = {
    id?: string
    judul: string
    slug: string
    deskripsi: string
    lokasi?: string | null
    mulai: Date | string
    selesai?: Date | string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    selesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    selesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrestasiCreateInput = {
    id?: string
    judul: string
    peraih?: string | null
    tingkat?: string
    juara?: string | null
    tahun: number
    deskripsi?: string | null
    gambar?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrestasiUncheckedCreateInput = {
    id?: string
    judul: string
    peraih?: string | null
    tingkat?: string
    juara?: string | null
    tahun: number
    deskripsi?: string | null
    gambar?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrestasiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    peraih?: NullableStringFieldUpdateOperationsInput | string | null
    tingkat?: StringFieldUpdateOperationsInput | string
    juara?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrestasiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    peraih?: NullableStringFieldUpdateOperationsInput | string | null
    tingkat?: StringFieldUpdateOperationsInput | string
    juara?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrestasiCreateManyInput = {
    id?: string
    judul: string
    peraih?: string | null
    tingkat?: string
    juara?: string | null
    tahun: number
    deskripsi?: string | null
    gambar?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrestasiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    peraih?: NullableStringFieldUpdateOperationsInput | string | null
    tingkat?: StringFieldUpdateOperationsInput | string
    juara?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrestasiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    peraih?: NullableStringFieldUpdateOperationsInput | string | null
    tingkat?: StringFieldUpdateOperationsInput | string
    juara?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnduhanCreateInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    kategori?: string
    fileUrl: string
    namaFile: string
    tipeFile?: string | null
    ukuran?: number | null
    jumlahUnduhan?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnduhanUncheckedCreateInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    kategori?: string
    fileUrl: string
    namaFile: string
    tipeFile?: string | null
    ukuran?: number | null
    jumlahUnduhan?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnduhanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    tipeFile?: NullableStringFieldUpdateOperationsInput | string | null
    ukuran?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahUnduhan?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnduhanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    tipeFile?: NullableStringFieldUpdateOperationsInput | string | null
    ukuran?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahUnduhan?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnduhanCreateManyInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    kategori?: string
    fileUrl: string
    namaFile: string
    tipeFile?: string | null
    ukuran?: number | null
    jumlahUnduhan?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnduhanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    tipeFile?: NullableStringFieldUpdateOperationsInput | string | null
    ukuran?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahUnduhan?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnduhanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    namaFile?: StringFieldUpdateOperationsInput | string
    tipeFile?: NullableStringFieldUpdateOperationsInput | string | null
    ukuran?: NullableIntFieldUpdateOperationsInput | number | null
    jumlahUnduhan?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateInput = {
    id?: string
    pertanyaan: string
    jawaban: string
    kategori?: string
    urutan?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUncheckedCreateInput = {
    id?: string
    pertanyaan: string
    jawaban: string
    kategori?: string
    urutan?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    jawaban?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    jawaban?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateManyInput = {
    id?: string
    pertanyaan: string
    jawaban: string
    kategori?: string
    urutan?: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    jawaban?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    jawaban?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftaranPPDBCreateInput = {
    id?: string
    nomorPendaftaran: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    biodata?: BiodataSiswaPPDBCreateNestedOneWithoutPendaftaranInput
    orangTua?: DataOrangTuaPPDBCreateNestedOneWithoutPendaftaranInput
    dokumen?: DokumenPPDBCreateNestedManyWithoutPendaftaranInput
  }

  export type PendaftaranPPDBUncheckedCreateInput = {
    id?: string
    nomorPendaftaran: string
    userId: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataSiswaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput
    orangTua?: DataOrangTuaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput
    dokumen?: DokumenPPDBUncheckedCreateNestedManyWithoutPendaftaranInput
  }

  export type PendaftaranPPDBUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    biodata?: BiodataSiswaPPDBUpdateOneWithoutPendaftaranNestedInput
    orangTua?: DataOrangTuaPPDBUpdateOneWithoutPendaftaranNestedInput
    dokumen?: DokumenPPDBUpdateManyWithoutPendaftaranNestedInput
  }

  export type PendaftaranPPDBUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataSiswaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput
    orangTua?: DataOrangTuaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput
    dokumen?: DokumenPPDBUncheckedUpdateManyWithoutPendaftaranNestedInput
  }

  export type PendaftaranPPDBCreateManyInput = {
    id?: string
    nomorPendaftaran: string
    userId: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendaftaranPPDBUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftaranPPDBUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiodataSiswaPPDBCreateInput = {
    id?: string
    namaLengkap: string
    nisn?: string | null
    nik?: string | null
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    agama?: string
    alamat: string
    asalSekolah: string
    pendaftaran: PendaftaranPPDBCreateNestedOneWithoutBiodataInput
  }

  export type BiodataSiswaPPDBUncheckedCreateInput = {
    id?: string
    pendaftaranId: string
    namaLengkap: string
    nisn?: string | null
    nik?: string | null
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    agama?: string
    alamat: string
    asalSekolah: string
  }

  export type BiodataSiswaPPDBUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    agama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    asalSekolah?: StringFieldUpdateOperationsInput | string
    pendaftaran?: PendaftaranPPDBUpdateOneRequiredWithoutBiodataNestedInput
  }

  export type BiodataSiswaPPDBUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    agama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    asalSekolah?: StringFieldUpdateOperationsInput | string
  }

  export type BiodataSiswaPPDBCreateManyInput = {
    id?: string
    pendaftaranId: string
    namaLengkap: string
    nisn?: string | null
    nik?: string | null
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    agama?: string
    alamat: string
    asalSekolah: string
  }

  export type BiodataSiswaPPDBUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    agama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    asalSekolah?: StringFieldUpdateOperationsInput | string
  }

  export type BiodataSiswaPPDBUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    agama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    asalSekolah?: StringFieldUpdateOperationsInput | string
  }

  export type DataOrangTuaPPDBCreateInput = {
    id?: string
    namaAyah: string
    pekerjaanAyah?: string | null
    noHpAyah?: string | null
    namaIbu: string
    pekerjaanIbu?: string | null
    noHpIbu?: string | null
    alamatOrangTua?: string | null
    pendaftaran: PendaftaranPPDBCreateNestedOneWithoutOrangTuaInput
  }

  export type DataOrangTuaPPDBUncheckedCreateInput = {
    id?: string
    pendaftaranId: string
    namaAyah: string
    pekerjaanAyah?: string | null
    noHpAyah?: string | null
    namaIbu: string
    pekerjaanIbu?: string | null
    noHpIbu?: string | null
    alamatOrangTua?: string | null
  }

  export type DataOrangTuaPPDBUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAyah?: StringFieldUpdateOperationsInput | string
    pekerjaanAyah?: NullableStringFieldUpdateOperationsInput | string | null
    noHpAyah?: NullableStringFieldUpdateOperationsInput | string | null
    namaIbu?: StringFieldUpdateOperationsInput | string
    pekerjaanIbu?: NullableStringFieldUpdateOperationsInput | string | null
    noHpIbu?: NullableStringFieldUpdateOperationsInput | string | null
    alamatOrangTua?: NullableStringFieldUpdateOperationsInput | string | null
    pendaftaran?: PendaftaranPPDBUpdateOneRequiredWithoutOrangTuaNestedInput
  }

  export type DataOrangTuaPPDBUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    namaAyah?: StringFieldUpdateOperationsInput | string
    pekerjaanAyah?: NullableStringFieldUpdateOperationsInput | string | null
    noHpAyah?: NullableStringFieldUpdateOperationsInput | string | null
    namaIbu?: StringFieldUpdateOperationsInput | string
    pekerjaanIbu?: NullableStringFieldUpdateOperationsInput | string | null
    noHpIbu?: NullableStringFieldUpdateOperationsInput | string | null
    alamatOrangTua?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataOrangTuaPPDBCreateManyInput = {
    id?: string
    pendaftaranId: string
    namaAyah: string
    pekerjaanAyah?: string | null
    noHpAyah?: string | null
    namaIbu: string
    pekerjaanIbu?: string | null
    noHpIbu?: string | null
    alamatOrangTua?: string | null
  }

  export type DataOrangTuaPPDBUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAyah?: StringFieldUpdateOperationsInput | string
    pekerjaanAyah?: NullableStringFieldUpdateOperationsInput | string | null
    noHpAyah?: NullableStringFieldUpdateOperationsInput | string | null
    namaIbu?: StringFieldUpdateOperationsInput | string
    pekerjaanIbu?: NullableStringFieldUpdateOperationsInput | string | null
    noHpIbu?: NullableStringFieldUpdateOperationsInput | string | null
    alamatOrangTua?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataOrangTuaPPDBUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    namaAyah?: StringFieldUpdateOperationsInput | string
    pekerjaanAyah?: NullableStringFieldUpdateOperationsInput | string | null
    noHpAyah?: NullableStringFieldUpdateOperationsInput | string | null
    namaIbu?: StringFieldUpdateOperationsInput | string
    pekerjaanIbu?: NullableStringFieldUpdateOperationsInput | string | null
    noHpIbu?: NullableStringFieldUpdateOperationsInput | string | null
    alamatOrangTua?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DokumenPPDBCreateInput = {
    id?: string
    jenisDokumen: $Enums.JenisDokumen
    fileUrl: string
    isVerified?: boolean
    pendaftaran: PendaftaranPPDBCreateNestedOneWithoutDokumenInput
  }

  export type DokumenPPDBUncheckedCreateInput = {
    id?: string
    pendaftaranId: string
    jenisDokumen: $Enums.JenisDokumen
    fileUrl: string
    isVerified?: boolean
  }

  export type DokumenPPDBUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisDokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    fileUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    pendaftaran?: PendaftaranPPDBUpdateOneRequiredWithoutDokumenNestedInput
  }

  export type DokumenPPDBUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    jenisDokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    fileUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DokumenPPDBCreateManyInput = {
    id?: string
    pendaftaranId: string
    jenisDokumen: $Enums.JenisDokumen
    fileUrl: string
    isVerified?: boolean
  }

  export type DokumenPPDBUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisDokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    fileUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DokumenPPDBUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    jenisDokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    fileUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PengaturanPPDBCreateInput = {
    id?: string
    tahunAjaran?: string
    kodeSurat?: string
    tempatPenerbitan?: string | null
    namaKetuaPanitia?: string | null
    nipKetuaPanitia?: string | null
    namaKepalaMadrasah?: string | null
    nipKepalaMadrasah?: string | null
    catatanSurat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengaturanPPDBUncheckedCreateInput = {
    id?: string
    tahunAjaran?: string
    kodeSurat?: string
    tempatPenerbitan?: string | null
    namaKetuaPanitia?: string | null
    nipKetuaPanitia?: string | null
    namaKepalaMadrasah?: string | null
    nipKepalaMadrasah?: string | null
    catatanSurat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengaturanPPDBUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tahunAjaran?: StringFieldUpdateOperationsInput | string
    kodeSurat?: StringFieldUpdateOperationsInput | string
    tempatPenerbitan?: NullableStringFieldUpdateOperationsInput | string | null
    namaKetuaPanitia?: NullableStringFieldUpdateOperationsInput | string | null
    nipKetuaPanitia?: NullableStringFieldUpdateOperationsInput | string | null
    namaKepalaMadrasah?: NullableStringFieldUpdateOperationsInput | string | null
    nipKepalaMadrasah?: NullableStringFieldUpdateOperationsInput | string | null
    catatanSurat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengaturanPPDBUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tahunAjaran?: StringFieldUpdateOperationsInput | string
    kodeSurat?: StringFieldUpdateOperationsInput | string
    tempatPenerbitan?: NullableStringFieldUpdateOperationsInput | string | null
    namaKetuaPanitia?: NullableStringFieldUpdateOperationsInput | string | null
    nipKetuaPanitia?: NullableStringFieldUpdateOperationsInput | string | null
    namaKepalaMadrasah?: NullableStringFieldUpdateOperationsInput | string | null
    nipKepalaMadrasah?: NullableStringFieldUpdateOperationsInput | string | null
    catatanSurat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengaturanPPDBCreateManyInput = {
    id?: string
    tahunAjaran?: string
    kodeSurat?: string
    tempatPenerbitan?: string | null
    namaKetuaPanitia?: string | null
    nipKetuaPanitia?: string | null
    namaKepalaMadrasah?: string | null
    nipKepalaMadrasah?: string | null
    catatanSurat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PengaturanPPDBUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tahunAjaran?: StringFieldUpdateOperationsInput | string
    kodeSurat?: StringFieldUpdateOperationsInput | string
    tempatPenerbitan?: NullableStringFieldUpdateOperationsInput | string | null
    namaKetuaPanitia?: NullableStringFieldUpdateOperationsInput | string | null
    nipKetuaPanitia?: NullableStringFieldUpdateOperationsInput | string | null
    namaKepalaMadrasah?: NullableStringFieldUpdateOperationsInput | string | null
    nipKepalaMadrasah?: NullableStringFieldUpdateOperationsInput | string | null
    catatanSurat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengaturanPPDBUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tahunAjaran?: StringFieldUpdateOperationsInput | string
    kodeSurat?: StringFieldUpdateOperationsInput | string
    tempatPenerbitan?: NullableStringFieldUpdateOperationsInput | string | null
    namaKetuaPanitia?: NullableStringFieldUpdateOperationsInput | string | null
    nipKetuaPanitia?: NullableStringFieldUpdateOperationsInput | string | null
    namaKepalaMadrasah?: NullableStringFieldUpdateOperationsInput | string | null
    nipKepalaMadrasah?: NullableStringFieldUpdateOperationsInput | string | null
    catatanSurat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PendaftaranPPDBNullableScalarRelationFilter = {
    is?: PendaftaranPPDBWhereInput | null
    isNot?: PendaftaranPPDBWhereInput | null
  }

  export type BeritaListRelationFilter = {
    every?: BeritaWhereInput
    some?: BeritaWhereInput
    none?: BeritaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BeritaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    foto?: SortOrder
    isVerified?: SortOrder
    emailToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    foto?: SortOrder
    isVerified?: SortOrder
    emailToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    foto?: SortOrder
    isVerified?: SortOrder
    emailToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProfilSekolahOrderByRelevanceInput = {
    fields: ProfilSekolahOrderByRelevanceFieldEnum | ProfilSekolahOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfilSekolahCountOrderByAggregateInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    npsn?: SortOrder
    akreditasi?: SortOrder
    tagline?: SortOrder
    deskripsi?: SortOrder
    sejarah?: SortOrder
    logo?: SortOrder
    banner?: SortOrder
    alamat?: SortOrder
    email?: SortOrder
    telepon?: SortOrder
    whatsapp?: SortOrder
    mapsUrl?: SortOrder
    visi?: SortOrder
    misi?: SortOrder
    rdmUrl?: SortOrder
    rdmKeterangan?: SortOrder
    rdmAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilSekolahMaxOrderByAggregateInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    npsn?: SortOrder
    akreditasi?: SortOrder
    tagline?: SortOrder
    deskripsi?: SortOrder
    sejarah?: SortOrder
    logo?: SortOrder
    banner?: SortOrder
    alamat?: SortOrder
    email?: SortOrder
    telepon?: SortOrder
    whatsapp?: SortOrder
    mapsUrl?: SortOrder
    visi?: SortOrder
    rdmUrl?: SortOrder
    rdmKeterangan?: SortOrder
    rdmAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfilSekolahMinOrderByAggregateInput = {
    id?: SortOrder
    namaSekolah?: SortOrder
    npsn?: SortOrder
    akreditasi?: SortOrder
    tagline?: SortOrder
    deskripsi?: SortOrder
    sejarah?: SortOrder
    logo?: SortOrder
    banner?: SortOrder
    alamat?: SortOrder
    email?: SortOrder
    telepon?: SortOrder
    whatsapp?: SortOrder
    mapsUrl?: SortOrder
    visi?: SortOrder
    rdmUrl?: SortOrder
    rdmKeterangan?: SortOrder
    rdmAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type StrukturOrganisasiOrderByRelevanceInput = {
    fields: StrukturOrganisasiOrderByRelevanceFieldEnum | StrukturOrganisasiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StrukturOrganisasiCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    foto?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StrukturOrganisasiAvgOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type StrukturOrganisasiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    foto?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StrukturOrganisasiMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    jabatan?: SortOrder
    foto?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StrukturOrganisasiSumOrderByAggregateInput = {
    urutan?: SortOrder
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

  export type FasilitasOrderByRelevanceInput = {
    fields: FasilitasOrderByRelevanceFieldEnum | FasilitasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FasilitasCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    ikon?: SortOrder
    gambar?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FasilitasAvgOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type FasilitasMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    ikon?: SortOrder
    gambar?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FasilitasMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    ikon?: SortOrder
    gambar?: SortOrder
    urutan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FasilitasSumOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type KategoriBeritaOrderByRelevanceInput = {
    fields: KategoriBeritaOrderByRelevanceFieldEnum | KategoriBeritaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KategoriBeritaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
  }

  export type KategoriBeritaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
  }

  export type KategoriBeritaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KategoriBeritaNullableScalarRelationFilter = {
    is?: KategoriBeritaWhereInput | null
    isNot?: KategoriBeritaWhereInput | null
  }

  export type BeritaOrderByRelevanceInput = {
    fields: BeritaOrderByRelevanceFieldEnum | BeritaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BeritaCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    gambar?: SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeritaMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    gambar?: SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeritaMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    gambar?: SortOrder
    isPublished?: SortOrder
    authorId?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PengumumanOrderByRelevanceInput = {
    fields: PengumumanOrderByRelevanceFieldEnum | PengumumanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PengumumanCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    fileUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PengumumanMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    fileUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PengumumanMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    konten?: SortOrder
    fileUrl?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GaleriOrderByRelevanceInput = {
    fields: GaleriOrderByRelevanceFieldEnum | GaleriOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GaleriCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    imageUrl?: SortOrder
    kategori?: SortOrder
    createdAt?: SortOrder
  }

  export type GaleriMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    imageUrl?: SortOrder
    kategori?: SortOrder
    createdAt?: SortOrder
  }

  export type GaleriMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    imageUrl?: SortOrder
    kategori?: SortOrder
    createdAt?: SortOrder
  }

  export type PesanKontakOrderByRelevanceInput = {
    fields: PesanKontakOrderByRelevanceFieldEnum | PesanKontakOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PesanKontakCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    subjek?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type PesanKontakMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    subjek?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type PesanKontakMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    subjek?: SortOrder
    pesan?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AgendaOrderByRelevanceInput = {
    fields: AgendaOrderByRelevanceFieldEnum | AgendaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AgendaCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    lokasi?: SortOrder
    mulai?: SortOrder
    selesai?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendaMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    lokasi?: SortOrder
    mulai?: SortOrder
    selesai?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendaMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    lokasi?: SortOrder
    mulai?: SortOrder
    selesai?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PrestasiOrderByRelevanceInput = {
    fields: PrestasiOrderByRelevanceFieldEnum | PrestasiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrestasiCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    peraih?: SortOrder
    tingkat?: SortOrder
    juara?: SortOrder
    tahun?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrestasiAvgOrderByAggregateInput = {
    tahun?: SortOrder
  }

  export type PrestasiMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    peraih?: SortOrder
    tingkat?: SortOrder
    juara?: SortOrder
    tahun?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrestasiMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    peraih?: SortOrder
    tingkat?: SortOrder
    juara?: SortOrder
    tahun?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrestasiSumOrderByAggregateInput = {
    tahun?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UnduhanOrderByRelevanceInput = {
    fields: UnduhanOrderByRelevanceFieldEnum | UnduhanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UnduhanCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    kategori?: SortOrder
    fileUrl?: SortOrder
    namaFile?: SortOrder
    tipeFile?: SortOrder
    ukuran?: SortOrder
    jumlahUnduhan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnduhanAvgOrderByAggregateInput = {
    ukuran?: SortOrder
    jumlahUnduhan?: SortOrder
  }

  export type UnduhanMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    kategori?: SortOrder
    fileUrl?: SortOrder
    namaFile?: SortOrder
    tipeFile?: SortOrder
    ukuran?: SortOrder
    jumlahUnduhan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnduhanMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    kategori?: SortOrder
    fileUrl?: SortOrder
    namaFile?: SortOrder
    tipeFile?: SortOrder
    ukuran?: SortOrder
    jumlahUnduhan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnduhanSumOrderByAggregateInput = {
    ukuran?: SortOrder
    jumlahUnduhan?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FaqOrderByRelevanceInput = {
    fields: FaqOrderByRelevanceFieldEnum | FaqOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FaqCountOrderByAggregateInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    jawaban?: SortOrder
    kategori?: SortOrder
    urutan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqAvgOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type FaqMaxOrderByAggregateInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    jawaban?: SortOrder
    kategori?: SortOrder
    urutan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqMinOrderByAggregateInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    jawaban?: SortOrder
    kategori?: SortOrder
    urutan?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqSumOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type EnumStatusPPDBFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPPDB | EnumStatusPPDBFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPPDB[]
    notIn?: $Enums.StatusPPDB[]
    not?: NestedEnumStatusPPDBFilter<$PrismaModel> | $Enums.StatusPPDB
  }

  export type BiodataSiswaPPDBNullableScalarRelationFilter = {
    is?: BiodataSiswaPPDBWhereInput | null
    isNot?: BiodataSiswaPPDBWhereInput | null
  }

  export type DataOrangTuaPPDBNullableScalarRelationFilter = {
    is?: DataOrangTuaPPDBWhereInput | null
    isNot?: DataOrangTuaPPDBWhereInput | null
  }

  export type DokumenPPDBListRelationFilter = {
    every?: DokumenPPDBWhereInput
    some?: DokumenPPDBWhereInput
    none?: DokumenPPDBWhereInput
  }

  export type DokumenPPDBOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PendaftaranPPDBOrderByRelevanceInput = {
    fields: PendaftaranPPDBOrderByRelevanceFieldEnum | PendaftaranPPDBOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PendaftaranPPDBCountOrderByAggregateInput = {
    id?: SortOrder
    nomorPendaftaran?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gelombang?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendaftaranPPDBMaxOrderByAggregateInput = {
    id?: SortOrder
    nomorPendaftaran?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gelombang?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendaftaranPPDBMinOrderByAggregateInput = {
    id?: SortOrder
    nomorPendaftaran?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gelombang?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusPPDBWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPPDB | EnumStatusPPDBFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPPDB[]
    notIn?: $Enums.StatusPPDB[]
    not?: NestedEnumStatusPPDBWithAggregatesFilter<$PrismaModel> | $Enums.StatusPPDB
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPPDBFilter<$PrismaModel>
    _max?: NestedEnumStatusPPDBFilter<$PrismaModel>
  }

  export type EnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type PendaftaranPPDBScalarRelationFilter = {
    is?: PendaftaranPPDBWhereInput
    isNot?: PendaftaranPPDBWhereInput
  }

  export type BiodataSiswaPPDBOrderByRelevanceInput = {
    fields: BiodataSiswaPPDBOrderByRelevanceFieldEnum | BiodataSiswaPPDBOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BiodataSiswaPPDBCountOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaLengkap?: SortOrder
    nisn?: SortOrder
    nik?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    agama?: SortOrder
    alamat?: SortOrder
    asalSekolah?: SortOrder
  }

  export type BiodataSiswaPPDBMaxOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaLengkap?: SortOrder
    nisn?: SortOrder
    nik?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    agama?: SortOrder
    alamat?: SortOrder
    asalSekolah?: SortOrder
  }

  export type BiodataSiswaPPDBMinOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaLengkap?: SortOrder
    nisn?: SortOrder
    nik?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    agama?: SortOrder
    alamat?: SortOrder
    asalSekolah?: SortOrder
  }

  export type EnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type DataOrangTuaPPDBOrderByRelevanceInput = {
    fields: DataOrangTuaPPDBOrderByRelevanceFieldEnum | DataOrangTuaPPDBOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DataOrangTuaPPDBCountOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaAyah?: SortOrder
    pekerjaanAyah?: SortOrder
    noHpAyah?: SortOrder
    namaIbu?: SortOrder
    pekerjaanIbu?: SortOrder
    noHpIbu?: SortOrder
    alamatOrangTua?: SortOrder
  }

  export type DataOrangTuaPPDBMaxOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaAyah?: SortOrder
    pekerjaanAyah?: SortOrder
    noHpAyah?: SortOrder
    namaIbu?: SortOrder
    pekerjaanIbu?: SortOrder
    noHpIbu?: SortOrder
    alamatOrangTua?: SortOrder
  }

  export type DataOrangTuaPPDBMinOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    namaAyah?: SortOrder
    pekerjaanAyah?: SortOrder
    noHpAyah?: SortOrder
    namaIbu?: SortOrder
    pekerjaanIbu?: SortOrder
    noHpIbu?: SortOrder
    alamatOrangTua?: SortOrder
  }

  export type EnumJenisDokumenFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[]
    notIn?: $Enums.JenisDokumen[]
    not?: NestedEnumJenisDokumenFilter<$PrismaModel> | $Enums.JenisDokumen
  }

  export type DokumenPPDBOrderByRelevanceInput = {
    fields: DokumenPPDBOrderByRelevanceFieldEnum | DokumenPPDBOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DokumenPPDBPendaftaranIdJenisDokumenCompoundUniqueInput = {
    pendaftaranId: string
    jenisDokumen: $Enums.JenisDokumen
  }

  export type DokumenPPDBCountOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    jenisDokumen?: SortOrder
    fileUrl?: SortOrder
    isVerified?: SortOrder
  }

  export type DokumenPPDBMaxOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    jenisDokumen?: SortOrder
    fileUrl?: SortOrder
    isVerified?: SortOrder
  }

  export type DokumenPPDBMinOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    jenisDokumen?: SortOrder
    fileUrl?: SortOrder
    isVerified?: SortOrder
  }

  export type EnumJenisDokumenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[]
    notIn?: $Enums.JenisDokumen[]
    not?: NestedEnumJenisDokumenWithAggregatesFilter<$PrismaModel> | $Enums.JenisDokumen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisDokumenFilter<$PrismaModel>
    _max?: NestedEnumJenisDokumenFilter<$PrismaModel>
  }

  export type PengaturanPPDBOrderByRelevanceInput = {
    fields: PengaturanPPDBOrderByRelevanceFieldEnum | PengaturanPPDBOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PengaturanPPDBCountOrderByAggregateInput = {
    id?: SortOrder
    tahunAjaran?: SortOrder
    kodeSurat?: SortOrder
    tempatPenerbitan?: SortOrder
    namaKetuaPanitia?: SortOrder
    nipKetuaPanitia?: SortOrder
    namaKepalaMadrasah?: SortOrder
    nipKepalaMadrasah?: SortOrder
    catatanSurat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PengaturanPPDBMaxOrderByAggregateInput = {
    id?: SortOrder
    tahunAjaran?: SortOrder
    kodeSurat?: SortOrder
    tempatPenerbitan?: SortOrder
    namaKetuaPanitia?: SortOrder
    nipKetuaPanitia?: SortOrder
    namaKepalaMadrasah?: SortOrder
    nipKepalaMadrasah?: SortOrder
    catatanSurat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PengaturanPPDBMinOrderByAggregateInput = {
    id?: SortOrder
    tahunAjaran?: SortOrder
    kodeSurat?: SortOrder
    tempatPenerbitan?: SortOrder
    namaKetuaPanitia?: SortOrder
    nipKetuaPanitia?: SortOrder
    namaKepalaMadrasah?: SortOrder
    nipKepalaMadrasah?: SortOrder
    catatanSurat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendaftaranPPDBCreateNestedOneWithoutUserInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutUserInput, PendaftaranPPDBUncheckedCreateWithoutUserInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutUserInput
    connect?: PendaftaranPPDBWhereUniqueInput
  }

  export type BeritaCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BeritaCreateWithoutAuthorInput, BeritaUncheckedCreateWithoutAuthorInput> | BeritaCreateWithoutAuthorInput[] | BeritaUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutAuthorInput | BeritaCreateOrConnectWithoutAuthorInput[]
    createMany?: BeritaCreateManyAuthorInputEnvelope
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
  }

  export type PendaftaranPPDBUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutUserInput, PendaftaranPPDBUncheckedCreateWithoutUserInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutUserInput
    connect?: PendaftaranPPDBWhereUniqueInput
  }

  export type BeritaUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BeritaCreateWithoutAuthorInput, BeritaUncheckedCreateWithoutAuthorInput> | BeritaCreateWithoutAuthorInput[] | BeritaUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutAuthorInput | BeritaCreateOrConnectWithoutAuthorInput[]
    createMany?: BeritaCreateManyAuthorInputEnvelope
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PendaftaranPPDBUpdateOneWithoutUserNestedInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutUserInput, PendaftaranPPDBUncheckedCreateWithoutUserInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutUserInput
    upsert?: PendaftaranPPDBUpsertWithoutUserInput
    disconnect?: PendaftaranPPDBWhereInput | boolean
    delete?: PendaftaranPPDBWhereInput | boolean
    connect?: PendaftaranPPDBWhereUniqueInput
    update?: XOR<XOR<PendaftaranPPDBUpdateToOneWithWhereWithoutUserInput, PendaftaranPPDBUpdateWithoutUserInput>, PendaftaranPPDBUncheckedUpdateWithoutUserInput>
  }

  export type BeritaUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BeritaCreateWithoutAuthorInput, BeritaUncheckedCreateWithoutAuthorInput> | BeritaCreateWithoutAuthorInput[] | BeritaUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutAuthorInput | BeritaCreateOrConnectWithoutAuthorInput[]
    upsert?: BeritaUpsertWithWhereUniqueWithoutAuthorInput | BeritaUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BeritaCreateManyAuthorInputEnvelope
    set?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    disconnect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    delete?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    update?: BeritaUpdateWithWhereUniqueWithoutAuthorInput | BeritaUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BeritaUpdateManyWithWhereWithoutAuthorInput | BeritaUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
  }

  export type PendaftaranPPDBUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutUserInput, PendaftaranPPDBUncheckedCreateWithoutUserInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutUserInput
    upsert?: PendaftaranPPDBUpsertWithoutUserInput
    disconnect?: PendaftaranPPDBWhereInput | boolean
    delete?: PendaftaranPPDBWhereInput | boolean
    connect?: PendaftaranPPDBWhereUniqueInput
    update?: XOR<XOR<PendaftaranPPDBUpdateToOneWithWhereWithoutUserInput, PendaftaranPPDBUpdateWithoutUserInput>, PendaftaranPPDBUncheckedUpdateWithoutUserInput>
  }

  export type BeritaUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BeritaCreateWithoutAuthorInput, BeritaUncheckedCreateWithoutAuthorInput> | BeritaCreateWithoutAuthorInput[] | BeritaUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutAuthorInput | BeritaCreateOrConnectWithoutAuthorInput[]
    upsert?: BeritaUpsertWithWhereUniqueWithoutAuthorInput | BeritaUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BeritaCreateManyAuthorInputEnvelope
    set?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    disconnect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    delete?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    update?: BeritaUpdateWithWhereUniqueWithoutAuthorInput | BeritaUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BeritaUpdateManyWithWhereWithoutAuthorInput | BeritaUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BeritaCreateNestedManyWithoutKategoriInput = {
    create?: XOR<BeritaCreateWithoutKategoriInput, BeritaUncheckedCreateWithoutKategoriInput> | BeritaCreateWithoutKategoriInput[] | BeritaUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutKategoriInput | BeritaCreateOrConnectWithoutKategoriInput[]
    createMany?: BeritaCreateManyKategoriInputEnvelope
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
  }

  export type BeritaUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<BeritaCreateWithoutKategoriInput, BeritaUncheckedCreateWithoutKategoriInput> | BeritaCreateWithoutKategoriInput[] | BeritaUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutKategoriInput | BeritaCreateOrConnectWithoutKategoriInput[]
    createMany?: BeritaCreateManyKategoriInputEnvelope
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
  }

  export type BeritaUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<BeritaCreateWithoutKategoriInput, BeritaUncheckedCreateWithoutKategoriInput> | BeritaCreateWithoutKategoriInput[] | BeritaUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutKategoriInput | BeritaCreateOrConnectWithoutKategoriInput[]
    upsert?: BeritaUpsertWithWhereUniqueWithoutKategoriInput | BeritaUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: BeritaCreateManyKategoriInputEnvelope
    set?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    disconnect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    delete?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    update?: BeritaUpdateWithWhereUniqueWithoutKategoriInput | BeritaUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: BeritaUpdateManyWithWhereWithoutKategoriInput | BeritaUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
  }

  export type BeritaUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<BeritaCreateWithoutKategoriInput, BeritaUncheckedCreateWithoutKategoriInput> | BeritaCreateWithoutKategoriInput[] | BeritaUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BeritaCreateOrConnectWithoutKategoriInput | BeritaCreateOrConnectWithoutKategoriInput[]
    upsert?: BeritaUpsertWithWhereUniqueWithoutKategoriInput | BeritaUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: BeritaCreateManyKategoriInputEnvelope
    set?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    disconnect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    delete?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    connect?: BeritaWhereUniqueInput | BeritaWhereUniqueInput[]
    update?: BeritaUpdateWithWhereUniqueWithoutKategoriInput | BeritaUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: BeritaUpdateManyWithWhereWithoutKategoriInput | BeritaUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBeritaInput = {
    create?: XOR<UserCreateWithoutBeritaInput, UserUncheckedCreateWithoutBeritaInput>
    connectOrCreate?: UserCreateOrConnectWithoutBeritaInput
    connect?: UserWhereUniqueInput
  }

  export type KategoriBeritaCreateNestedOneWithoutBeritaInput = {
    create?: XOR<KategoriBeritaCreateWithoutBeritaInput, KategoriBeritaUncheckedCreateWithoutBeritaInput>
    connectOrCreate?: KategoriBeritaCreateOrConnectWithoutBeritaInput
    connect?: KategoriBeritaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBeritaNestedInput = {
    create?: XOR<UserCreateWithoutBeritaInput, UserUncheckedCreateWithoutBeritaInput>
    connectOrCreate?: UserCreateOrConnectWithoutBeritaInput
    upsert?: UserUpsertWithoutBeritaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBeritaInput, UserUpdateWithoutBeritaInput>, UserUncheckedUpdateWithoutBeritaInput>
  }

  export type KategoriBeritaUpdateOneWithoutBeritaNestedInput = {
    create?: XOR<KategoriBeritaCreateWithoutBeritaInput, KategoriBeritaUncheckedCreateWithoutBeritaInput>
    connectOrCreate?: KategoriBeritaCreateOrConnectWithoutBeritaInput
    upsert?: KategoriBeritaUpsertWithoutBeritaInput
    disconnect?: KategoriBeritaWhereInput | boolean
    delete?: KategoriBeritaWhereInput | boolean
    connect?: KategoriBeritaWhereUniqueInput
    update?: XOR<XOR<KategoriBeritaUpdateToOneWithWhereWithoutBeritaInput, KategoriBeritaUpdateWithoutBeritaInput>, KategoriBeritaUncheckedUpdateWithoutBeritaInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<UserCreateWithoutPendaftaranInput, UserUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutPendaftaranInput
    connect?: UserWhereUniqueInput
  }

  export type BiodataSiswaPPDBCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<BiodataSiswaPPDBCreateWithoutPendaftaranInput, BiodataSiswaPPDBUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: BiodataSiswaPPDBCreateOrConnectWithoutPendaftaranInput
    connect?: BiodataSiswaPPDBWhereUniqueInput
  }

  export type DataOrangTuaPPDBCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<DataOrangTuaPPDBCreateWithoutPendaftaranInput, DataOrangTuaPPDBUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: DataOrangTuaPPDBCreateOrConnectWithoutPendaftaranInput
    connect?: DataOrangTuaPPDBWhereUniqueInput
  }

  export type DokumenPPDBCreateNestedManyWithoutPendaftaranInput = {
    create?: XOR<DokumenPPDBCreateWithoutPendaftaranInput, DokumenPPDBUncheckedCreateWithoutPendaftaranInput> | DokumenPPDBCreateWithoutPendaftaranInput[] | DokumenPPDBUncheckedCreateWithoutPendaftaranInput[]
    connectOrCreate?: DokumenPPDBCreateOrConnectWithoutPendaftaranInput | DokumenPPDBCreateOrConnectWithoutPendaftaranInput[]
    createMany?: DokumenPPDBCreateManyPendaftaranInputEnvelope
    connect?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
  }

  export type BiodataSiswaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<BiodataSiswaPPDBCreateWithoutPendaftaranInput, BiodataSiswaPPDBUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: BiodataSiswaPPDBCreateOrConnectWithoutPendaftaranInput
    connect?: BiodataSiswaPPDBWhereUniqueInput
  }

  export type DataOrangTuaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<DataOrangTuaPPDBCreateWithoutPendaftaranInput, DataOrangTuaPPDBUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: DataOrangTuaPPDBCreateOrConnectWithoutPendaftaranInput
    connect?: DataOrangTuaPPDBWhereUniqueInput
  }

  export type DokumenPPDBUncheckedCreateNestedManyWithoutPendaftaranInput = {
    create?: XOR<DokumenPPDBCreateWithoutPendaftaranInput, DokumenPPDBUncheckedCreateWithoutPendaftaranInput> | DokumenPPDBCreateWithoutPendaftaranInput[] | DokumenPPDBUncheckedCreateWithoutPendaftaranInput[]
    connectOrCreate?: DokumenPPDBCreateOrConnectWithoutPendaftaranInput | DokumenPPDBCreateOrConnectWithoutPendaftaranInput[]
    createMany?: DokumenPPDBCreateManyPendaftaranInputEnvelope
    connect?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
  }

  export type EnumStatusPPDBFieldUpdateOperationsInput = {
    set?: $Enums.StatusPPDB
  }

  export type UserUpdateOneRequiredWithoutPendaftaranNestedInput = {
    create?: XOR<UserCreateWithoutPendaftaranInput, UserUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutPendaftaranInput
    upsert?: UserUpsertWithoutPendaftaranInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPendaftaranInput, UserUpdateWithoutPendaftaranInput>, UserUncheckedUpdateWithoutPendaftaranInput>
  }

  export type BiodataSiswaPPDBUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<BiodataSiswaPPDBCreateWithoutPendaftaranInput, BiodataSiswaPPDBUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: BiodataSiswaPPDBCreateOrConnectWithoutPendaftaranInput
    upsert?: BiodataSiswaPPDBUpsertWithoutPendaftaranInput
    disconnect?: BiodataSiswaPPDBWhereInput | boolean
    delete?: BiodataSiswaPPDBWhereInput | boolean
    connect?: BiodataSiswaPPDBWhereUniqueInput
    update?: XOR<XOR<BiodataSiswaPPDBUpdateToOneWithWhereWithoutPendaftaranInput, BiodataSiswaPPDBUpdateWithoutPendaftaranInput>, BiodataSiswaPPDBUncheckedUpdateWithoutPendaftaranInput>
  }

  export type DataOrangTuaPPDBUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<DataOrangTuaPPDBCreateWithoutPendaftaranInput, DataOrangTuaPPDBUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: DataOrangTuaPPDBCreateOrConnectWithoutPendaftaranInput
    upsert?: DataOrangTuaPPDBUpsertWithoutPendaftaranInput
    disconnect?: DataOrangTuaPPDBWhereInput | boolean
    delete?: DataOrangTuaPPDBWhereInput | boolean
    connect?: DataOrangTuaPPDBWhereUniqueInput
    update?: XOR<XOR<DataOrangTuaPPDBUpdateToOneWithWhereWithoutPendaftaranInput, DataOrangTuaPPDBUpdateWithoutPendaftaranInput>, DataOrangTuaPPDBUncheckedUpdateWithoutPendaftaranInput>
  }

  export type DokumenPPDBUpdateManyWithoutPendaftaranNestedInput = {
    create?: XOR<DokumenPPDBCreateWithoutPendaftaranInput, DokumenPPDBUncheckedCreateWithoutPendaftaranInput> | DokumenPPDBCreateWithoutPendaftaranInput[] | DokumenPPDBUncheckedCreateWithoutPendaftaranInput[]
    connectOrCreate?: DokumenPPDBCreateOrConnectWithoutPendaftaranInput | DokumenPPDBCreateOrConnectWithoutPendaftaranInput[]
    upsert?: DokumenPPDBUpsertWithWhereUniqueWithoutPendaftaranInput | DokumenPPDBUpsertWithWhereUniqueWithoutPendaftaranInput[]
    createMany?: DokumenPPDBCreateManyPendaftaranInputEnvelope
    set?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
    disconnect?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
    delete?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
    connect?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
    update?: DokumenPPDBUpdateWithWhereUniqueWithoutPendaftaranInput | DokumenPPDBUpdateWithWhereUniqueWithoutPendaftaranInput[]
    updateMany?: DokumenPPDBUpdateManyWithWhereWithoutPendaftaranInput | DokumenPPDBUpdateManyWithWhereWithoutPendaftaranInput[]
    deleteMany?: DokumenPPDBScalarWhereInput | DokumenPPDBScalarWhereInput[]
  }

  export type BiodataSiswaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<BiodataSiswaPPDBCreateWithoutPendaftaranInput, BiodataSiswaPPDBUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: BiodataSiswaPPDBCreateOrConnectWithoutPendaftaranInput
    upsert?: BiodataSiswaPPDBUpsertWithoutPendaftaranInput
    disconnect?: BiodataSiswaPPDBWhereInput | boolean
    delete?: BiodataSiswaPPDBWhereInput | boolean
    connect?: BiodataSiswaPPDBWhereUniqueInput
    update?: XOR<XOR<BiodataSiswaPPDBUpdateToOneWithWhereWithoutPendaftaranInput, BiodataSiswaPPDBUpdateWithoutPendaftaranInput>, BiodataSiswaPPDBUncheckedUpdateWithoutPendaftaranInput>
  }

  export type DataOrangTuaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<DataOrangTuaPPDBCreateWithoutPendaftaranInput, DataOrangTuaPPDBUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: DataOrangTuaPPDBCreateOrConnectWithoutPendaftaranInput
    upsert?: DataOrangTuaPPDBUpsertWithoutPendaftaranInput
    disconnect?: DataOrangTuaPPDBWhereInput | boolean
    delete?: DataOrangTuaPPDBWhereInput | boolean
    connect?: DataOrangTuaPPDBWhereUniqueInput
    update?: XOR<XOR<DataOrangTuaPPDBUpdateToOneWithWhereWithoutPendaftaranInput, DataOrangTuaPPDBUpdateWithoutPendaftaranInput>, DataOrangTuaPPDBUncheckedUpdateWithoutPendaftaranInput>
  }

  export type DokumenPPDBUncheckedUpdateManyWithoutPendaftaranNestedInput = {
    create?: XOR<DokumenPPDBCreateWithoutPendaftaranInput, DokumenPPDBUncheckedCreateWithoutPendaftaranInput> | DokumenPPDBCreateWithoutPendaftaranInput[] | DokumenPPDBUncheckedCreateWithoutPendaftaranInput[]
    connectOrCreate?: DokumenPPDBCreateOrConnectWithoutPendaftaranInput | DokumenPPDBCreateOrConnectWithoutPendaftaranInput[]
    upsert?: DokumenPPDBUpsertWithWhereUniqueWithoutPendaftaranInput | DokumenPPDBUpsertWithWhereUniqueWithoutPendaftaranInput[]
    createMany?: DokumenPPDBCreateManyPendaftaranInputEnvelope
    set?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
    disconnect?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
    delete?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
    connect?: DokumenPPDBWhereUniqueInput | DokumenPPDBWhereUniqueInput[]
    update?: DokumenPPDBUpdateWithWhereUniqueWithoutPendaftaranInput | DokumenPPDBUpdateWithWhereUniqueWithoutPendaftaranInput[]
    updateMany?: DokumenPPDBUpdateManyWithWhereWithoutPendaftaranInput | DokumenPPDBUpdateManyWithWhereWithoutPendaftaranInput[]
    deleteMany?: DokumenPPDBScalarWhereInput | DokumenPPDBScalarWhereInput[]
  }

  export type PendaftaranPPDBCreateNestedOneWithoutBiodataInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutBiodataInput, PendaftaranPPDBUncheckedCreateWithoutBiodataInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutBiodataInput
    connect?: PendaftaranPPDBWhereUniqueInput
  }

  export type EnumJenisKelaminFieldUpdateOperationsInput = {
    set?: $Enums.JenisKelamin
  }

  export type PendaftaranPPDBUpdateOneRequiredWithoutBiodataNestedInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutBiodataInput, PendaftaranPPDBUncheckedCreateWithoutBiodataInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutBiodataInput
    upsert?: PendaftaranPPDBUpsertWithoutBiodataInput
    connect?: PendaftaranPPDBWhereUniqueInput
    update?: XOR<XOR<PendaftaranPPDBUpdateToOneWithWhereWithoutBiodataInput, PendaftaranPPDBUpdateWithoutBiodataInput>, PendaftaranPPDBUncheckedUpdateWithoutBiodataInput>
  }

  export type PendaftaranPPDBCreateNestedOneWithoutOrangTuaInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutOrangTuaInput, PendaftaranPPDBUncheckedCreateWithoutOrangTuaInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutOrangTuaInput
    connect?: PendaftaranPPDBWhereUniqueInput
  }

  export type PendaftaranPPDBUpdateOneRequiredWithoutOrangTuaNestedInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutOrangTuaInput, PendaftaranPPDBUncheckedCreateWithoutOrangTuaInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutOrangTuaInput
    upsert?: PendaftaranPPDBUpsertWithoutOrangTuaInput
    connect?: PendaftaranPPDBWhereUniqueInput
    update?: XOR<XOR<PendaftaranPPDBUpdateToOneWithWhereWithoutOrangTuaInput, PendaftaranPPDBUpdateWithoutOrangTuaInput>, PendaftaranPPDBUncheckedUpdateWithoutOrangTuaInput>
  }

  export type PendaftaranPPDBCreateNestedOneWithoutDokumenInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutDokumenInput, PendaftaranPPDBUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutDokumenInput
    connect?: PendaftaranPPDBWhereUniqueInput
  }

  export type EnumJenisDokumenFieldUpdateOperationsInput = {
    set?: $Enums.JenisDokumen
  }

  export type PendaftaranPPDBUpdateOneRequiredWithoutDokumenNestedInput = {
    create?: XOR<PendaftaranPPDBCreateWithoutDokumenInput, PendaftaranPPDBUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: PendaftaranPPDBCreateOrConnectWithoutDokumenInput
    upsert?: PendaftaranPPDBUpsertWithoutDokumenInput
    connect?: PendaftaranPPDBWhereUniqueInput
    update?: XOR<XOR<PendaftaranPPDBUpdateToOneWithWhereWithoutDokumenInput, PendaftaranPPDBUpdateWithoutDokumenInput>, PendaftaranPPDBUncheckedUpdateWithoutDokumenInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusPPDBFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPPDB | EnumStatusPPDBFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPPDB[]
    notIn?: $Enums.StatusPPDB[]
    not?: NestedEnumStatusPPDBFilter<$PrismaModel> | $Enums.StatusPPDB
  }

  export type NestedEnumStatusPPDBWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPPDB | EnumStatusPPDBFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPPDB[]
    notIn?: $Enums.StatusPPDB[]
    not?: NestedEnumStatusPPDBWithAggregatesFilter<$PrismaModel> | $Enums.StatusPPDB
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPPDBFilter<$PrismaModel>
    _max?: NestedEnumStatusPPDBFilter<$PrismaModel>
  }

  export type NestedEnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type NestedEnumJenisDokumenFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[]
    notIn?: $Enums.JenisDokumen[]
    not?: NestedEnumJenisDokumenFilter<$PrismaModel> | $Enums.JenisDokumen
  }

  export type NestedEnumJenisDokumenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[]
    notIn?: $Enums.JenisDokumen[]
    not?: NestedEnumJenisDokumenWithAggregatesFilter<$PrismaModel> | $Enums.JenisDokumen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisDokumenFilter<$PrismaModel>
    _max?: NestedEnumJenisDokumenFilter<$PrismaModel>
  }

  export type PendaftaranPPDBCreateWithoutUserInput = {
    id?: string
    nomorPendaftaran: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataSiswaPPDBCreateNestedOneWithoutPendaftaranInput
    orangTua?: DataOrangTuaPPDBCreateNestedOneWithoutPendaftaranInput
    dokumen?: DokumenPPDBCreateNestedManyWithoutPendaftaranInput
  }

  export type PendaftaranPPDBUncheckedCreateWithoutUserInput = {
    id?: string
    nomorPendaftaran: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataSiswaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput
    orangTua?: DataOrangTuaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput
    dokumen?: DokumenPPDBUncheckedCreateNestedManyWithoutPendaftaranInput
  }

  export type PendaftaranPPDBCreateOrConnectWithoutUserInput = {
    where: PendaftaranPPDBWhereUniqueInput
    create: XOR<PendaftaranPPDBCreateWithoutUserInput, PendaftaranPPDBUncheckedCreateWithoutUserInput>
  }

  export type BeritaCreateWithoutAuthorInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    gambar?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori?: KategoriBeritaCreateNestedOneWithoutBeritaInput
  }

  export type BeritaUncheckedCreateWithoutAuthorInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    gambar?: string | null
    isPublished?: boolean
    kategoriId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeritaCreateOrConnectWithoutAuthorInput = {
    where: BeritaWhereUniqueInput
    create: XOR<BeritaCreateWithoutAuthorInput, BeritaUncheckedCreateWithoutAuthorInput>
  }

  export type BeritaCreateManyAuthorInputEnvelope = {
    data: BeritaCreateManyAuthorInput | BeritaCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PendaftaranPPDBUpsertWithoutUserInput = {
    update: XOR<PendaftaranPPDBUpdateWithoutUserInput, PendaftaranPPDBUncheckedUpdateWithoutUserInput>
    create: XOR<PendaftaranPPDBCreateWithoutUserInput, PendaftaranPPDBUncheckedCreateWithoutUserInput>
    where?: PendaftaranPPDBWhereInput
  }

  export type PendaftaranPPDBUpdateToOneWithWhereWithoutUserInput = {
    where?: PendaftaranPPDBWhereInput
    data: XOR<PendaftaranPPDBUpdateWithoutUserInput, PendaftaranPPDBUncheckedUpdateWithoutUserInput>
  }

  export type PendaftaranPPDBUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataSiswaPPDBUpdateOneWithoutPendaftaranNestedInput
    orangTua?: DataOrangTuaPPDBUpdateOneWithoutPendaftaranNestedInput
    dokumen?: DokumenPPDBUpdateManyWithoutPendaftaranNestedInput
  }

  export type PendaftaranPPDBUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataSiswaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput
    orangTua?: DataOrangTuaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput
    dokumen?: DokumenPPDBUncheckedUpdateManyWithoutPendaftaranNestedInput
  }

  export type BeritaUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BeritaWhereUniqueInput
    update: XOR<BeritaUpdateWithoutAuthorInput, BeritaUncheckedUpdateWithoutAuthorInput>
    create: XOR<BeritaCreateWithoutAuthorInput, BeritaUncheckedCreateWithoutAuthorInput>
  }

  export type BeritaUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BeritaWhereUniqueInput
    data: XOR<BeritaUpdateWithoutAuthorInput, BeritaUncheckedUpdateWithoutAuthorInput>
  }

  export type BeritaUpdateManyWithWhereWithoutAuthorInput = {
    where: BeritaScalarWhereInput
    data: XOR<BeritaUpdateManyMutationInput, BeritaUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BeritaScalarWhereInput = {
    AND?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
    OR?: BeritaScalarWhereInput[]
    NOT?: BeritaScalarWhereInput | BeritaScalarWhereInput[]
    id?: StringFilter<"Berita"> | string
    judul?: StringFilter<"Berita"> | string
    slug?: StringFilter<"Berita"> | string
    konten?: StringFilter<"Berita"> | string
    gambar?: StringNullableFilter<"Berita"> | string | null
    isPublished?: BoolFilter<"Berita"> | boolean
    authorId?: StringFilter<"Berita"> | string
    kategoriId?: StringNullableFilter<"Berita"> | string | null
    createdAt?: DateTimeFilter<"Berita"> | Date | string
    updatedAt?: DateTimeFilter<"Berita"> | Date | string
  }

  export type BeritaCreateWithoutKategoriInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    gambar?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutBeritaInput
  }

  export type BeritaUncheckedCreateWithoutKategoriInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    gambar?: string | null
    isPublished?: boolean
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeritaCreateOrConnectWithoutKategoriInput = {
    where: BeritaWhereUniqueInput
    create: XOR<BeritaCreateWithoutKategoriInput, BeritaUncheckedCreateWithoutKategoriInput>
  }

  export type BeritaCreateManyKategoriInputEnvelope = {
    data: BeritaCreateManyKategoriInput | BeritaCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type BeritaUpsertWithWhereUniqueWithoutKategoriInput = {
    where: BeritaWhereUniqueInput
    update: XOR<BeritaUpdateWithoutKategoriInput, BeritaUncheckedUpdateWithoutKategoriInput>
    create: XOR<BeritaCreateWithoutKategoriInput, BeritaUncheckedCreateWithoutKategoriInput>
  }

  export type BeritaUpdateWithWhereUniqueWithoutKategoriInput = {
    where: BeritaWhereUniqueInput
    data: XOR<BeritaUpdateWithoutKategoriInput, BeritaUncheckedUpdateWithoutKategoriInput>
  }

  export type BeritaUpdateManyWithWhereWithoutKategoriInput = {
    where: BeritaScalarWhereInput
    data: XOR<BeritaUpdateManyMutationInput, BeritaUncheckedUpdateManyWithoutKategoriInput>
  }

  export type UserCreateWithoutBeritaInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    foto?: string | null
    isVerified?: boolean
    emailToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendaftaran?: PendaftaranPPDBCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBeritaInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    foto?: string | null
    isVerified?: boolean
    emailToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendaftaran?: PendaftaranPPDBUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBeritaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBeritaInput, UserUncheckedCreateWithoutBeritaInput>
  }

  export type KategoriBeritaCreateWithoutBeritaInput = {
    id?: string
    nama: string
    slug: string
  }

  export type KategoriBeritaUncheckedCreateWithoutBeritaInput = {
    id?: string
    nama: string
    slug: string
  }

  export type KategoriBeritaCreateOrConnectWithoutBeritaInput = {
    where: KategoriBeritaWhereUniqueInput
    create: XOR<KategoriBeritaCreateWithoutBeritaInput, KategoriBeritaUncheckedCreateWithoutBeritaInput>
  }

  export type UserUpsertWithoutBeritaInput = {
    update: XOR<UserUpdateWithoutBeritaInput, UserUncheckedUpdateWithoutBeritaInput>
    create: XOR<UserCreateWithoutBeritaInput, UserUncheckedCreateWithoutBeritaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBeritaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBeritaInput, UserUncheckedUpdateWithoutBeritaInput>
  }

  export type UserUpdateWithoutBeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendaftaran?: PendaftaranPPDBUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendaftaran?: PendaftaranPPDBUncheckedUpdateOneWithoutUserNestedInput
  }

  export type KategoriBeritaUpsertWithoutBeritaInput = {
    update: XOR<KategoriBeritaUpdateWithoutBeritaInput, KategoriBeritaUncheckedUpdateWithoutBeritaInput>
    create: XOR<KategoriBeritaCreateWithoutBeritaInput, KategoriBeritaUncheckedCreateWithoutBeritaInput>
    where?: KategoriBeritaWhereInput
  }

  export type KategoriBeritaUpdateToOneWithWhereWithoutBeritaInput = {
    where?: KategoriBeritaWhereInput
    data: XOR<KategoriBeritaUpdateWithoutBeritaInput, KategoriBeritaUncheckedUpdateWithoutBeritaInput>
  }

  export type KategoriBeritaUpdateWithoutBeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriBeritaUncheckedUpdateWithoutBeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPendaftaranInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    foto?: string | null
    isVerified?: boolean
    emailToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    berita?: BeritaCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    foto?: string | null
    isVerified?: boolean
    emailToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    berita?: BeritaUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPendaftaranInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPendaftaranInput, UserUncheckedCreateWithoutPendaftaranInput>
  }

  export type BiodataSiswaPPDBCreateWithoutPendaftaranInput = {
    id?: string
    namaLengkap: string
    nisn?: string | null
    nik?: string | null
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    agama?: string
    alamat: string
    asalSekolah: string
  }

  export type BiodataSiswaPPDBUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    namaLengkap: string
    nisn?: string | null
    nik?: string | null
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: $Enums.JenisKelamin
    agama?: string
    alamat: string
    asalSekolah: string
  }

  export type BiodataSiswaPPDBCreateOrConnectWithoutPendaftaranInput = {
    where: BiodataSiswaPPDBWhereUniqueInput
    create: XOR<BiodataSiswaPPDBCreateWithoutPendaftaranInput, BiodataSiswaPPDBUncheckedCreateWithoutPendaftaranInput>
  }

  export type DataOrangTuaPPDBCreateWithoutPendaftaranInput = {
    id?: string
    namaAyah: string
    pekerjaanAyah?: string | null
    noHpAyah?: string | null
    namaIbu: string
    pekerjaanIbu?: string | null
    noHpIbu?: string | null
    alamatOrangTua?: string | null
  }

  export type DataOrangTuaPPDBUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    namaAyah: string
    pekerjaanAyah?: string | null
    noHpAyah?: string | null
    namaIbu: string
    pekerjaanIbu?: string | null
    noHpIbu?: string | null
    alamatOrangTua?: string | null
  }

  export type DataOrangTuaPPDBCreateOrConnectWithoutPendaftaranInput = {
    where: DataOrangTuaPPDBWhereUniqueInput
    create: XOR<DataOrangTuaPPDBCreateWithoutPendaftaranInput, DataOrangTuaPPDBUncheckedCreateWithoutPendaftaranInput>
  }

  export type DokumenPPDBCreateWithoutPendaftaranInput = {
    id?: string
    jenisDokumen: $Enums.JenisDokumen
    fileUrl: string
    isVerified?: boolean
  }

  export type DokumenPPDBUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    jenisDokumen: $Enums.JenisDokumen
    fileUrl: string
    isVerified?: boolean
  }

  export type DokumenPPDBCreateOrConnectWithoutPendaftaranInput = {
    where: DokumenPPDBWhereUniqueInput
    create: XOR<DokumenPPDBCreateWithoutPendaftaranInput, DokumenPPDBUncheckedCreateWithoutPendaftaranInput>
  }

  export type DokumenPPDBCreateManyPendaftaranInputEnvelope = {
    data: DokumenPPDBCreateManyPendaftaranInput | DokumenPPDBCreateManyPendaftaranInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPendaftaranInput = {
    update: XOR<UserUpdateWithoutPendaftaranInput, UserUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<UserCreateWithoutPendaftaranInput, UserUncheckedCreateWithoutPendaftaranInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPendaftaranInput, UserUncheckedUpdateWithoutPendaftaranInput>
  }

  export type UserUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    berita?: BeritaUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    berita?: BeritaUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type BiodataSiswaPPDBUpsertWithoutPendaftaranInput = {
    update: XOR<BiodataSiswaPPDBUpdateWithoutPendaftaranInput, BiodataSiswaPPDBUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<BiodataSiswaPPDBCreateWithoutPendaftaranInput, BiodataSiswaPPDBUncheckedCreateWithoutPendaftaranInput>
    where?: BiodataSiswaPPDBWhereInput
  }

  export type BiodataSiswaPPDBUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: BiodataSiswaPPDBWhereInput
    data: XOR<BiodataSiswaPPDBUpdateWithoutPendaftaranInput, BiodataSiswaPPDBUncheckedUpdateWithoutPendaftaranInput>
  }

  export type BiodataSiswaPPDBUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    agama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    asalSekolah?: StringFieldUpdateOperationsInput | string
  }

  export type BiodataSiswaPPDBUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaLengkap?: StringFieldUpdateOperationsInput | string
    nisn?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    agama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    asalSekolah?: StringFieldUpdateOperationsInput | string
  }

  export type DataOrangTuaPPDBUpsertWithoutPendaftaranInput = {
    update: XOR<DataOrangTuaPPDBUpdateWithoutPendaftaranInput, DataOrangTuaPPDBUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<DataOrangTuaPPDBCreateWithoutPendaftaranInput, DataOrangTuaPPDBUncheckedCreateWithoutPendaftaranInput>
    where?: DataOrangTuaPPDBWhereInput
  }

  export type DataOrangTuaPPDBUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: DataOrangTuaPPDBWhereInput
    data: XOR<DataOrangTuaPPDBUpdateWithoutPendaftaranInput, DataOrangTuaPPDBUncheckedUpdateWithoutPendaftaranInput>
  }

  export type DataOrangTuaPPDBUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAyah?: StringFieldUpdateOperationsInput | string
    pekerjaanAyah?: NullableStringFieldUpdateOperationsInput | string | null
    noHpAyah?: NullableStringFieldUpdateOperationsInput | string | null
    namaIbu?: StringFieldUpdateOperationsInput | string
    pekerjaanIbu?: NullableStringFieldUpdateOperationsInput | string | null
    noHpIbu?: NullableStringFieldUpdateOperationsInput | string | null
    alamatOrangTua?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataOrangTuaPPDBUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaAyah?: StringFieldUpdateOperationsInput | string
    pekerjaanAyah?: NullableStringFieldUpdateOperationsInput | string | null
    noHpAyah?: NullableStringFieldUpdateOperationsInput | string | null
    namaIbu?: StringFieldUpdateOperationsInput | string
    pekerjaanIbu?: NullableStringFieldUpdateOperationsInput | string | null
    noHpIbu?: NullableStringFieldUpdateOperationsInput | string | null
    alamatOrangTua?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DokumenPPDBUpsertWithWhereUniqueWithoutPendaftaranInput = {
    where: DokumenPPDBWhereUniqueInput
    update: XOR<DokumenPPDBUpdateWithoutPendaftaranInput, DokumenPPDBUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<DokumenPPDBCreateWithoutPendaftaranInput, DokumenPPDBUncheckedCreateWithoutPendaftaranInput>
  }

  export type DokumenPPDBUpdateWithWhereUniqueWithoutPendaftaranInput = {
    where: DokumenPPDBWhereUniqueInput
    data: XOR<DokumenPPDBUpdateWithoutPendaftaranInput, DokumenPPDBUncheckedUpdateWithoutPendaftaranInput>
  }

  export type DokumenPPDBUpdateManyWithWhereWithoutPendaftaranInput = {
    where: DokumenPPDBScalarWhereInput
    data: XOR<DokumenPPDBUpdateManyMutationInput, DokumenPPDBUncheckedUpdateManyWithoutPendaftaranInput>
  }

  export type DokumenPPDBScalarWhereInput = {
    AND?: DokumenPPDBScalarWhereInput | DokumenPPDBScalarWhereInput[]
    OR?: DokumenPPDBScalarWhereInput[]
    NOT?: DokumenPPDBScalarWhereInput | DokumenPPDBScalarWhereInput[]
    id?: StringFilter<"DokumenPPDB"> | string
    pendaftaranId?: StringFilter<"DokumenPPDB"> | string
    jenisDokumen?: EnumJenisDokumenFilter<"DokumenPPDB"> | $Enums.JenisDokumen
    fileUrl?: StringFilter<"DokumenPPDB"> | string
    isVerified?: BoolFilter<"DokumenPPDB"> | boolean
  }

  export type PendaftaranPPDBCreateWithoutBiodataInput = {
    id?: string
    nomorPendaftaran: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    orangTua?: DataOrangTuaPPDBCreateNestedOneWithoutPendaftaranInput
    dokumen?: DokumenPPDBCreateNestedManyWithoutPendaftaranInput
  }

  export type PendaftaranPPDBUncheckedCreateWithoutBiodataInput = {
    id?: string
    nomorPendaftaran: string
    userId: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orangTua?: DataOrangTuaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput
    dokumen?: DokumenPPDBUncheckedCreateNestedManyWithoutPendaftaranInput
  }

  export type PendaftaranPPDBCreateOrConnectWithoutBiodataInput = {
    where: PendaftaranPPDBWhereUniqueInput
    create: XOR<PendaftaranPPDBCreateWithoutBiodataInput, PendaftaranPPDBUncheckedCreateWithoutBiodataInput>
  }

  export type PendaftaranPPDBUpsertWithoutBiodataInput = {
    update: XOR<PendaftaranPPDBUpdateWithoutBiodataInput, PendaftaranPPDBUncheckedUpdateWithoutBiodataInput>
    create: XOR<PendaftaranPPDBCreateWithoutBiodataInput, PendaftaranPPDBUncheckedCreateWithoutBiodataInput>
    where?: PendaftaranPPDBWhereInput
  }

  export type PendaftaranPPDBUpdateToOneWithWhereWithoutBiodataInput = {
    where?: PendaftaranPPDBWhereInput
    data: XOR<PendaftaranPPDBUpdateWithoutBiodataInput, PendaftaranPPDBUncheckedUpdateWithoutBiodataInput>
  }

  export type PendaftaranPPDBUpdateWithoutBiodataInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    orangTua?: DataOrangTuaPPDBUpdateOneWithoutPendaftaranNestedInput
    dokumen?: DokumenPPDBUpdateManyWithoutPendaftaranNestedInput
  }

  export type PendaftaranPPDBUncheckedUpdateWithoutBiodataInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orangTua?: DataOrangTuaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput
    dokumen?: DokumenPPDBUncheckedUpdateManyWithoutPendaftaranNestedInput
  }

  export type PendaftaranPPDBCreateWithoutOrangTuaInput = {
    id?: string
    nomorPendaftaran: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    biodata?: BiodataSiswaPPDBCreateNestedOneWithoutPendaftaranInput
    dokumen?: DokumenPPDBCreateNestedManyWithoutPendaftaranInput
  }

  export type PendaftaranPPDBUncheckedCreateWithoutOrangTuaInput = {
    id?: string
    nomorPendaftaran: string
    userId: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataSiswaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput
    dokumen?: DokumenPPDBUncheckedCreateNestedManyWithoutPendaftaranInput
  }

  export type PendaftaranPPDBCreateOrConnectWithoutOrangTuaInput = {
    where: PendaftaranPPDBWhereUniqueInput
    create: XOR<PendaftaranPPDBCreateWithoutOrangTuaInput, PendaftaranPPDBUncheckedCreateWithoutOrangTuaInput>
  }

  export type PendaftaranPPDBUpsertWithoutOrangTuaInput = {
    update: XOR<PendaftaranPPDBUpdateWithoutOrangTuaInput, PendaftaranPPDBUncheckedUpdateWithoutOrangTuaInput>
    create: XOR<PendaftaranPPDBCreateWithoutOrangTuaInput, PendaftaranPPDBUncheckedCreateWithoutOrangTuaInput>
    where?: PendaftaranPPDBWhereInput
  }

  export type PendaftaranPPDBUpdateToOneWithWhereWithoutOrangTuaInput = {
    where?: PendaftaranPPDBWhereInput
    data: XOR<PendaftaranPPDBUpdateWithoutOrangTuaInput, PendaftaranPPDBUncheckedUpdateWithoutOrangTuaInput>
  }

  export type PendaftaranPPDBUpdateWithoutOrangTuaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    biodata?: BiodataSiswaPPDBUpdateOneWithoutPendaftaranNestedInput
    dokumen?: DokumenPPDBUpdateManyWithoutPendaftaranNestedInput
  }

  export type PendaftaranPPDBUncheckedUpdateWithoutOrangTuaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataSiswaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput
    dokumen?: DokumenPPDBUncheckedUpdateManyWithoutPendaftaranNestedInput
  }

  export type PendaftaranPPDBCreateWithoutDokumenInput = {
    id?: string
    nomorPendaftaran: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    biodata?: BiodataSiswaPPDBCreateNestedOneWithoutPendaftaranInput
    orangTua?: DataOrangTuaPPDBCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranPPDBUncheckedCreateWithoutDokumenInput = {
    id?: string
    nomorPendaftaran: string
    userId: string
    status?: $Enums.StatusPPDB
    gelombang?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataSiswaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput
    orangTua?: DataOrangTuaPPDBUncheckedCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranPPDBCreateOrConnectWithoutDokumenInput = {
    where: PendaftaranPPDBWhereUniqueInput
    create: XOR<PendaftaranPPDBCreateWithoutDokumenInput, PendaftaranPPDBUncheckedCreateWithoutDokumenInput>
  }

  export type PendaftaranPPDBUpsertWithoutDokumenInput = {
    update: XOR<PendaftaranPPDBUpdateWithoutDokumenInput, PendaftaranPPDBUncheckedUpdateWithoutDokumenInput>
    create: XOR<PendaftaranPPDBCreateWithoutDokumenInput, PendaftaranPPDBUncheckedCreateWithoutDokumenInput>
    where?: PendaftaranPPDBWhereInput
  }

  export type PendaftaranPPDBUpdateToOneWithWhereWithoutDokumenInput = {
    where?: PendaftaranPPDBWhereInput
    data: XOR<PendaftaranPPDBUpdateWithoutDokumenInput, PendaftaranPPDBUncheckedUpdateWithoutDokumenInput>
  }

  export type PendaftaranPPDBUpdateWithoutDokumenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    biodata?: BiodataSiswaPPDBUpdateOneWithoutPendaftaranNestedInput
    orangTua?: DataOrangTuaPPDBUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranPPDBUncheckedUpdateWithoutDokumenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPendaftaran?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPPDBFieldUpdateOperationsInput | $Enums.StatusPPDB
    gelombang?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataSiswaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput
    orangTua?: DataOrangTuaPPDBUncheckedUpdateOneWithoutPendaftaranNestedInput
  }

  export type BeritaCreateManyAuthorInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    gambar?: string | null
    isPublished?: boolean
    kategoriId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeritaUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriBeritaUpdateOneWithoutBeritaNestedInput
  }

  export type BeritaUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    kategoriId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    kategoriId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaCreateManyKategoriInput = {
    id?: string
    judul: string
    slug: string
    konten: string
    gambar?: string | null
    isPublished?: boolean
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeritaUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutBeritaNestedInput
  }

  export type BeritaUncheckedUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeritaUncheckedUpdateManyWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    konten?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumenPPDBCreateManyPendaftaranInput = {
    id?: string
    jenisDokumen: $Enums.JenisDokumen
    fileUrl: string
    isVerified?: boolean
  }

  export type DokumenPPDBUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisDokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    fileUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DokumenPPDBUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisDokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    fileUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DokumenPPDBUncheckedUpdateManyWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisDokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    fileUrl?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
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