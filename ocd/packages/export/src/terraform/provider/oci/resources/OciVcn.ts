/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciVcn"
import { OciModelResources as Model } from '@ocd/model'

export class OciVcn extends AutoGenerated.OciVcn {
    generateAdditionalResourceLocals(resource: Model.OciVcn) {
        return `${resource.terraformResourceName}_default_route_table_id = oci_core_vcn.${resource.terraformResourceName}.default_route_table_id
    ${resource.terraformResourceName}_default_security_list_id = oci_core_vcn.${resource.terraformResourceName}.default_security_list_id
    ${resource.terraformResourceName}_default_dhcp_options_id = oci_core_vcn.${resource.terraformResourceName}.default_dhcp_options_id
`
    }
}

export default OciVcn
