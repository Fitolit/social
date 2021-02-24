// здесь обычный js
// основная задача этого файла это что то экспортировать
// require - позволяет загрузить определенный плагин, он изначально прописывается в пакадж джейсоне затем мы его помещаем (require) в переменную и вебпак его будет искать в этой переменной 
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //это импорты в реакт конфиге
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {    // таким образом он что то экспортирует
    entry: {  // отвечает за входную точку, у нас это index.jsx
        main: path.resolve(__dirname, 'src', 'index.jsx') // в скобках указывается кросс платформенный путь __dirname - это корневая папка проекта, далее через запятую папки и файлы
        // main: path.resolve(__dirname, 'src') то же самое, т.к точка входа всегда ищет index.jsx её можно вообще не прописывать
    },
    output: {  // настройка отвечает за файлы которые будут сгенерированны

        path: path.join(__dirname, 'dist'), // во время сборки проекта будет создаваться папка dist 

        // publicPath: '', // пока забить это нужно будет для сборок

        filename: path.join('js', 'bundle.js') // это чтобы собранный джаваскрипт файл собирался не в папку dists, а в папку js и в ней в файл bundle.js

    },
    target: 'web',  // поле в котором мы указываем какое приложение мы пытаемся собирать web это фронтенд

    module: { // работа с модулями
        rules: [ //правила для разных типов файлов/ к какому типу файлов какой набор модулей применять
            {
                test: /\.css$/i, //для кого 
                use: [MiniCssExtractPlugin.loader, 'css-loader'] //то, какой плагин использовать. В первую очередь, MiniCssExtractPlugin.loader, во вторую очередь вебпаковский 'css-loader'
            },

            {
                test: /\.jsx?$/i, // эта регулярка говорит использовать для js и jsx
                exclude: /node_modules/,  // исключая папку node modules 
                loader: 'babel-loader',  //  используем babel loader
                options: {  // в опциях говорим что:
                    plugins: [  // мы используем плагины 
                        [
                            "@babel/plugin-proposal-class-properties",
                            { "loose": true }
                        ]
                    ]
                    //если прописать нижний коммент в ЗАкомментированном виде, то бабелу будет сказанно что он должен работать для js файлов

                    // preset: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },
    resolve:{
        alias:{
            '@pages': path.resolve(__dirname, 'src', 'pages'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@containers': path.resolve(__dirname, 'src', 'components', 'containers'),
            '@img': path.resolve(__dirname, 'src', 'img')
        }
    },

    plugins: [ // работа с плагинами. Отвечает за создание самого файла
        new MiniCssExtractPlugin({  // Эти плагины представляют собой классы
            filename: path.join('style', '[name].css'),  //относительно папки дист, он будет создавать папку стайл и размещать в ней собранные файлы css
            chunkFilename: '[id].css'  // пока забить, че то там раскладывает по idшникам
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', //
            template: path.resolve(__dirname, 'public', 'index.html')  // путь до шаблона который будет использовать вебпак, "тесто для пиццы"
        })
    ],

    devServer: {
        port: 3300,
        hot: true, //горячая перезагрузка devServer
        open: false // при запуске откроет новое окно, нам это не нужно.  
    }

}

