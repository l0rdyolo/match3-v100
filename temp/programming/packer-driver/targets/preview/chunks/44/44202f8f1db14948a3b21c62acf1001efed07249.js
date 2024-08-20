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
            var buffer = new ArrayBuffer(1);
            new DataView(buffer).setUint8(0, value ? 1 : 0);
            return buffer;
          }

          deserialize(buffer) {
            return new DataView(buffer).getUint8(0) === 1;
          }

        }

        class NumberSerializer {
          serialize(value) {
            var buffer = new ArrayBuffer(8);
            new DataView(buffer).setFloat64(0, value);
            return buffer;
          }

          deserialize(buffer) {
            return new DataView(buffer).getFloat64(0);
          }

        }

        class StringSerializer {
          serialize(value) {
            var encoder = new TextEncoder();
            var encoded = encoder.encode(value);
            var buffer = new ArrayBuffer(encoded.byteLength + 4);
            var view = new DataView(buffer);
            view.setUint32(0, encoded.byteLength, true);
            new Uint8Array(buffer, 4).set(encoded);
            return buffer;
          }

          deserialize(buffer) {
            var view = new DataView(buffer);
            var length = view.getUint32(0, true);
            var decoder = new TextDecoder();
            return decoder.decode(new Uint8Array(buffer, 4, length));
          }

        }

        class ArraySerializer {
          constructor(itemSerializer) {
            this.itemSerializer = itemSerializer;
          }

          serialize(value) {
            var buffers = [];
            value.forEach(item => {
              var itemBuffer = this.itemSerializer.serialize(item);
              var lengthBuffer = new ArrayBuffer(4);
              new DataView(lengthBuffer).setUint32(0, itemBuffer.byteLength, true);
              buffers.push(lengthBuffer);
              buffers.push(itemBuffer);
            });
            var totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            var result = new Uint8Array(totalLength);
            var offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            var result = [];
            var offset = 0;

            while (offset < buffer.byteLength) {
              var length = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;
              var itemBuffer = buffer.slice(offset, offset + length);
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
            var buffers = [];

            for (var _key in this.schema) {
              if (value.hasOwnProperty(_key)) {
                var keyBuffer = new TextEncoder().encode(_key);
                var keyLengthBuffer = new ArrayBuffer(4);
                new DataView(keyLengthBuffer).setUint32(0, keyBuffer.length, true);
                buffers.push(keyLengthBuffer);
                buffers.push(keyBuffer.buffer);
                buffers.push(this.schema[_key].serialize(value[_key]));
              }
            }

            var totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            var result = new Uint8Array(totalLength);
            var offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            var result = {};
            var offset = 0;

            while (offset < buffer.byteLength) {
              var keyLength = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;

              var _key2 = new TextDecoder().decode(new Uint8Array(buffer, offset, keyLength));

              offset += keyLength;
              var serializer = this.schema[_key2];
              var valueBufferLength = serializer instanceof BooleanSerializer ? 1 : serializer instanceof NumberSerializer ? 8 : serializer instanceof StringSerializer ? new DataView(buffer, offset, 4).getUint32(0, true) + 4 : 0;
              var valueBuffer = buffer.slice(offset, offset + valueBufferLength);

              var _value = serializer.deserialize(valueBuffer);

              result[_key2] = _value;
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
            var buffers = [];
            value.forEach((v, k) => {
              var keyBuffer = this.keySerializer.serialize(k);
              var keyLengthBuffer = new ArrayBuffer(4);
              new DataView(keyLengthBuffer).setUint32(0, keyBuffer.byteLength, true);
              buffers.push(keyLengthBuffer);
              buffers.push(keyBuffer);
              var valueBuffer = this.valueSerializer.serialize(v);
              var valueLengthBuffer = new ArrayBuffer(4);
              new DataView(valueLengthBuffer).setUint32(0, valueBuffer.byteLength, true);
              buffers.push(valueLengthBuffer);
              buffers.push(valueBuffer);
            });
            var totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            var result = new Uint8Array(totalLength);
            var offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            var result = new Map();
            var offset = 0;

            while (offset < buffer.byteLength) {
              var keyLength = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;
              var keyBuffer = buffer.slice(offset, offset + keyLength);

              var _key3 = this.keySerializer.deserialize(keyBuffer);

              offset += keyLength;
              var valueLength = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;
              var valueBuffer = buffer.slice(offset, offset + valueLength);

              var _value2 = this.valueSerializer.deserialize(valueBuffer);

              offset += valueLength;
              result.set(_key3, _value2);
            }

            return result;
          }

        }

        class SetSerializer {
          constructor(itemSerializer) {
            this.itemSerializer = itemSerializer;
          }

          serialize(value) {
            var buffers = [];
            value.forEach(item => {
              var itemBuffer = this.itemSerializer.serialize(item);
              var lengthBuffer = new ArrayBuffer(4);
              new DataView(lengthBuffer).setUint32(0, itemBuffer.byteLength, true);
              buffers.push(lengthBuffer);
              buffers.push(itemBuffer);
            });
            var totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            var result = new Uint8Array(totalLength);
            var offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            var result = new Set();
            var offset = 0;

            while (offset < buffer.byteLength) {
              var length = new DataView(buffer, offset, 4).getUint32(0, true);
              offset += 4;
              var itemBuffer = buffer.slice(offset, offset + length);
              result.add(this.itemSerializer.deserialize(itemBuffer));
              offset += length;
            }

            return result;
          }

        }

        class DateSerializer {
          serialize(value) {
            var buffer = new ArrayBuffer(8);
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
            var buffers = value.map((item, index) => this.serializers[index].serialize(item));
            var totalLength = buffers.reduce((acc, buf) => acc + buf.byteLength, 0);
            var result = new Uint8Array(totalLength);
            var offset = 0;
            buffers.forEach(buf => {
              result.set(new Uint8Array(buf), offset);
              offset += buf.byteLength;
            });
            return result.buffer;
          }

          deserialize(buffer) {
            var result = [];
            var offset = 0;
            this.serializers.forEach((serializer, index) => {
              var length = serializer instanceof BooleanSerializer ? 1 : serializer instanceof NumberSerializer ? 8 : serializer instanceof StringSerializer ? new DataView(buffer, offset, 4).getUint32(0, true) + 4 : 0;
              var itemBuffer = buffer.slice(offset, offset + length);
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
            var index = this.enumValues.indexOf(value);

            if (index === -1) {
              throw new Error('Invalid enum value');
            }

            var buffer = new ArrayBuffer(4);
            new DataView(buffer).setUint32(0, index, true);
            return buffer;
          }

          deserialize(buffer) {
            var index = new DataView(buffer).getUint32(0, true);
            return this.enumValues[index];
          }

        }

        var Serializers = _BinarySerialization.Serializers = {
          boolean: new BooleanSerializer(),
          number: new NumberSerializer(),
          string: new StringSerializer(),
          array: itemSerializer => new ArraySerializer(itemSerializer),
          object: schema => new ObjectSerializer(schema),
          map: (keySerializer, valueSerializer) => new MapSerializer(keySerializer, valueSerializer),
          set: itemSerializer => new SetSerializer(itemSerializer),
          date: new DateSerializer(),
          typedArray: TypedArrayConstructor => new TypedArraySerializer(TypedArrayConstructor),
          tuple: function tuple() {
            for (var _len = arguments.length, serializers = new Array(_len), _key4 = 0; _key4 < _len; _key4++) {
              serializers[_key4] = arguments[_key4];
            }

            return new TupleSerializer(serializers);
          },
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
            var _schema = {};

            for (var _key5 in value) {
              _schema[_key5] = inferSchema(value[_key5]);
            }

            return new ObjectSerializer(_schema);
          }

          throw new Error('Unsupported type');
        }

        function serializeWithSchema(value) {
          var schema = inferSchema(value);
          return schema.serialize(value);
        }

        function deserializeWithSchema(buffer, value) {
          var schema = inferSchema(value);
          return schema.deserialize(buffer);
        }

        var Schema = _BinarySerialization.Schema = {
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
//# sourceMappingURL=44202f8f1db14948a3b21c62acf1001efed07249.js.map