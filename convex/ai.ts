import { components } from "./_generated/api";
import { RAG } from "@convex-dev/rag";
import { openai } from "@ai-sdk/openai";

const rag = new RAG(components.rag, {
  textEmbeddingModel: openai.embedding("text-embedding-3-small"), // <-- This throws an error
  embeddingDimension: 1536,
});

console.log({ rag });

/** Error from above ^
 * Type 'EmbeddingModelV2<string>' is not assignable to type 'EmbeddingModelV1<string>'.
    Types of property 'specificationVersion' are incompatible.
    Type '"v2"' is not assignable to type '"v1"'.
 */
