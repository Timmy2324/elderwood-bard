import webpack from 'webpack';
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { paths, mode } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
          rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        plugins: buildPlugins(options),
      };
}