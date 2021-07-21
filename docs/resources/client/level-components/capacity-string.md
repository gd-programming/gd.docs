# Capacity String

> The Capacity String (commonly known as the `extra string`) is a long string split up into 54 components each having an Integer assigned to them. The role of the Capacity String is to save the cost of memory re-allocation when rendering levels

## Example

Below is the Capacity String for the level `Bloodlust` by Knobbelboy

    0_2044_1248_57_0_70_1988_963_0_0_4526_6982_465_0_623_995_0_0_0_0_0_0_53_0_0_0_0_0_0_0_0_0_35_105_38_0_0_0_0_0_0_0_0_0_294_1173_38_0_0_0_0_0_0_0_0  

## Structure

Each component of the Capacity String are tied to their own `CCSpriteBatchNode` field based on the properties of certain objects.

There are `5` different types of batchNodes. `4` of which the Capacity string uses

**Note: BatchID 4 isn't used in the Capacity String**

| BatchID | Type | Description |
|:--------|:-----|:------------|
| 1 | BatchNodePlayer | |
| 2 | BatchNodeText | All text GameObjects |
| 3 | EffectBatchNode | All animated GameObjects |
| 4 | DefaultBatchNode | All GameObjects that don't fit into other BatchNodes, usually objects that only render in the editor exclusively |
| 5 | BatchNode | Most GameObjects |

Each of these BatchNodeTypes are then divided into sub-categories based on certain properties the object has

**Note: Index refers to order that the BatchNode can be found on the capacity string**  
The names for each BatchNode were provided by [RobTop himself](https://twitter.com/RobTopGames/status/1415783982621413376?s=20)

| Index | BatchNode | Properties | zOrder |
|:------|:----------|:-----------|:-------|
| 0 | BatchNodeAddTop2 | Blending, zLayer T2 | 16 |
| 1 | BatchNode | zLayer T1 | 10 |
| 2 | BatchNodeAdd | Blending, zLayer T1 | 9 |
| 3 | BatchNodePlayer | unknown -> something about the player | 3 |
| 4 | BatchNodeAddPlayer | unknown -> something about the player | 2 |
| 5 | BatchNodeAddMid | Blending, zLayer B1 (zLayer = 4)| 1 | 
| 6 | BatchNodeBottom | zLayer B1 | -1 |
| 7 | BatchNodeAddBottom | Blending, zLayer B1 | -2 |
| 8 | EffectBatchNode | Animated, zLayer B1 | -6 |
| 9 | EffectBatchNodeAdd | Blending, Animated, zLayer B1 | -7 |
| 10 | BatchNodeBottom2 | zLayer B2 | -8 |
| 11 | BatchNodeAddBottom2 | Blending, zLayer B2 | -9 |
| 12 | BatchNodeAddGlow | Blending, Glow, zLayer T1 | 9 |
| 13 | BatchNodeAddBottomGlow | Blending, Glow, zLayer B1 | -2 |
| 14 | BatchNodeAddBottom2Glow | Blending, Glow, zLayer B2 | -9 |
| 15 | BatchNodeBottomGlow2 | Glow, zLayer B1 | -22 | 
| 16 | BatchNodeAddBottom4 | Blending, zLayer B4 | -23 |
| 17 | BatchNodeAddBottom4Glow | Blending, Glow, zLayer B4 | -23 |
| 18 | BatchNodeBottom3 | zLayer B3 | -15 |
| 19 | BatchNodeAddBottom3 | Blending, zLayer B3 | -16 |
| 20 | BatchNodeAddBottom3Glow | Blending, Glow, zLayer B3 | -16 |
| 21 | BatchNodeTop2 | zLayer T2 | 17 |
| 22 | BatchNodeAddGlowTop2 | Blending, Glow, zLayer T2 | 16 |
| 23 | BatchNodeTop3 | zLayer T3 | 25 |
| 24 | BatchNodeAddTop3 | Blending, zLayer T3 | 24 |
| 25 | BatchNodeAddGlowTop3 | Blending, Glow zLayer T3 | 24 |
| 26 | BatchNodeAddTop4 | Blending, zLayer T4 | 26 |
| 27 | EffectBatchNodeTop3 | Animated, zLayer T3 | 19 |
| 28 | EffectBatchNodeAddTop3 | Animated, Blending, zLayer T3 | 18 |
| 29 | EffectBatchNodeTop2 | Animated, zLayer T2 | 12 |
| 30 | EffectBatchNodeAddTop2 | Animated, Blending, zLayer T2 | 11|
| 31 | EffectBatchNodeTop1 | Animated, zLayer T1 | 5 |
| 32 | EffectBatchNodeAddTop1 | Animated, Blending, zLayer T1 | 4 |
| 33 | EffectBatchNodeBot2 | Animated, zLayer B2 | -13 |
| 34 | EffectBatchNodeAddBot2 | Animated, Blending, zLayer B2 | -14 |
| 35 | EffectBatchNodeBot3 | Animated, zLayer B3 | -20 |
| 36 | EffectBatchNodeAddBot3 | Animated, Blending, zLayer B3 | -21 |
| 37 | EffectBatchNodeBot4 | Animated, zLayer B4 | -27 |
| 38 | EffectBatchNodeAddBot4 | Animated, Blending, zLayer B4 | -28 |
| 39 | BatchNodeTextTop3 | Text, zLayer T3 | 21 |
| 40 | BatchNodeTextAddTop3 | Text, Blending, zLayer T3 | 22 |
| 41 | BatchNodeTextTop2 | Text, zLayer T2 | 13 |
| 42 | BatchNodeTextAddTop2 | Text, Blending, zLayer T2 | 14 |
| 43 | BatchNodeTextTop1 | Text, zLayer T1 | 6 |
| 44 | BatchNodeTextAddTop1 | Text, Blending, zLayer T1 | 7 |
| 45 | BatchNodeText | Text, zLayer B1 | -5 |
| 46 | BatchNodeAddText | Text, Blending, zLayer B1 | -4 |
| 47 | BatchNodeTextBot2 | Text, zLayer B2 | -12 |
| 48 | BatchNodeAddTextBot2 | Text, Blending, zLayer B2 | -11 |
| 49 | BatchNodeTextBot3 | Text, zLayer B3 | -19 |
| 50 | BatchNodeAddTextBot3 | Text, Blending, zLayer B3 | -18 |
| 51 | BatchNodeTextBot4 | Text, zLayer B4 | -26 |
| 52 | BatchNodeAddTextBot5 | Text, Blending, zLayer B4 | -25 |
| 53 | EffectBatchNodeAddTop4 | Animated, Blending, zLayer T4 | 20 |

## Legacy String

There are other types of Capacity Strings from older versions of the game. The total number of Nodes is used to identify them

| Update | Node count |
|:-------|:-----------|
| 1.9 | 4 |
| 2.0 | 16 |

The capacity string in 2.0 is quite easy to understand as it only contains the first 16 batch nodes in 2.1's capacity string. 1.9 is quite different with certain indexes containing multiple batch nodes.
 
> **Below is a table for 1.9's Capacity String.**  
> Refer to the [Structure](/resources/client/level-components/Capacity-string?id=structure) section for the properties of the batchNodes

| Index | BatchNode(s) |
|:------|:-------------|
| 0 | BatchNode |
| 1 | BatchNodeAdd</br> BatchNodeAddGlow |
| 2 | BatchNodeBottom</br> BatchNodeBottom2 |
| 3 | BatchNodeAddBottom</br> BatchNodeAddBottom2</br> BatchNodeAddBottomGlow</br> BatchNodeAddBottom2Glow |

## High Capacity Mode

In the game options, there is a option the player can toggle called `High Capacity Mode`. when enabled, the Capacity for each BatchNode is set to a hardcoded value. There are 3 capacity sizes

| size | Batch Type |
|:-----|:-----------|
| 999 | BatchNode |
| 200 | EffectBatchNode |
| 100 | BatchNodeText |

If enabled, the Capacity string is disregarded and these values are used instead.



## Capacity String Generation

The Capacity String is only generated during verification of the level. When playing the level, the game stores the the highest number of GameObjects that the Batch is responsible for inside its textureAtlas as the capacity. After the level is verified, the following function is called

```cpp
// This is only a re-creation of the function used and is not an accurate decompilation
// we have refactored the code to make it easier to understand

int capacity = BatchNode->getAtlasCapacity();

if(capacity <= 29)
    return 0;

// Increasing the capacity by a small amount to ensure there is enough memory
int newCapacity = capacity * 1.1f; 

// returning the new capacity with a  limit of 9999
return std::min(newCapacty, 9999);
 ```

After the capacity is calculated, it adds the value to the capacity string. Once the entire string is finished, it is then stored in `GJGameLevel->CapacityString_` where it will then be sent to the servers during the upload
