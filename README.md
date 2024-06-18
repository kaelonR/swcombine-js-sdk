# Star Wars Combine Web Services 2.0 JS/TS SDK

The SDK is currently a WIP. Status is as follows:

## API SDK Status
- :x: = Not yet implemented
- :construction: = Partially implemented
- :heavy_check_mark: = Implemented
- :white_check_mark: = Implemented and covered by tests

| Endpoint                                   | Status             | Availability     | OAuth scope required (if applicable)                                                                       |
|--------------------------------------------|--------------------|------------------|------------------------------------------------------------------------------------------------------------|
| **OAuth**                                  | :x:                | Public           |                                                                                                            |
| Get token using server flow (node.js only) | :x:                | Public           |                                                                                                            |
| Get token using client flow (browser only) | :x:                | Public           |                                                                                                            |
| Get granted permissions                    | :x:                | OAuth :lock:     |                                                                                                            |
| **Permissions**                            | :x:                |                  |                                                                                                            |
| List permissions                           | :heavy_check_mark: | Public           |                                                                                                            |
| **Rate Limits**                            | :x:                |                  |                                                                                                            |
| List rate limits                           | :x:                | Public           |                                                                                                            |
| **Time**                                   | :white_check_mark: |                  |                                                                                                            |
| Get current SWC time                       | :white_check_mark: | Public/on device |                                                                                                            |
| Convert between SWC and Unix time          | :white_check_mark: | Public/on device |                                                                                                            |
| Convert between SWC time and Date objects  | :white_check_mark: | Public/on device |                                                                                                            |
| **Character**                              | :x:                |                  |                                                                                                            |
| Get character info                         | :x:                | OAuth :lock:     | character_read                                                                                             |
| Get character's credits                    | :x:                | OAuth :lock:     | character_credits                                                                                          |
| Get character's creditlog                  | :x:                | OAuth :lock:     | character_credits                                                                                          |
| Get UID by handle(handlecheck)             | :x:                | Public           |                                                                                                            |
| List received messages                     | :x:                | OAuth :lock:     | messages_read                                                                                              |
| List sent messages                         | :x:                | OAuth :lock:     | messages_read                                                                                              |
| Send message from character                | :x:                | OAuth :lock:     | messages_send                                                                                              |
| Get message by id                          | :x:                | OAUth :lock:     | messages_read                                                                                              |
| Delete message by id                       | :x:                | OAuth :lock:     | messages_delete                                                                                            |
| Get character's skills                     | :x:                | OAuth :lock:     | character_skills                                                                                           |
| List character's privileges                | :x:                | OAuth :lock:     | character_privileges                                                                                       |
| Check if character has privilege           | :x:                | OAuth :lock:     | character_privileges, and must be logged in as someone that can view the privileges of others.             |
| Grant privilege to a character             | :x:                | OAuth :lock:     | character_privileges, and must be logged in as someone that has the ability to grant privileges to others. |
| Revoke privilege from character            | :x:                | OAuth :lock:     | character_privileges, and must be logged in as someone that can grant/revoke privileges of others.         |
| **Datacard**                               | :x:                |                  |                                                                                                            |
| List datacards                             | :x:                | OAuth :lock:     | faction_datacards_read                                                                                     |
| Get Datacard by uid                        | :x:                |                  |                                                                                                            |
| **Events**                                 | :x:                |                  |                                                                                                            |
| List events by character and type          | :x:                |                  |                                                                                                            |
| Get event by uid                           | :x:                |                  |                                                                                                            |
| **Factions**                               | :x:                |                  |                                                                                                            |
| List factions                              | :x:                |                  |                                                                                                            |
| Get faction by uid                         | :x:                |                  |                                                                                                            |
| Get faction credits                        | :x:                |                  |                                                                                                            |
| Get faction's creditlog                    | :x:                |                  |                                                                                                            |
| List faction's budgets                     | :x:                |                  |                                                                                                            |
| Get faction budget by uid                  | :x:                |                  |                                                                                                            |
| List faction's members                     | :x:                |                  |                                                                                                            |
| List faction's stock holders               | :x:                |                  |                                                                                                            |
| **Galaxy**                                 | :x:                |                  |                                                                                                            |
| List sectors                               | :x:                |                  |                                                                                                            |
| Get sector by uid                          | :x:                |                  |                                                                                                            |
| List systems                               | :x:                |                  |                                                                                                            |
| Get system by uid                          | :x:                |                  |                                                                                                            |
| List planets                               | :x:                |                  |                                                                                                            |
| Get planet by uid                          | :x:                |                  |                                                                                                            |
| List stations                              | :x:                |                  |                                                                                                            |
| Get station by uid                         | :x:                |                  |                                                                                                            |
| List cities                                | :x:                |                  |                                                                                                            |
| Get city by uid                            | :x:                |                  |                                                                                                            |
| **Inventory**                              | :x:                |                  |                                                                                                            |
| List inventories                           | :x:                |                  |                                                                                                            |
| List entities in inventory                 | :x:                |                  |                                                                                                            |
| Get one entity in inventory                | :x:                |                  |                                                                                                            |
| Update property on entity                  | :x:                |                  |                                                                                                            |
| Apply tag to entity                        | :x:                |                  |                                                                                                            |
| Remove tag from entity                     | :x:                |                  |                                                                                                            |
| Clear all tags from entity                 | :x:                |                  |                                                                                                            |
| **Location**                               | :x:                |                  |                                                                                                            |
| Get specified location for entity          | :x:                |                  |                                                                                                            |
| **News**                                   | :x:                |                  |                                                                                                            |
| List GNS news                              | :x:                |                  |                                                                                                            |
| Create GNS item                            | :x:                |                  |                                                                                                            |
| Get one GNS Item                           | :x:                |                  |                                                                                                            |
| List Sim news                              | :x:                |                  |                                                                                                            |
| Get one Sim news item                      | :x:                |                  |                                                                                                            |
| **Types**                                  | :x:                |                  |                                                                                                            |
| List classes of type                       | :x:                |                  |                                                                                                            |
| List entities of type                      | :x:                |                  |                                                                                                            |
| List entities by class and type            | :x:                |                  |                                                                                                            |
| Get type for existing entity               | :x:                |                  |                                                                                                            |
| List all entity types                      | :x:                |                  |                                                                                                            |