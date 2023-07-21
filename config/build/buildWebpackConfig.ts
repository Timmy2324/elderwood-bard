import webpack from 'webpack';
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
          rules: buildLoaders(),
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        resolve: buildResolvers(),
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
      };
}