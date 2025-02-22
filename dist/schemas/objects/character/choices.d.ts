import { z } from 'zod';
export declare const statType: z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>;
export declare const statObject: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    value: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
    availableAt: z.ZodOptional<z.ZodNumber>;
    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
}, "strip", z.ZodTypeAny, {
    value: string;
    id?: number | undefined;
    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
    properties?: Record<string, string | number> | undefined;
    availableAt?: number | undefined;
    availableUnit?: "level" | "cr" | undefined;
}, {
    value: string;
    id?: number | undefined;
    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
    properties?: Record<string, string | number> | undefined;
    availableAt?: number | undefined;
    availableUnit?: "level" | "cr" | undefined;
}>;
export declare const choiceRandomObject: z.ZodObject<{
    choice: z.ZodObject<{
        type: z.ZodLiteral<"random">;
        resultType: z.ZodEnum<["object", "nameId"]>;
        source: z.ZodEnum<["objects", "languages", "skills"]>;
        number: z.ZodOptional<z.ZodNumber>;
        objectType: z.ZodOptional<z.ZodNumber>;
        filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
            keyName: z.ZodString;
            keyValues: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            keyName: string;
            keyValues: string[];
        }, {
            keyName: string;
            keyValues: string[];
        }>, "many">>;
        chosenAlready: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            value: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
            availableAt: z.ZodOptional<z.ZodNumber>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "random";
        resultType: "object" | "nameId";
        source: "objects" | "languages" | "skills";
        number?: number | undefined;
        objectType?: number | undefined;
        filters?: {
            keyName: string;
            keyValues: string[];
        }[] | undefined;
        chosenAlready?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
    }, {
        type: "random";
        resultType: "object" | "nameId";
        source: "objects" | "languages" | "skills";
        number?: number | undefined;
        objectType?: number | undefined;
        filters?: {
            keyName: string;
            keyValues: string[];
        }[] | undefined;
        chosenAlready?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    choice: {
        type: "random";
        resultType: "object" | "nameId";
        source: "objects" | "languages" | "skills";
        number?: number | undefined;
        objectType?: number | undefined;
        filters?: {
            keyName: string;
            keyValues: string[];
        }[] | undefined;
        chosenAlready?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
    };
}, {
    choice: {
        type: "random";
        resultType: "object" | "nameId";
        source: "objects" | "languages" | "skills";
        number?: number | undefined;
        objectType?: number | undefined;
        filters?: {
            keyName: string;
            keyValues: string[];
        }[] | undefined;
        chosenAlready?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
    };
}>;
export declare const choiceListObject: z.ZodObject<{
    choice: z.ZodObject<{
        type: z.ZodLiteral<"list">;
        number: z.ZodNumber;
        list: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            value: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
            availableAt: z.ZodOptional<z.ZodNumber>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">;
        isRepeatable: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        number: number;
        type: "list";
        list: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[];
        isRepeatable?: boolean | undefined;
    }, {
        number: number;
        type: "list";
        list: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[];
        isRepeatable?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    choice: {
        number: number;
        type: "list";
        list: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[];
        isRepeatable?: boolean | undefined;
    };
}, {
    choice: {
        number: number;
        type: "list";
        list: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[];
        isRepeatable?: boolean | undefined;
    };
}>;
export type Choice = z.infer<typeof statObject>;
export type ChoiceRandomObject = z.infer<typeof choiceRandomObject>;
export type ChoiceListObject = z.infer<typeof choiceListObject>;
//# sourceMappingURL=choices.d.ts.map