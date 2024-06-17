# Star Wars Combine Web Services 2.0 JS/TS SDK

The SDK is currently a WIP. Status is as follows:

## API SDK Status
- :x: = Not yet implemented
- :construction: = Partially implemented
- :heavy_check_mark: = Implemented
- :white_check_mark: = Implemented and covered by tests

| Endpoint                                   | Status             |
|--------------------------------------------|--------------------|
| **OAuth**                                  | :x:                |
| Get token using server flow (node.js only) | :x:                |
| Get token using client flow (browser only) | :x:                |
| Get granted permissions                    | :x:                |
| **Permissions**                            | :x:                |
| List permissions                           | :heavy_check_mark: |
| **Rate Limits**                            | :x:                |
| List rate limits                           | :x:                |
| **Time**                                   | :white_check_mark: |
| Get current SWC time                       | :white_check_mark: |
| Convert time                               | :white_check_mark: |
| **Character**                              | :x:                |
| Get specified character                    | :x:                |
| Get character's credits                    | :x:                |
| Get character's creditlog                  | :x:                |
| Get UID by handle(handlecheck)             | :x:                |
| List sent/received messages                | :x:                |
| Send message from character                | :x:                |
| Get message by id                          | :x:                |
| Delete message by id                       | :x:                |
| Get character's skills                     | :x:                |
| List character's privileges                | :x:                |
| Get privilege status on character          | :x:                |
| Grant privilege to character               | :x:                |
| Revoke privilege from character            | :x:                |
| **Datacard**                               | :x:                |
| List datacards                             | :x:                |
| Get Datacard by uid                        | :x:                |
| **Events**                                 | :x:                |
| List events by character and type          | :x:                |
| Get event by uid                           | :x:                |
| **Factions**                               | :x:                |
| List factions                              | :x:                |
| Get faction by uid                         | :x:                |
| Get faction credits                        | :x:                |
| Get faction's creditlog                    | :x:                |
| List faction's budgets                     | :x:                |
| Get faction budget by uid                  | :x:                |
| List faction's members                     | :x:                |
| List faction's stock holders               | :x:                |
| **Galaxy**                                 | :x:                |
| List sectors                               | :x:                |
| Get sector by uid                          | :x:                |
| List systems                               | :x:                |
| Get system by uid                          | :x:                |
| List planets                               | :x:                |
| Get planet by uid                          | :x:                |
| List stations                              | :x:                |
| Get station by uid                         | :x:                |
| List cities                                | :x:                |
| Get city by uid                            | :x:                |
| **Inventory**                              | :x:                |
| List inventories                           | :x:                |
| List entities in inventory                 | :x:                |
| Get one entity in inventory                | :x:                |
| Update property on entity                  | :x:                |
| Apply tag to entity                        | :x:                |
| Remove tag from entity                     | :x:                |
| Clear all tags from entity                 | :x:                |
| **Location**                               | :x:                |
| Get specified location for entity          | :x:                |
| **News**                                   | :x:                |
| List GNS news                              | :x:                |
| Create GNS item                            | :x:                |
| Get one GNS Item                           | :x:                |
| List Sim news                              | :x:                |
| Get one Sim news item                      | :x:                |
| **Types**                                  | :x:                |
| List classes of type                       | :x:                |
| List entities of type                      | :x:                |
| List entities by class and type            | :x:                |
| Get type for existing entity               | :x:                |
| List all entity types                      | :x:                |