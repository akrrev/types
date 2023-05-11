/**
 * @file
 * Type helpers related to objects.
 */

/**
 * Gets all optional keys in a given type.
 */
export type GetOptionalKeys<T> = {
  [K in keyof T]: {} extends Pick<T, K> ? K : never
}[keyof T];


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


/**
 * Marks the given keys as required properties in the object.
 */
export type RequireKeys<T, K extends keyof T> = T & { [P in K]-?: T[P] };
