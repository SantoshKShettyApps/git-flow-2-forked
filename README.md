# git-flow-2

## But this is a Forked version.. P)
SVG Image
![SVG anim](images/test3.svg)
[![](https://mermaid.ink/img/pako:eNpVkTFvgzAQhf-KdVMrkQhCSLCHSg1ps6Rqh0yFDFY4sNVgI2OUpsB_ryGq2r7pTu9774br4KRzBAbFWV9OghtLDttMEafHNBFGNrbizZHMZg_9Di2ptMJrTzZ3O00aoetaqvL-xm9GiCTdfsSQWCHVx3Czkin_qrAn23TPa6vr41_ncNE9eUrlm3D1_x1h0KWe04Kzgs9O3JCEmwkBD0ojc2DWtOhBhabi4wrd6GZgBVaYAXNjjgVvzzaDTA0uVnP1rnX1kzS6LQW4-nPjtrbOucWt5KXhvwiqHE2iW2WBBeFUAayDT2CLNZ1HUbBc-OEqjCgNVh5cgYXx3HcKaBzE0TJaDB58TTf9ebxeUqc1jQKf-n7sAebSavNy-8T0kOEbTo19Uw?type=svg)](https://mermaid.live/edit#pako:eNpVkUFvgzAMhf9K5NMm0aqEAW0Ok1a69dJpO_RU6CEqhkQrCQpBXQf89wWqaZtPtt73niW7g5POERgUZ305CW4s2W8yRVw9pYkwsrEVb45kNnvst2hJpRVee7K-22rSCF3XUpX3N349QiTpdiOGxAqpPoablEz-N4U92aQ7XltdH_8q-4vuyXMq34WL_68Ig871khacFXx24oYk3EwIeFAamQOzpkUPKjQVH0foRjUDK7DCDJhrcyx4e7YZZGpwtpqrg9bVj9PothTg4s-Nm9o65xY3kpeG_yKocjSJbpUF5i-mCGAdfAKLgrlPwwWNA3-1jELf9-DqGPowp2FA6Sr2o4gG0eDB17RzMV_GoQeYS6vN6-340w-Gbx_Heow)

```mermaid
---
title: A Very High Level View (about different actors playing their role)
config:
  look: handDrawn
---
%%{init: {"flowchart": {"diagramPadding": 150}}}%%
graph LR
  subgraph B ["`**Browser**`"]
    CS["`**Content Script** - runs in the context of the Browser`"]
  end
  subgraph BE ["`**Browser Extension**`"]
    ES["`**Extension Scripts** - run in the context of the Extension`"]
    SW["`**Service Worker Scripts** - run in the context of the Extension`"]
  end
  subgraph MQ ["`**Event Queue**`"]
    direction LR
    M1
    M2
    M@{ shape: text, label: ".\n.\n.\n." }
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
