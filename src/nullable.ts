import { GetOptionalKeys } from "./optional";

/**
 * @file
 * Type helpers related to null values.
 */

/**
 * Makes all optional keys in a given type nullable.
 */
type MakeOptionalNullable<T> = {
  [P in keyof T]: P extends GetOptionalKeys<T> ? T[P] | null : T[P];
}

/**
 * Makes all optional keys in a given type nullable recursively.
 */
type MakeOptionalNullableRecursive<T> = T extends Object ? {
  [P in keyof T]: P extends GetOptionalKeys<T> ? MakeOptionalNullableRecursive<T[P]> | null : MakeOptionalNullableRecursive<T[P]>
} : T;
