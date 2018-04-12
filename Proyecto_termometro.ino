
#define TEMP_SENSOR 0
#define MOTOR  5

const int led_red = 13;
const int ledDesconocido = 0;
void setup() {
  // put your setup code here, to run once:
  pinMode(MOTOR, OUTPUT);
  pinMode(led_red, OUTPUT);
  pinMode(ledDesconocido, OUTPUT);
  Serial.begin(9600);
  while (! Serial);
  Serial.println("Speed 0 to 255");
}
int signalVoltage, celsiusTemp;
void loop() {
  // put your main code here, to run repeatedly:
  signalVoltage = analogRead(TEMP_SENSOR);
  celsiusTemp = (5 * signalVoltage * 100) /1024;
  Serial.println(celsiusTemp);
  delay(3000);
  if (celsiusTemp > 22){
    digitalWrite(ledDesconocido, LOW);
    digitalWrite(led_red, HIGH);
  }else{
    digitalWrite(led_red, LOW);
    digitalWrite(ledDesconocido, HIGH);
  }
}
