radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.forward()
    }
    if (receivedNumber == 2) {
        cuteBot.backforward()
    }
    if (receivedNumber == 3) {
        cuteBot.turnleft()
    }
    if (receivedNumber == 4) {
        cuteBot.turnright()
    }
    if (receivedNumber == 5) {
        cuteBot.stopcar()
    }
})
radio.setGroup(20)
