# Analisis SEO competidores JetsMunt

## Nota metodologica

Los CSV exportados desde Ubersuggest no incluyen una columna de pais, region ni base de datos. Por eso los Excels separan cada export en una pestana propia con `Market inferred`, `Language` y `Confidence`. La pestana `00_Mapping` conserva el nombre de archivo original para auditar o corregir mercados si despues se confirma el orden exacto de descarga.

El analisis de oportunidad si usa datos directos del CSV: keyword, volumen, posicion, visitas estimadas, dificultad SEO y URL ranking.

## Archivos generados

- `Jetcat_keywords_por_pais_idioma.xlsx`
- `KingTech_keywords_por_pais_idioma.xlsx`
- `PBSAerospace_keywords_por_pais_idioma.xlsx`
- `Benchmark_competidores_keywords.xlsx`

## Resumen cuantitativo

| Competidor | Keywords unicas aprox. | Volumen agregado | Visitas estimadas | Posicion media | Dificultad media | Top 10 | Quick-win gaps |
|---|---:|---:|---:|---:|---:|---:|---:|
| JetCat | 206 | 56,410 | 2,685 | 20.6 | 20.9 | 105 | 90 |
| KingTech | 56 | 10,920 | 1,633 | 20.9 | 21.0 | 33 | 12 |
| PBS Aerospace | 77 | 41,490 | 192 | 23.9 | 38.4 | 24 | 6 |

## Lectura por competidor

### JetCat

JetCat domina una mezcla muy valiosa de brand, producto, accesorios, servicio y terminos genericos. Su SEO funciona porque tiene arquitectura profunda: categorias de hobby, PRO, accesorios, fuel station, descargas, formularios, FAQ, distribuidores y fichas por modelo.

Fortalezas:
- Mucha cobertura long-tail en motores RC, turbinas, accesorios y modelos concretos.
- Muchas keywords Top 10 con dificultad baja/media.
- Arquitectura muy granular para capturar busquedas de soporte y compra.
- Fuerte efecto marca: `jetcat`, `jetcat turbine`, `jetcat turbines`, variantes alemanas.

Debilidades explotables:
- Muchas URLs antiguas o mixtas aleman/ingles.
- Parte del trafico es hobby/RC, no defensa/UAV.
- Oportunidades con posicion baja pero dificultad asumible: `turboprops`, `turbinen flugzeug`, `rc jet`, `turboprop flugzeug`, `jet engine rc`, `rc airplane jet engines`.

Para JetsMunt:
- No conviene competir frontalmente por `jetcat` ni modelos JetCat.
- Si conviene crear una estructura mejor que JetCat para UAV/profesional: `UAV turbojet engines`, `target drone propulsion`, `loitering munition propulsion`, `compact turbojet engines`.

### KingTech

KingTech es mucho mas pequeno en cobertura organica. Su trafico depende de marca, accesorios y producto. Tiene buena intencion comercial, pero menos profundidad SEO.

Fortalezas:
- Marca clara y muy buscada en su nicho.
- Keywords de producto/accesorio con dificultad baja: `fuel tubing`, `kingtech turbine oil`, `starter clutch`, `kingtech k45`.
- Foco ecommerce y piezas.

Debilidades explotables:
- Poca cobertura no-brand.
- Mucho trafico concentrado en marca.
- Menos autoridad en terminos aeroespaciales o B2B.
- Web mas orientada a tienda que a autoridad tecnica.

Para JetsMunt:
- Atacar el long-tail de accesorios/soporte si se crean paginas tecnicas: fuel pump, tubing, starter, ECU, telemetry, data logging.
- Evitar parecer tienda hobby. KingTech gana en compra rapida; JetsMunt debe ganar en integracion UAV y confianza industrial.

### PBS Aerospace

PBS tiene mucha autoridad en terminos aeroespaciales genericos, pero posiciona con dificultad mas alta. Su trafico estimado en estos exports es bajo respecto al volumen disponible, porque rankea en posiciones medias para keywords grandes.

Fortalezas:
- Posicionamiento B2B industrial/aeroespacial.
- Clusters fuertes: aircraft engines, turboshaft, turbojet, environmental control system, APU.
- Arquitectura de autoridad: Aerospace, Aircraft Engines, APU, ECS, components, support, downloads.

Debilidades explotables:
- Terminos genericos muy competidos y con posiciones medias.
- Menos foco en microturbinas 98-255 N.
- Oportunidad para JetsMunt en una subcategoria mas especifica: compact UAV turbojets.

Para JetsMunt:
- No competir contra PBS por `aircraft engine` general al principio.
- Crear clusters mas especificos donde PBS es demasiado amplio: `small turbojet engine for UAV`, `compact turbojet propulsion system`, `target drone turbojet engine`, `UAV engine telemetry`.

## Benchmark: que atacar antes

### Facil / alta prioridad

Estas oportunidades tienen dificultad baja/media y encajan con JetsMunt:

- `jet engine rc`, `rc airplane jet engines`, `turbojet engine rc`: utiles si se quiere mantener una puerta RC, pero con cuidado para no diluir defensa.
- `jet engine for sale`: comercial, pero puede atraer leads poco cualificados; usar solo si hay pagina de producto clara.
- `turboshaft engines`, `turbojet engine`, `aircraft turbojet engine`: mas B2B, mejor para autoridad si se aterrizan en contenido especifico.
- `small jet engines`, `smallest jet engine`, `mini jet motor`: buen puente entre busqueda generica y motores compactos.
- `environmental control system`: solo si JetsMunt realmente quiere ampliar contenido a sistemas auxiliares; si no, no prioritario.
- accesorios: `fuel tubing`, `starter clutch`, `fuel pump`, `turbine oil`, `jet tank`, `tankstation`.

### Media prioridad

- `turboprop`, `turboshaft`, `aircraft turbine`: volumen alto, pero puede quedar fuera del producto real de JetsMunt si no hay gama turboprop/turboshaft.
- `rc jet engine`, `rc jet engines`: buena captacion, pero posiciona JetsMunt cerca del hobby.
- `p220`, `p250`, `k210`, `k45`: no atacar con paginas directas salvo comparativas o glosario, porque son modelos de competidor.

### Dificil / no atacar de inicio

- Brand de competidores: `jetcat`, `kingtech`, `pbs`.
- Genericos muy amplios: `jet engine`, `aircraft engine`, `aircraft engines`, `turbine engine`.
- Terminos de alto volumen pero baja intencion real: `cat jet`, `king`, `p 220` ambiguo.

## Arquitectura SEO recomendada para JetsMunt

### Paginas core

- `/products`
- `/products/xm98ng`
- `/products/xm122ng`
- `/products/xm166ng`
- `/products/xm182ng`
- `/products/xm210ng`
- `/products/xm222ng`
- `/products/xm250ng`
- `/products/xm255ng`
- `/pro-series/xm215-pro`
- `/pro-series/xm255-pro`

### Clusters B2B de autoridad

- `/uav-propulsion`
- `/uav-integration`
- `/target-drone-propulsion`
- `/loitering-munition-propulsion`
- `/compact-turbojet-engines`
- `/electronics-telemetry`
- `/ecu-control-systems`
- `/engineering-custom-development`
- `/testing-validation`
- `/manufacturing-in-spain`

### Soporte y postventa

- `/support`
- `/support/downloads`
- `/support/manuals`
- `/support/service-request`
- `/support/faq`
- `/support/maintenance`

### Comparativas utiles

Evitar comparativas agresivas por marca al inicio. Mejor:

- `How to choose a compact turbojet engine for UAV platforms`
- `Turbojet vs turboprop for UAV applications`
- `Integrated ECU and telemetry for UAV turbojet engines`
- `Fuel consumption and thrust classes for compact turbojets`

## Recomendacion de negocio

JetsMunt debe posicionarse como proveedor europeo especializado, no como tienda de turbinas:

- Mensaje principal: European compact turbojet propulsion systems for advanced UAV platforms.
- Diferencial: 98-255 N, fabricacion en Espana, electronica integrada, telemetria, desarrollo a medida, soporte de integracion.
- Buyer principal: OEMs, integradores UAV, defensa, target drones, investigacion, programas aeroespaciales.
- Buyer secundario: RC avanzado solo como mercado heredado, no como narrativa principal.

## Roadmap SEO sugerido

1. Crear paginas individuales de motor con specs completas y Schema Product.
2. Crear `/uav-integration` y `/electronics-telemetry` con contenido tecnico profundo.
3. Crear `/support/downloads` aunque al principio solo tenga catalogo PDF y formularios.
4. Crear glosario/articulos para small turbojet, turbojet UAV, target drone propulsion.
5. Internacionalizar EN primero; ES/CA pueden existir, pero el mercado SEO fuerte parece EN.
6. Construir CTAs B2B: technical enquiry, integration request, custom development request.

