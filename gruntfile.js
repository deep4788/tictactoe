module.exports = function(grunt) {
    //Project configuration
    grunt.initConfig({
        ts: {
            main: {
                tsconfig: true,
                src: ['ts/*.ts'],
                dest: 'js/'
            }
        }
    });

    //Load the npm task(s)
    grunt.loadNpmTasks('grunt-ts');

    //Default task(s)
    grunt.registerTask('default', ['ts']);
};
