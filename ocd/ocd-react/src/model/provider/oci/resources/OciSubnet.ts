/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciSubnet"

export interface OciSubnet extends AutoGenerated.OciSubnet {}

export namespace OciSubnet {
    export function newResource(type?: string): OciSubnet {
        return {
            ...AutoGenerated.OciSubnet.newResource('subnet'),
        }
    }
    export function cloneResource(resource: OciSubnet, type?: string): OciSubnet {
        return AutoGenerated.OciSubnet.cloneResource(resource, 'subnet') as OciSubnet
    }
    
}

export class OciSubnetClient {
    static new(): OciSubnet {
        return OciSubnet.newResource()
    }
    static clone(resource: OciSubnet): OciSubnet {
        return OciSubnet.cloneResource(resource)
    }
}

export default OciSubnetClient
