System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BinarySerialization;

  _export("BinarySerialization", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "03de3Wv8SpM0ZetbR44fYXc", "BinarySerialization", undefined);

      (function (_BinarySerialization) {
        class BooleanSerializer {
          serialize(value) {
            const buffer = new ArrayBuffer(1);
            new DataView(buffer).setUint8(0, value ? 1 : 0);
            return buffer;
          }

          deserialize(buffer) {
            return new DataView(buffer).getUint8(0) === 1;
          }

        }

        class NumberSerializer {
          serialize(value) {
            const buffer = new ArrayBuffer(8);
            new DataView(buffer).setFloat64(0, value);
            return buffer;
          }

          deserialize(buffer) {
            return new DataView(buffer).getFloat64(0);
          }

        }

        class StringSerializer {
          serialize(value) {
            const encoder = new TextEncoder();
            const encoded = encoder.encode(value);
            const buffer = new ArrayBuffer(encoded.byteLength + 4);
            const view = new DataView(buffer);
            view.setUint32(0, encoded.byteLength, true);
            new Uint8Array(buffer, 4).set(encoded);
            return buffer;
          }

          deserialize(buffer) {
            const view = new DataView(buffer);
            const length = view.getUint32(0, true);
            const decoder = new TextDecoder();
            return decoder.decode(new Uint8Array(buffer, 4, length));
          }

        }

        class ArraySerializer {
          constructor(itemSerializer) {
            this.itemSerializer = itemSerializer;
          }

          serialize(value) {
            const buffers = [];
            value.forEach(item => {
              const itemBuffer = this.itemSerializer.serialize(item);
              const lengthBuffer = new ArrayBuffer(4);
              new DataView(lengthBuffer).setUint32(0, itemBuffer.byteLength, true);
              buffers.push(lengthBuffer);
              buffers.push(itemBuffer);
            });
            const totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            const result = new Uint8Array(totalLength);
            let offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            const result = [];
            let offset = 0;

            while (offset < buffer.byteLength) {
              const length = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;
              const itemBuffer = buffer.slice(offset, offset + length);
              result.push(this.itemSerializer.deserialize(itemBuffer));
              offset += length;
            }

            return result;
          }

        }

        class ObjectSerializer {
          constructor(schema) {
            this.schema = schema;
          }

          serialize(value) {
            const buffers = [];

            for (const key in this.schema) {
              if (value.hasOwnProperty(key)) {
                const keyBuffer = new TextEncoder().encode(key);
                const keyLengthBuffer = new ArrayBuffer(4);
                new DataView(keyLengthBuffer).setUint32(0, keyBuffer.length, true);
                buffers.push(keyLengthBuffer);
                buffers.push(keyBuffer.buffer);
                buffers.push(this.schema[key].serialize(value[key]));
              }
            }

            const totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            const result = new Uint8Array(totalLength);
            let offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            const result = {};
            let offset = 0;

            while (offset < buffer.byteLength) {
              const keyLength = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;
              const key = new TextDecoder().decode(new Uint8Array(buffer, offset, keyLength));
              offset += keyLength;
              const serializer = this.schema[key];
              const valueBufferLength = serializer instanceof BooleanSerializer ? 1 : serializer instanceof NumberSerializer ? 8 : serializer instanceof StringSerializer ? new DataView(buffer, offset, 4).getUint32(0, true) + 4 : 0;
              const valueBuffer = buffer.slice(offset, offset + valueBufferLength);
              const value = serializer.deserialize(valueBuffer);
              result[key] = value;
              offset += valueBufferLength;
            }

            return result;
          }

        }

        class MapSerializer {
          constructor(keySerializer, valueSerializer) {
            this.keySerializer = keySerializer;
            this.valueSerializer = valueSerializer;
          }

          serialize(value) {
            const buffers = [];
            value.forEach((v, k) => {
              const keyBuffer = this.keySerializer.serialize(k);
              const keyLengthBuffer = new ArrayBuffer(4);
              new DataView(keyLengthBuffer).setUint32(0, keyBuffer.byteLength, true);
              buffers.push(keyLengthBuffer);
              buffers.push(keyBuffer);
              const valueBuffer = this.valueSerializer.serialize(v);
              const valueLengthBuffer = new ArrayBuffer(4);
              new DataView(valueLengthBuffer).setUint32(0, valueBuffer.byteLength, true);
              buffers.push(valueLengthBuffer);
              buffers.push(valueBuffer);
            });
            const totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            const result = new Uint8Array(totalLength);
            let offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            const result = new Map();
            let offset = 0;

            while (offset < buffer.byteLength) {
              const keyLength = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;
              const keyBuffer = buffer.slice(offset, offset + keyLength);
              const key = this.keySerializer.deserialize(keyBuffer);
              offset += keyLength;
              const valueLength = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;
              const valueBuffer = buffer.slice(offset, offset + valueLength);
              const value = this.valueSerializer.deserialize(valueBuffer);
              offset += valueLength;
              result.set(key, value);
            }

            return result;
          }

        }

        class SetSerializer {
          constructor(itemSerializer) {
            this.itemSerializer = itemSerializer;
          }

          serialize(value) {
            const buffers = [];
            value.forEach(item => {
              const itemBuffer = this.itemSerializer.serialize(item);
              const lengthBuffer = new ArrayBuffer(4);
              new DataView(lengthBuffer).setUint32(0, itemBuffer.byteLength, true);
              buffers.push(lengthBuffer);
              buffers.push(itemBuffer);
            });
            const totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            const result = new Uint8Array(totalLength);
            let offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            const result = new Set();
            let offset = 0;

            while (offset < buffer.byteLength) {
              const length = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;
              const itemBuffer = buffer.slice(offset, offset + length);
              result.add(this.itemSerializer.deserialize(itemBuffer));
              offset += length;
            }

            return result;
          }

        }

        class DateSerializer {
          serialize(value) {
            const buffer = new ArrayBuffer(8);
            new DataView(buffer).setFloat64(0, value.getTime());
            return buffer;
          }

          deserialize(buffer) {
            return new Date(new DataView(buffer).getFloat64(0));
          }

        }

        class TypedArraySerializer {
          constructor(TypedArrayConstructor) {
            this.TypedArrayConstructor = TypedArrayConstructor;
          }

          serialize(value) {
            return value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
          }

          deserialize(buffer) {
            return new this.TypedArrayConstructor(buffer);
          }

        }

        class TupleSerializer {
          constructor(serializers) {
            this.serializers = serializers;
          }

          serialize(value) {
            const buffers = value.map((item, index) => this.serializers[index].serialize(item));
            const totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            const result = new Uint8Array(totalLength);
            let offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            const result = [];
            let offset = 0;
            this.serializers.forEach((serializer, index) => {
              const length = serializer instanceof BooleanSerializer ? 1 : serializer instanceof NumberSerializer ? 8 : serializer instanceof StringSerializer ? new DataView(buffer, offset, 4).getUint32(0, true) + 4 : 0;
              const itemBuffer = buffer.slice(offset, offset + length);
              result[index] = serializer.deserialize(itemBuffer);
              offset += length;
            });
            return result;
          }

        }

        class EnumSerializer {
          constructor(enumValues) {
            this.enumValues = enumValues;
          }

          serialize(value) {
            const index = this.enumValues.indexOf(value);

            if (index === -1) {
              throw new Error('Invalid enum value');
            }

            const buffer = new ArrayBuffer(4);
            new DataView(buffer).setUint32(0, index, true);
            return buffer;
          }

          deserialize(buffer) {
            const index = new DataView(buffer).getUint32(0, true);
            return this.enumValues[index];
          }

        }

        const Serializers = _BinarySerialization.Serializers = {
          boolean: new BooleanSerializer(),
          number: new NumberSerializer(),
          string: new StringSerializer(),
          array: itemSerializer => new ArraySerializer(itemSerializer),
          object: schema => new ObjectSerializer(schema),
          map: (keySerializer, valueSerializer) => new MapSerializer(keySerializer, valueSerializer),
          set: itemSerializer => new SetSerializer(itemSerializer),
          date: new DateSerializer(),
          typedArray: TypedArrayConstructor => new TypedArraySerializer(TypedArrayConstructor),
          tuple: (...serializers) => new TupleSerializer(serializers),
          enum: enumValues => new EnumSerializer(enumValues)
        };

        function createSchema(schema) {
          return new ObjectSerializer(schema);
        }

        function inferSchema(value) {
          if (typeof value === 'boolean') return Serializers.boolean;
          if (typeof value === 'number') return Serializers.number;
          if (typeof value === 'string') return Serializers.string;
          if (value instanceof Date) return Serializers.date;
          if (Array.isArray(value)) return Serializers.array(inferSchema(value[0]));

          if (value && typeof value === 'object') {
            const schema = {};

            for (const key in value) {
              schema[key] = inferSchema(value[key]);
            }

            return new ObjectSerializer(schema);
          }

          throw new Error('Unsupported type');
        }

        function serializeWithSchema(value) {
          const schema = inferSchema(value);
          return schema.serialize(value);
        }

        function deserializeWithSchema(buffer, value) {
          const schema = inferSchema(value);
          return schema.deserialize(buffer);
        }

        const Schema = _BinarySerialization.Schema = {
          createSchema,
          inferSchema,
          serializeWithSchema,
          deserializeWithSchema
        };
      })(BinarySerialization || _export("BinarySerialization", BinarySerialization = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=72117cb226777b60056ee3f5261943bd90fe43ee.js.map