local isopened

RegisterNetEvent('apri:radio')
AddEventHandler('apri:radio', function ()
    if not isopened then
        SetNuiFocus(true, true)
        SendNUIMessage({
            action = 'showRadio',
        })
        isopened = true
    else
        SetNuiFocus(false, false)
        SendNUIMessage({
            action = 'hideRadio',
        })
        isopened = false
    end
end)

RegisterNUICallback("close", function(data)
    SetNuiFocus(false, false)
    isopened = false
end)

RegisterNUICallback('submitNumber', function(data, cb)
    local numberValue = tonumber(data.number)

    if numberValue then
        exports["pma-voice"]:setRadioChannel(numberValue)
    else
        print("Errore: il valore inserito non è un numero valido.")
    end

    cb({status = 'ok'})
end)