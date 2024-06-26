module.exports = (grunt)=>{
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        less:{
            dev:{
                files:{ 'styles/style.css' : 'src/styles/style.less'}
            },
            prod:{
                options:{compress: true},
                files:{ 'prebuild/style.min.css' : 'src/styles/style.less' }
            }
        },

        uglify:{
            target:{
                files:{"dist/script/script.min.js" : "src/script/script.js"}
            }
        },

        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    "dist/index.html" : "prebuild/index.html"
                }
            }
        },
        imagemin:{
            prod: {
                options: {
                    optimizationLevel: 5,
                    progressive: true,
                    svgoPlugins: [
                        { removeViewBox: false },
                        { cleanupIDs: false }
                    ],
                },
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dist/images/'
                }]
            }
        },

        'string-replace':{
            prod:{
                files:[{
                    'prebuild/index.html' : 'src/index.html' 
                },
                {
                    "dist/styles/style.min.css" : 'prebuild/style.min.css'
                }
                ],
                options:{
                    replacements:[{
                        pattern: '"styles/style.css"',
                        replacement:'"styles/style.min.css"'
                    },
                    {
                        pattern: '"script/script.js"',
                        replacement:'"script/script.min.js"'
                    },
                    {
                        pattern: '"../../src/images/pattern-bg-desktop.png"',
                        replacement: '"../images/pattern-bg-desktop.png"'
                    },{
                        pattern: '"../../src/images/pattern-bg-mobile.png"',
                        replacement: '"../images/pattern-bg-mobile.png"'
                    }
                    ]
                }

            }
        },

        watch: {
            less: {
                files: ["src/styles/*.less"],
                tasks: ["less:dev", "replace:dev"]
            },
            html: {
                files: ["index.html"],
                tasks: ["less:dev", "replace:dev"]
            }
        },
        clean:["prebuild"]

    })

    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-contrib-htmlmin")
    grunt.loadNpmTasks("grunt-contrib-less")
    grunt.loadNpmTasks("grunt-contrib-uglify")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks("grunt-contrib-imagemin")
    grunt.loadNpmTasks("grunt-contrib-clean")

    grunt.registerTask("default", ["watch"])
    grunt.registerTask("build", [ "uglify", "imagemin" ,"less:prod","string-replace:prod", "htmlmin", "clean"])

}