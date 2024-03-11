// vite.config.ts
import path from "path";
import { defineConfig } from "file:///home/yakire/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/github/yui-kit/node_modules/vite/dist/node/index.js";
import react from "file:///home/yakire/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/github/yui-kit/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///home/yakire/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/github/yui-kit/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///home/yakire/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/github/yui-kit/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import svgr from "file:///home/yakire/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/github/yui-kit/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname =
  "/home/yakire/\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B/github/yui-kit";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      lib: path.resolve(__vite_injected_original_dirname, "lib"),
    },
  },
  plugins: [react(), dts({ include: ["lib"] }), libInjectCss(), svgr()],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "lib", "index.ts"),
      formats: ["es"],
    },
    minify: "esbuild",
    outDir: path.resolve(__vite_injected_original_dirname, "dist"),
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
  },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS95YWtpcmUvXHUwNDE0XHUwNDNFXHUwNDNBXHUwNDQzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDQyXHUwNDRCL2dpdGh1Yi95dWkta2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS95YWtpcmUvXHUwNDE0XHUwNDNFXHUwNDNBXHUwNDQzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDQyXHUwNDRCL2dpdGh1Yi95dWkta2l0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3lha2lyZS8lRDAlOTQlRDAlQkUlRDAlQkElRDElODMlRDAlQkMlRDAlQjUlRDAlQkQlRDElODIlRDElOEIvZ2l0aHViL3l1aS1raXQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcblxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQge2xpYkluamVjdENzc30gZnJvbSAndml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3MnXG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge2FsaWFzOiB7XG4gICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgIFwibGliXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwibGliXCIpXG4gIH19LFxuICBwbHVnaW5zOiBbcmVhY3QoKSxcbiAgICBkdHMoeyBpbmNsdWRlOiBbJ2xpYiddIH0pLFxuICAgIGxpYkluamVjdENzcygpLFxuICAgIHN2Z3IoKVxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwibGliXCIsIFwiaW5kZXgudHNcIiksXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcbiAgICB9LFxuICAgIG1pbmlmeTogXCJlc2J1aWxkXCIsXG4gICAgb3V0RGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImRpc3RcIiksXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QvanN4LXJ1bnRpbWVcIl0sXG4gICAgICAgb3V0cHV0OntcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcIltuYW1lXVtleHRuYW1lXVwiXG4gICAgICAgfVxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFUsT0FBTyxVQUFVO0FBQy9WLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsU0FBUSxvQkFBbUI7QUFDM0IsT0FBTyxVQUFVO0FBTmpCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsRUFBQyxPQUFPO0FBQUEsSUFDZixLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDbEMsT0FBTyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLEVBQ3RDLEVBQUM7QUFBQSxFQUNELFNBQVM7QUFBQSxJQUFDLE1BQU07QUFBQSxJQUNkLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFBQSxJQUN4QixhQUFhO0FBQUEsSUFDYixLQUFLO0FBQUEsRUFDUDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsT0FBTyxVQUFVO0FBQUEsTUFDaEQsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsUUFBUSxLQUFLLFFBQVEsa0NBQVcsTUFBTTtBQUFBLElBQ3RDLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLG1CQUFtQjtBQUFBLE1BQ3RDLFFBQU87QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2pCO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
