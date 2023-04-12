/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciDrgAttachmentModel"

export interface OciDrgAttachmentModel extends AutoGenerated.OciDrgAttachmentModel {}

export interface OciNetworkDetailsModel extends AutoGenerated.OciNetworkDetailsModel{}

export namespace OciDrgAttachmentModel {
    export function newResource(type?: string): OciDrgAttachmentModel {
        return {
            ...AutoGenerated.OciDrgAttachmentModel.newResource('drg_attachment'),
        }
    }
    
    export function newOciNetworkDetailsModel(): OciNetworkDetailsModel {
        return {
            ...AutoGenerated.OciDrgAttachmentModel.newOciNetworkDetailsModel(),
        }
    }

}

export class OciDrgAttachmentModelClient {
    static new(): OciDrgAttachmentModel {
        return OciDrgAttachmentModel.newResource()
    }
}

export default OciDrgAttachmentModelClient
