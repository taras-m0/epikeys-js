const
    autoprefixer = require('autoprefixer'),
    path = require('path'),
    webpack = require('webpack'),
    // SvgStorePlugin = require('webpack-svgstore-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    SpritesmithPlugin = require('webpack-spritesmith');

const sourcePath = path.resolve(__dirname, './source'),
    outputPath = path.resolve(__dirname, '.');

const sliderData = require( path.resolve(__dirname, './dev_docs/slider_data.js'));

module.exports = (env) => {
    const config = {
        devServer: {
            port: 8081,
            contentBase: [
                path.resolve(__dirname, './dev_docs')
                ,path.resolve(__dirname, '.')
            ],
            historyApiFallback: true,
            // hot: true,
            before: function(app){
                app.get('/sliders.json', sliderData );
            }
        },
        devtool: env.development ? 'cheap-module-eval-source-map' : false,
        context: sourcePath,
        entry: {
            "main": './index.js'
        },
        output: {
            path: outputPath,
            filename: 'assets/js/[name].bundle.js',
            // publicPath: '/web/'
        },
        module: {
            rules: [
                {
                    test: /\.(scss|less|css)$/,
                    use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: false,
                                sourceMap: true
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['last 2 versions']
                                    })
                                ],
                                sourceMap: env.development ? 'inline' : false
                            }
                        }, {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                                sourceMapContents: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                sourceMapContents: true
                            }
                        }]
                    }))
                }
                ,{
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                            // the "scss" and "sass" values for the lang attribute to the right configs here.
                            // other preprocessors should work out of the box, no loader config like this necessary.
                            'scss': ExtractTextPlugin.extract({
                                use: ['css-loader', 'sass-loader' ],
                                fallback: 'vue-style-loader' // <- это внутренняя часть vue-loader, поэтому нет необходимости его устанавливать через NPM
                            }),
                            'less': ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                                use: ['css-loader', 'less-loader' ],
                                fallback: 'vue-style-loader' // <- это внутренняя часть vue-loader, поэтому нет необходимости его устанавливать через NPM
                            })),
                            'sass': [
                                'vue-style-loader',
                                'css-loader',
                                'sass-loader?indentedSyntax'
                            ]
                        }
                        // other vue-loader options go here
                    }
                }
                ,{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
                ,{
                    test: /glyphicons-halflings-regular\.(woff2?|ttf|eot|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        publicPath: '../fonts',
                        outputPath: 'assets/fonts/'
                    }
                }
               ,{
                    test: /\.(jpeg|gif|svg)$/i,
                    loader: 'url-loader',
                    // fallback: 'file-loader',
                    options: {
                        limit: 8192
                    }
                }
                ,{
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        publicPath: '/assets/images',
                        outputPath: '/assets/images'
                    }
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: (module) => {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            // new SvgStorePlugin({
            //     svgoOptions: {
            //         plugins: [
            //             {cleanupEnableBackground: true},
            //             {removeAttrs: {attrs: ['fill-rule', 'stroke', 'stroke-width', 'stroke-linejoin']}},
            //             {removeComments: true},
            //             {removeDoctype: true},
            //             {removeMetadata: true},
            //             {removeTitle: true},
            //             {removeUselessStrokeAndFill: true},
            //             {removeXMLNS: true}
            //         ]
            //     },
            //     prefix: 'icon-'
            // }),
            new ExtractTextPlugin({
                allChunks: true,
                filename: 'assets/css/[name].bundle.min.css'
            })
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['*', '.js', '.vue', '.json'],
            modules: ["node_modules", "spritesmith-generated"]
        }
    };

    if (env.production) {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        );
/*        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    drop_console: true,
                    warnings: false
                }
            })
        ); */
        config.plugins.push(
            new webpack.NoEmitOnErrorsPlugin()
        );
    }

    return config
};