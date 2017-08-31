To run in dev mode:
1. call "ipconfig" to get the ip under wireless section
2. call "set REACT_NATIVE_PACKAGER_HOSTNAME=192.168.0.101" if the ip is 192.168.0.101
3. call "npm"


To build:
1. cd into "android" folder
2. gradlew assembleRelease

Build erors:
1. "Could not find tools.jar"
    add a gradle.properties file with the following content:
      org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_45


Difficulties:
1. expo is laggy and crashes all the time
2. keep getting errors about SDK tools not installed