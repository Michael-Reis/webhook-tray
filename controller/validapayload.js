
export default function ValidaPayloads(payload, schema) {
    
    const new_payload = {...payload}

    for (const [key, value] of Object.entries(schema.properties)) {
        if (!new_payload.hasOwnProperty(key)) {
            return { valid: false, error: `${key} is missing` };
        }

        if (typeof new_payload[key] !== value.type) {
            return { valid: false, error: `${key} is not of type ${value.type}` };
        }
    }

    for (const requiredField of schema.required) {
        if (!new_payload.hasOwnProperty(requiredField)) {
            return { valid: false, error: `${requiredField} is required` };
        }
    }

    return { valid: true };
}
