# Repro steps / Install process

Here are the guides I used:

1. https://docs.convex.dev/quickstart/nextjs
2. https://www.convex.dev/components/rag

Here are the terminal commands I ran to install everything:

```
npm create convex@latest // I chose Next.JS and Convex Auth

npm install ai

npm install @ai-sdk/openai
```

# Where is the problem?

Here is where you can view the file that is producing the error:
[convex/ai.ts](convex/ai.ts)

# What is the error?

```
Type 'EmbeddingModelV2<string>' is not assignable to type 'EmbeddingModelV1<string>'.
  Types of property 'specificationVersion' are incompatible.
    Type '"v2"' is not assignable to type '"v1"'.ts(2322)

index.d.ts(43, 9): The expected type comes from property 'textEmbeddingModel' which is declared
here on type '{ embeddingDimension: number; textEmbeddingModel: EmbeddingModelV1<string>;
filterNames?: FilterNames<Record<string, Value>> | undefined; }'
```
