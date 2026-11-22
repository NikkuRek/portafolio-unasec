import { defineCollection } from 'astro/content/config';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const isoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'Usar formato ISO YYYY-MM-DD');

const referenceEntrySchema = z.object({
  citation: z.string().min(10),
  url: z.string().url().optional(),
});

const baseUnitFields = {
  unitNumber: z.enum(['I', 'II', 'III', 'IV', 'V']),
  order: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
  courseCode: z.literal('Cód. 000').default('Cód. 000'),
  term: z.literal('2026-2').default('2026-2'),
  title: z.string().min(5),
  subtitle: z.string().min(10),
  objective: z.string().min(15),
  updatedAt: isoDateSchema,
  readingMinutes: z.number().int().min(1).max(60),
  status: z.enum(['borrador', 'completo']),
  driveDocumentUrl: z.string().url().optional(),
  references: z.array(referenceEntrySchema).default([]),
};

const unitISchema = z.object({
  ...baseUnitFields,
  unitNumber: z.literal('I'),
  order: z.literal(1),
  deliverableKind: z.literal('infographic-and-video'),
  infographic: z.object({
    title: z.string().min(5),
    src: z.string().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    driveUrl: z.string().url(),
    alt: z.string().min(15),
    caption: z.string().min(10),
  }),
  video: z.object({
    title: z.string().min(5),
    src: z.string().min(1),
    poster: z.string().min(1),
    driveUrl: z.string().url(),
    previewUrl: z.string().url(),
    caption: z.string().min(10),
  }),
});

const unitIISchema = z.object({
  ...baseUnitFields,
  unitNumber: z.literal('II'),
  order: z.literal(2),
  deliverableKind: z.literal('instruments-and-mindmap'),
  instruments: z
    .array(z.string().regex(/^instrumento-[1-5]$/, 'Referencia esperada: instrumento-1 .. instrumento-5'))
    .length(5),
  mindMap: z.object({
    title: z.string().min(5),
    svgPath: z.string().min(1),
    driveUrl: z.string().url(),
    alt: z.string().min(20),
    caption: z.string().min(10),
    accessibleOutline: z.array(z.string().min(3)).min(3),
  }),
});

const unitIIISchema = z.object({
  ...baseUnitFields,
  unitNumber: z.literal('III'),
  order: z.literal(3),
  deliverableKind: z.literal('purpose-essay'),
  targetCareerCode: z.literal('Cód. 236').default('Cód. 236'),
  targetCareerName: z.literal('Ingeniería de Sistemas').default('Ingeniería de Sistemas'),
  thesis: z.string().min(20),
  keywords: z.array(z.string().min(2)).min(3).max(6),
});

const unitIVSchema = z.object({
  ...baseUnitFields,
  unitNumber: z.literal('IV'),
  order: z.literal(4),
  deliverableKind: z.literal('technical-summary-reflection'),
  sourceMaterial: z.object({
    title: z.string().min(5),
    author: z.string().min(3),
    year: z.string().regex(/^\d{4}$/).optional(),
  }),
  keyTakeaways: z.array(z.string().min(10)).min(3).max(7),
  reflectionAxis: z.string().min(15),
});

const unitVSchema = z.object({
  ...baseUnitFields,
  unitNumber: z.literal('V'),
  order: z.literal(5),
  deliverableKind: z.literal('opinion-article'),
  headline: z.string().min(10),
  stance: z.string().min(20),
  keywords: z.array(z.string().min(2)).min(3).max(6),
});

const units = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/units' }),
  schema: z.discriminatedUnion('deliverableKind', [
    unitISchema,
    unitIISchema,
    unitIIISchema,
    unitIVSchema,
    unitVSchema,
  ]),
});

const instruments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/instruments' }),
  schema: z.object({
    instrumentNumber: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    code: z.string().regex(/^U2-I[1-5]$/, 'Formato esperado: U2-I1 .. U2-I5'),
    title: z.string().min(5),
    dimension: z.string().min(4),
    objective: z.string().min(10),
    keyFinding: z.string().min(15),
    updatedAt: isoDateSchema,
    status: z.enum(['borrador', 'completo']),
  }),
});

export const collections = { units, instruments };
