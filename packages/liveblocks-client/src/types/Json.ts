/**
 * Represents an indefinitely deep arbitrary JSON data structure. There are
 * four types that make up the Json family:
 *
 * - Json         any legal JSON value
 * - JsonScalar   any legal JSON leaf value (no lists or objects)
 * - JsonArray    a JSON value whose outer type is an array
 * - JsonObject   a JSON value whose outer type is an object
 *
 */
export type Json = JsonScalar | JsonArray | JsonObject;
export type JsonScalar = string | number | boolean | null;
export type JsonArray = Json[];
export type JsonObject = { [key: string]: Json | undefined };

export function isJsonArray(data: Json): data is JsonArray {
  return Array.isArray(data);
}

export function isJsonObject(data: Json): data is JsonObject {
  return data !== null && typeof data === "object" && !isJsonArray(data);
}