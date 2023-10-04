/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciNosqlIndex"

export interface OciNosqlIndex extends AutoGenerated.OciNosqlIndex {}

export interface OciKeys extends AutoGenerated.OciKeys {}

export namespace OciNosqlIndex {
    
    export interface OciKeys extends AutoGenerated.OciNosqlIndex.OciKeys {}

    export function newResource(type?: string): OciNosqlIndex {
        return {
            ...AutoGenerated.OciNosqlIndex.newResource('nosql_index'),
        }
    }
    export function cloneResource(resource: OciNosqlIndex, type?: string): OciNosqlIndex {
        return AutoGenerated.OciNosqlIndex.cloneResource(resource, 'nosql_index') as OciNosqlIndex
    }
    export function allowedParentTypes(): string[] {
        console.debug('OciNosqlIndex: Allowed Parent Types')
        return []
    }
    export function getParentId(resource: OciNosqlIndex): string {
        console.debug('OciNosqlIndex: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciNosqlIndex, parentId: string): OciNosqlIndex {
        console.debug('OciNosqlIndex: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
    }
    export function getConnectionIds(resource: OciNosqlIndex): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        console.debug('OciNosqlIndex: Getting Connection Ids to for', resource.displayName, resource.id)
        return []
    }
    
    export function newOciKeys(): OciKeys {
        return {
            ...AutoGenerated.OciNosqlIndex.newOciKeys(),
        }
    }

}

export class OciNosqlIndexClient {
    static new(): OciNosqlIndex {
        return OciNosqlIndex.newResource()
    }
    static clone(resource: OciNosqlIndex): OciNosqlIndex {
        return OciNosqlIndex.cloneResource(resource)
    }
}

export default OciNosqlIndexClient