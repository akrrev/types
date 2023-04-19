/**
 * @file
 * Type (-helpers) related to optional keys.
 */

/**
 * Gets all optional keys in a given type.
 */
export type GetOptionalKeys<T> = {
  [K in keyof T]: {} extends Pick<T, K> ? K : never
}[keyof T];
