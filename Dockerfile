FROM maven:3.9.9-eclipse-temurin-21

WORKDIR /app

COPY Websocket_demo /app

RUN mvn clean install

CMD ["java", "-jar", "target/Websocket_demo-0.0.1-SNAPSHOT.jar"]
