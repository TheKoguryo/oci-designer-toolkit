/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciVolumeModel"

export interface OciVolumeModel extends AutoGenerated.OciVolumeModel {}

export interface OciBlockVolumeReplicasModel extends AutoGenerated.OciBlockVolumeReplicasModel{}

export interface OciSourceDetailsModel extends AutoGenerated.OciSourceDetailsModel{}

export namespace OciVolumeModel {
    export function newResource(type?: string): OciVolumeModel {
        return {
            ...AutoGenerated.OciVolumeModel.newResource('volume'),
        }
    }
    
    export function newOciBlockVolumeReplicasModel(): OciBlockVolumeReplicasModel {
        return {
            ...AutoGenerated.OciVolumeModel.newOciBlockVolumeReplicasModel(),
        }
    }

    export function newOciSourceDetailsModel(): OciSourceDetailsModel {
        return {
            ...AutoGenerated.OciVolumeModel.newOciSourceDetailsModel(),
        }
    }

}

export class OciVolumeModelClient {
    static new(): OciVolumeModel {
        return OciVolumeModel.newResource()
    }
}

export default OciVolumeModelClient
