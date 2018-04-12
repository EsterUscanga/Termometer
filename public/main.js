const socket = io()

socket.on('temp', function(data){
  console.log(data)
  let temp = document.getElementById('temperature')
  temp.innerHTML = `${data} °C`
  let message = document.getElementById('message')
  let show
  if (data  > 22)
    show = 'Fan turned on'
  else
    show = 'Fan turned off'
  message.innerHTML = show
})