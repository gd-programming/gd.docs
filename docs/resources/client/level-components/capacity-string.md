# Capacity String

> The Capacity String (commonly known as the `extra string`) is a long string split up into 54 components each having an Integer assigned to them. The role of the Capacity String is to save the cost of memory re-allocation when rendering levels

Below is the Capacity String for the level `Bloodlust` by Knobbelboy

    0_2044_1248_57_0_70_1988_963_0_0_4526_6982_465_0_623_995_0_0_0_0_0_0_53_0_0_0_0_0_0_0_0_0_35_105_38_0_0_0_0_0_0_0_0_0_294_1173_38_0_0_0_0_0_0_0_0  

Each component of the Capacity String are tied to their own `CCSpriteBatchNode` field based on the settings of certain objects.

There are `3` different types of batchNodes:

| Type | Description |
|:-----|:------------|
| BatchNode | Most GameObjects |
| EffectBatchNode | All animated GameObjects |
| BatchNodeText | All text GameObjects |

These 3 BatchNode types are all divided into different variations based on the objects properties Below is a table showing all 54:

| Index | BatchNode | Properties |
|:------|:----------|:-----------|
| 0 | BatchNodeAddTop2 | Blending, zLayer T2 |
| 1 | BatchNode | zLayer T1 |
| 2 | BatchNodeAdd | Blending, zLayer T1 |
| 3 | BatchNodePlayer | |
| 4 | BatchNodeAddPlayer | |
| 5 | BatchNodeAddMid | |
| 6 | BatchNodeBottom | zLayer B1 |
| 7 | BatchNodeAddBottom | Blending, zLayer B1 |
| 8 | EffectBatchNode | Animated, zLayer B1 |
| 9 | EffectBatchNodeAdd | Blending, Animated, zLayer B1 |
| 10 | batchNodeBottom2 | zLayer B2 |
| 11 | batchNodeAddBottom2 | Blending, zLayer B2 |
| 12 | batchNodeAddGlow | Blending, ToggleGlow, zLayer T1 |
| 13 | batchNodeAddBottomGlow | Blending, ToggleGlow, zLayer B1 | 
| 14 | batchNodeAddBottom2Glow | Blending, ToggleGlow, zLayer B2 | 
| 15 | batchNodeBottomGlow2 | ToggleGlow, zLayer B1 | 

<!-- BatchNodeAddTop2_
BatchNode_
BatchNodeAdd_
BatchNodePlayer_
BatchNodeAddPlayer_
BatchNodeAddMid_
BatchNodeBottom_
BatchNodeAddBottom_
EffectBatchNode_
EffectBatchNodeAdd_
BatchNodeBottom2_
BatchNodeAddBottom2_
BatchNodeAddGlow_
BatchNodeAddBottomGlow_
BatchNodeAddBottom2Glow_
BatchNodeBottomGlow2_

BatchNodeAddBottom4_BatchNodeAddBottom4Glow_batchNodeBottom3_BatchNodeAddBottom3_BatchNodeAddBottom3Glow_BatchNodeTop2_BatchNodeAddGlowTop2_BatchNodeTop3_BatchNodeAddTop3_BatchNodeAddGlowTop3_BatchNodeAddTop4_EffectBatchNodeTop3_EffectBatchNodeAddTop3_effectBatchNodeTop2_EffectBatchNodeAddTop2_EffectBatchNodeTop1_EffectBatchNodeAddTop1_EffectBatchNodeBot2_EffectBatchNodeAddBot2_EffectBatchNodeBot3_EffectBatchNodeAddBot3_EffectBatchNodeBot4_EffectBatchNodeAddBot4_BatchNodeTextTop3_BatchNodeTextAddTop3_BatchNodeTextTop2_BatchNodeTextAddTop2_BatchNodeTextTop1_BatchNodeTextAddTop1_BatchNodeText_BatchNodeAddText_BatchNodeTextBot2_BatchNodeAddTextBot2_BatchNodeTextBot3_BatchNodeAddTextBot3_BatchNodeTextBot4_BatchNodeAddTextBot4_EffectBatchNodeAddTop4 -->