/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciAnalyticsInstance"

export interface OciAnalyticsInstance extends AutoGenerated.OciAnalyticsInstance {}

export interface OciCapacity extends AutoGenerated.OciCapacity {}

export interface OciNetworkEndpointDetails extends AutoGenerated.OciNetworkEndpointDetails {}

export interface OciWhitelistedVcns extends AutoGenerated.OciWhitelistedVcns {}

export namespace OciAnalyticsInstance {
    export function newResource(type?: string): OciAnalyticsInstance {
        return {
            ...AutoGenerated.OciAnalyticsInstance.newResource('analytics_instance'),
        }
    }
    export function cloneResource(resource: OciAnalyticsInstance, type?: string): OciAnalyticsInstance {
        return AutoGenerated.OciAnalyticsInstance.cloneResource(resource, 'analytics_instance') as OciAnalyticsInstance
    }
    
    export function newOciCapacity(): OciCapacity {
        return {
            ...AutoGenerated.OciAnalyticsInstance.newOciCapacity(),
        }
    }

    export function newOciNetworkEndpointDetails(): OciNetworkEndpointDetails {
        return {
            ...AutoGenerated.OciAnalyticsInstance.newOciNetworkEndpointDetails(),
        }
    }

    export function newOciWhitelistedVcns(): OciWhitelistedVcns {
        return {
            ...AutoGenerated.OciAnalyticsInstance.newOciWhitelistedVcns(),
        }
    }

}

export class OciAnalyticsInstanceClient {
    static new(): OciAnalyticsInstance {
        return OciAnalyticsInstance.newResource()
    }
    static clone(resource: OciAnalyticsInstance): OciAnalyticsInstance {
        return OciAnalyticsInstance.cloneResource(resource)
    }
}

export default OciAnalyticsInstanceClient
