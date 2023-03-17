
export default function ValidaPayloads(payload, schema) {
    for (const [key, value] of Object.entries(schema.properties)) {
        if (!payload.hasOwnProperty(key)) {
            return { valid: false, error: `${key} is missing` };
        }

        if (typeof payload[key] !== value.type) {
            return { valid: false, error: `${key} is not of type ${value.type}` };
        }
    }

    for (const requiredField of schema.required) {
        if (!payload.hasOwnProperty(requiredField)) {
            return { valid: false, error: `${requiredField} is required` };
        }
    }

    return { valid: true };
}
