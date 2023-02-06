# accounts/backupGJAccountNew.php

Saves account data

**Note:** This page is on the account server. You can find the domain name by sending a request to /database/getAccountURL.php (currently http://www.robtopgames.net) 

## Parameters

### Required Parameters

**userName** - The username of the account to be added

**password** - The password of the account to be added

**gameVersion** - 21

**binaryVersion** - 35

**saveData** - The save data for CCGameManager.dat compressed with gzip, then a semicolon `;` and the save data for CCLocalLevels.dat compressed with gzip.

**secret** - Wmfv3899gc9

### Optional Parameters

**gdw** - 0

## Response

1 if data was saved, -1 if not

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "userName": "APIAccount",
    "password": "********", # This would be APIAccount's password
    "gameVersion": 21,
    "binaryVersion": 35,
    "saveData": "H4sIAAAAAAAAA8VaWXObSBD-K1Se7ZhrOKocpWRLzubwJrVK8kphNJYICFSAHOvf74yYA6ZHgq1daatcFnzTDD1fH_Qct-9fN7nxgqs6LYt3b6y35pv3k9ttntZNHzVWv8j9uzc2uZ7cLtOkmdxmk5c43-HPGG9xdXuTEZyCq5fINE3rANQT8ltL1NahtqNFPS3q61BHK-sEOtTVvs11tai2XzdkqNdFkclQm6FphJSn00jtL43U8aRR2ENuDpzuirxMsp8q3cYNbUx2dVNuvj79wkkzI5bptj2tfpb5boMPWEX7rChcP79q8W0e73H1Y_ZxxpRwPDSdh7PwOpyH9rXrzP3r4MEPrr25EwZo6jvzqcM0b5_9M2ad1pPpt4_TJCl3RdOT-FHjivWfTmwzDCwLWWTQqRR5qHgvKVWt07JYp1ttw12c5_qGtFpqG2Zx1Wgb_iqfSn3LYpsuGfdq032Zl1Xr3unE6T_VVDjO9DrguFnPn5-J5ZT2Cm_LqsHLabJO8Qve4KKpOzGGyw1uqv3bOFm_jZsGb7aNCDmbe2BP6tdusxUiAdKJ5ORFuWk9cQc0TZ1U3cRVLePbOvoyHuzB8XfZo97FO0LHRXhQO0e14RKuToJTaJ8SalV2RqnM04l9XIRnhxMiIP1AdVyuDs0_R4YOcptu6M7wu9CooYMMDUVAYoYi4aCIZWoS5YcvjxHzzcN95zK7n39mQeayIMssJeoyK-CJiSPs20JkXJ9jNHxY-uKhngVcjl4wyOdige35nilwPn4_uBLBmgXtkJs2cWc0JbbvNcWDvgWx0IQY-3Z2xsUde9HgCpfGY7wscF3zV_tAHBIDuvRcJdtl7BNIEEGwx73BDqMwiMh_16T_lT_L9-mP7wioY1N7nA3tMTakzCg2tBwf2tCGNrQd5NIyQbGhY195wTltaKs2vIuTzPhaGN8rcnHUhMFFbIrcozZtzd0KqCZ1xpnUGRWWGpN6kgYuRzlWTYpI1ebLx0VaCq6oA5zPpI5q0m9lHlcrTMpu1Z7SEYE7XDhGu1ZV7emOs6cEhHciYFDHRsCgHkyzLrSnZaIgCGCIulfBFZ0MnDYogvZE0JwIWtNVrTmr9sbX3bApnbOask2mWlO2Tfpsi8aZEkFTwtCkH3oQmibMttJkgivX9RAKYGiKyuMsgYlgrq2xMX0mX02DXqomlW4JfOHCJm3jUm9Sb5xJPUCHRJgO93HRGF9wY3woB6lA_xcVXR9XqfDHUeEDKiTCdPhEKms6F-yzID0ZUHjhdN026dN1MI6FALAgEabD93SDSTVJJqkFHuTCPysXlmMPJDw9GeE4MkJARgiiY5_kuB6kIbiwS4jrUy7BZlPDMyXNJENCTI1XMs3YqjzIrzrg70LuIGpR1qZPEXRFYxQTsrIW2oL51n2-I_Pr6nlXZIN8dHg8ByG246uEdAg44Rkj519UTuUDzF2-r3FJqqPy2ZiT9eR9Q_LGapgY6xLEdGYqkhjmKewHUDNyHkPlBoNmnpNVwKrcxIUxXb6Q9b5dBZMJ5Ma-tNMIL2kvjlEzckpA5Zj-qFfP0XmZUlLJKZ8mzJ5qTc6RcztoiQu5kuTnCF-0YpYzmEOvjMKRpbicQ50IPOZdy30Rb9LXYbdyz84ToaP3rW6pa3ki8ceWhIBfjSxmqdwgKX_g13hVFsZDWSV4mJPzVrSO5dNxi9RDnKjjK4QdeneMlZF1LZUbTER3eUy2_75VZUKWCDX5GRQ0Ha7PGFSCGOIfkhjkeQpTPV5GVrpU7t9nId3HzbCHc5J_dr8igSZW6g5uJOhybfeQmET0abKS3ctKI-tlsaV3ytU-tKv6aRLnxqzcpEXclMNzqo61zkEYpYQSJLIT9THJmI88EY7cLbur1SMLaUbqP3M5sD5BNhCXdGsYL4fdLLxo-jq4HWGyBSiFFGH5i3KHXOBoTtfRmJbDRFojMv0DCUVcLeN6PZjmO4b5T3iio-lsTrGSsTU2RfjMq4N4KsK2w7oyrCrvILBnBPqBPQfgKYj0376IDuc-pHXkrjJPdpx2sbul7r7yLUm-msc3Q_m92Pnk-3--IsAXBPk93y_k92J3UABcSwFwJQXAlRQA19KlIdpCqqLMVh1A1ZTx2QFUXVnK6ACqrpTHnibMoRZRUm62OSYHBaQ5ikhszrPH6X4pAIvI1ompYBE5OjEVLMBpl4NYHxRa9111EbHJgrjvO-6CnZuR96zcEffsCJEE-j68YIdq5H13ucMCa8uCA4GI4QrEVffdkSIiBquEMwFU9ZWQI-NRCeGLElKiH_8EUDlTMgQBgAR4i0oTz8Et8DijCYNvrzOhT1N6LEvx1xblxIKDQG1zyylJuA4KzRDxz9PnO_CSFuqNp16XvxdlsXqMq4wcVOt-QZM8pR_E-TI9FBOy4YnUF9X-Z3uujSdpnv_JZJuciGpky3Wb42_aw243h0Nxk78BpH5jdTEnAAA=;H4sIAAAAAAAAA7Oxr8jNUShLLSrOzM-zVTLUM1Cyt7MpyMksLkEVVUjPAvJtlYyAbDublMzkEjubbDsfH994A0Mb_WygEIgfn1nsWFQE5pco6NvZ6INFwaqMwKKZdsamNvqZIBmwEfpgq-wAmIGBy4cAAAA=",
    "secret": "Wmfv3899gc9"
}

req = requests.post("http://www.robtopgames.net/database/accounts/backupGJAccountNew.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
