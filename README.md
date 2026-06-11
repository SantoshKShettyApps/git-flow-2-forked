# git-flow-2

## But this is a Forked version.. P)

[![](https://mermaid.ink/img/pako:eNqdlFtvmzAUx7_KkZ9aiVwgFxI0TV3SSJu0PLSorbS4Dw4ciFewI2NyaZLvPhtItGzaJu0BmXP5n9_h2OZAIhkjCUir1aJCc51hAJ_gGdUePvN0BV9xgxk8c9zCDVvKUkPMkwQVCg0s0lIVsM7YnosU9Aq5AiUzvKUikiLhaUAFQCblWwArJuJ7xbaCioqVKrY25R9tRlEua3MCi4mS2wLVq_UDTMMFJVMptOWFkeJrTam4eSxFAVxYJEQ2utMgk8ps9LeUVCVQxNeE2QUBs50pW3ApGtjMwi7OBlf8g3fJPxMBwhdTJ0S14RHCi1RvhvWfxX5tf_4AizkWBUuxM9vYoTyUWGIDjrnCSNve67kCzN1m9Zr17gDFiq3NLluuAxlbYhYAJW3TWv0QODXJ4tKCfXladJ7M2Dqv0Gp9hOMX07kyR6CALderI0yqnD_EZjY4C6HVrsPfTZ_F0Wyv9U9DQPfuQ6WcyjwvBY-Yxlp8PZfzHGHD2dFMoymL3l_l1wfoZ63hHoAJnhuBGYkqsf54U_A3P3FIqnhMAms6JEeVM2uSg1VQYkg5UmKHGWPCykxTQoWVrZn4JmV-VipZpisSJCwrjFWuYwO558zscH7xmgsWo5rKUmgSDKoSJDiQHQm8Xttze77r94aD_tDzHbIngdv3257v9d1x3-sOur3xySHvFbLbHvtDfzRwR9544I1G3bFDMObm5s7rm1_9AE4_ACqUVCo?type=png)](https://mermaid.live/edit#pako:eNqdlGtr2zAUhv_KQVBoITc7FydmjK5pYIPlQ2vawqJ-UOxjW6stBVnOpUn--yTbCcvGNtgHI50jvec5fmV5T0IZIfFJu92mQnOdoQ-f4BnVDj7zJIWvuMYMnjlu4JotZakh4nGMCoUGFmqpClhlbMdFAjpFrkDJDG-ouLqCUIqYJ341B8ikfPMhZSK6V2wjqKiIiWIrA3mkAqAol3V4B4s7JTcFqlebB5gGC0qmUmhLDULFV5pScf1YigK4sGAL07jVIOMqbPQ3lFQlUESXhNkZAbOtKVtwKRrYzMLOyQZX_IN33n8iAgQvpk6Aas1DhBep3gzrP4v92v78ARZzLAqWYHe2tqY8lFhiA464wlDb3mtfAeZOM7rNeLuHImUrc9aW24KMLTHzgZKOaa1-CBybzeLcgp08LbpPxrbuK7TbH-HwxXSuzIdQwIbr9AB31Z4_rM3s4iyAdqde_m76LA7meG1-GgA6tx8q5VTmeSl4yDTW4ktfTj7CmrODcaMpi-5f5Zcf0M9aw90DEzw3AmOJKrF-eVPwtzxpkUTxiPg2bJEcVc5sSPZWQYkh5UiJNTPCmJWZpoQKK1sx8U3K_KRUskxS4scsK0xUriIDuefMnHB-zpprFqGaylJo4g-rEsTfky3x3X7Hdfqe4_VHw8HI9VpkR3xn4HVczx04k4HbG_b6k2OLvFfIXmfijbzx0Bm7k6E7HvcmLYIRN_d3Xt__6jdw_AH7-1T-)

```mermaid
---
title: A Very High Level View (about different actors playing their role)
config:
  look: handDrawn
---
graph LR
  subgraph B [Browser]
    CS["Content Script\n(Runs in the context of the Browser)"]
  end
  subgraph BE [Browser Extension]
    ES["Extension Scripts\n(Runs in the context of the Extension)"]
    SW["Service Worker Scripts\n(Runs in the context of the Extension)"]
  end
  subgraph MQ [Message/Event Queue]
    direction LR
    M1
    M2
    M@{ shape: text, label: ".\n.\n." }
    Mn
  end

  U[/User/] --> |Interacts with| B
  U --> |Interacts with| BE
  ES -.-> |Injects| CS
  CS e1@<--> |Communicates with the Extension Scripts via| MQ
  ES e2@<--> |Communicates with the Content Script via| MQ
  e1@{ animate: true }
  e2@{ animate: true }
```

```mermaid
sequenceDiagram
    participant Alice@{ "type" : "control" }
    participant Bob
    Alice->>Bob: Control request
    Bob->>Alice: Control response
```
```mermaid
---
title: Simple sample
---
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```
```mermaid
stateDiagram
   direction LR

   accTitle: This is the accessible title
   accDescr: This is an accessible description

   classDef notMoving fill:white
   classDef movement font-style:italic
   classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow

   [*]--> Still
   Still --> [*]
   Still --> Moving
   Moving --> Still
   Moving --> Crash
   Crash --> [*]

   class Still notMoving
   class Moving, Crash movement
   class Crash badBadEvent
   class end badBadEvent
```
