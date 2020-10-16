import serial


arduino = serial.Serial('Herramientas/Puerto',9600)
print("Iniciado...")
while True:
	comando= input("subir / bajar persianas")
	arduino.write(comando)
	if comando == 'a':
		print('subiendo persiana')
	elif comando == 'b':
		print('bajando persiana')

arduino.close()
