/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import OcdDocument from '../../../../OcdDocument'
import { ResourceProperties } from '../../../OcdPropertyTypes'
import { OciSubnetAutoGenerated } from './generated/OciSubnet'

export const OciSubnet = ({ ocdDocument, setOcdDocument, resource }: ResourceProperties): JSX.Element => {
    return (
        <OciSubnetAutoGenerated ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} resource={resource} />
    )
}
