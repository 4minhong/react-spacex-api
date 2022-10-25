
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.spacex.land/graphql",
  documents: "./src/graphql/**/*.ts",
  generates: {
    "src/graphql/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config:{
        withHooks: true
      }
    }
  }
};

export default config;
