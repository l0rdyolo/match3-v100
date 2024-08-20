System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FpCompare, NumberComparer, StringComparer, CustomComparer, DateComparer, ObjectPropertyComparer, ComparerFactory, EquatableBase, _crd;

  /**
   * Utility function to compare two equatable objects.
   * @template T - The type of the objects to be compared.
   * @param a - The first object.
   * @param b - The second object.
   * @returns True if the objects are equal, otherwise false.
   */
  function areEqual(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    return a.equals(b);
  }
  /**
   * Utility function to compare two arrays of equatable objects.
   * @template T - The type of the objects to be compared.
   * @param a - The first array.
   * @param b - The second array.
   * @returns True if the arrays are equal, otherwise false.
   */


  function areArraysEqual(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (!a[i].equals(b[i])) return false;
    }

    return true;
  }
  /**
   * Utility function to perform a deep equality check on two objects.
   * @template T - The type of the objects to be compared.
   * @param a - The first object.
   * @param b - The second object.
   * @returns True if the objects are deeply equal, otherwise false.
   */


  function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== 'object' || typeof b !== 'object') return false;
    if (a === null || b === null) return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!b.hasOwnProperty(key)) return false;
      if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
  }
  /**
   * Generates a hash code for an object.
   * @template T - The type of the object.
   * @param obj - The object.
   * @returns The hash code.
   */


  function hashCode(obj) {
    const str = JSON.stringify(obj);
    let hash = 0;
    if (str.length === 0) return hash;

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }

    return hash;
  }

  _export({
    FpCompare: void 0,
    NumberComparer: void 0,
    StringComparer: void 0,
    CustomComparer: void 0,
    DateComparer: void 0,
    ObjectPropertyComparer: void 0,
    ComparerFactory: void 0,
    EquatableBase: void 0,
    areEqual: areEqual,
    areArraysEqual: areArraysEqual,
    deepEqual: deepEqual,
    hashCode: hashCode
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "afd0e6/8xFFyYDDhhKDTVMq", "Comparer", undefined);

      _export("FpCompare", FpCompare = class FpCompare {
        /**
         * Creates a new FpCompare instance with the specified epsilon and absolute
         * threshold.
         *
         * @param epsilon The maximum allowed relative difference for considering
         * numbers equal.
         * @param absThreshold The minimum absolute difference for considering very
         * small numbers equal.
         */
        constructor(epsilon = Number.EPSILON, absThreshold = Math.min(Math.abs(Number.MIN_VALUE), epsilon)) {
          this.epsilon = void 0;
          this.absThreshold = void 0;

          if (epsilon <= 0 || epsilon >= 1) {
            throw new RangeError("Epsilon must be between 0 and 1 (exclusive)");
          }

          if (absThreshold <= 0) {
            throw new RangeError("absThreshold must be positive");
          }

          this.epsilon = epsilon;
          this.absThreshold = absThreshold;
        }
        /**
         * Compares two floating-point numbers for near equality using relative
         * comparison.
         *
         * @param a The first number.
         * @param b The second number.
         * @returns True if the absolute difference between a and b is less than
         * epsilon times their combined magnitude, false otherwise.
         */


        nearlyEqual(a, b) {
          const absDiff = Math.abs(a - b);
          const norm = Math.min(Math.abs(a) + Math.abs(b), Number.MAX_VALUE);
          return absDiff < Math.max(this.absThreshold, this.epsilon * norm);
        }
        /**
         * Compares two floating-point numbers for near equality using absolute
         * comparison. This is useful for very small numbers where relative comparison
         * might be unreliable.
         *
         * @param a The first number.
         * @param b The second number.
         * @returns True if the absolute difference between a and b is less than the
         * absThreshold, false otherwise.
         */


        absolutelyEqual(a, b) {
          return Math.abs(a - b) <= this.absThreshold;
        }
        /**
         * Compares two floating-point numbers for order with epsilon tolerance.
         * 
         * @param a The first number.
         * @param b The second number.
         * @returns 
         *  - 0 if a is equal to b within epsilon.
         *  - -1 if a is less than b within epsilon.
         *  - 1 if a is greater than b within epsilon.
         */


        compare(a, b) {
          const absDiff = Math.abs(a - b);

          if (absDiff < this.epsilon * Math.min(Math.abs(a) + Math.abs(b), Number.MAX_VALUE)) {
            return 0;
          } else if (a < b) {
            return -1;
          } else {
            return 1;
          }
        }
        /**
         * Returns the epsilon value used for comparisons.
         * 
         * @returns The epsilon value.
         */


        getEpsilon() {
          return this.epsilon;
        }
        /**
         * Returns the absolute threshold value used for comparisons.
         * 
         * @returns The absolute threshold value.
         */


        getAbsThreshold() {
          return this.absThreshold;
        }

      });
      /**
       * Defines a generic comparer interface for comparing two values.
       * @template T - The type of the values to be compared.
       */


      /**
       * Compares two numbers in either ascending or descending order.
       */
      _export("NumberComparer", NumberComparer = class NumberComparer {
        /**
         * @param ascending - Determines the sort order. True for ascending, false for descending.
         */
        constructor(ascending = true) {
          this.ascending = ascending;
        }
        /**
         * Compares two numbers.
         * @param a - The first number.
         * @param b - The second number.
         * @returns The difference between the two numbers based on the sort order.
         */


        compare(a, b) {
          return this.ascending ? a - b : b - a;
        }

      });
      /**
       * Compares two strings with optional case sensitivity.
       */


      _export("StringComparer", StringComparer = class StringComparer {
        /**
         * @param caseSensitive - Determines if the comparison is case-sensitive.
         */
        constructor(caseSensitive = true) {
          this.caseSensitive = caseSensitive;
        }
        /**
         * Compares two strings.
         * @param a - The first string.
         * @param b - The second string.
         * @returns A negative number if a < b, zero if a = b, a positive number if a > b.
         */


        compare(a, b) {
          if (this.caseSensitive) {
            return a.localeCompare(b);
          } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
          }
        }

      });
      /**
       * Compares two values using a custom comparison function.
       * @template T - The type of the values to be compared.
       */


      _export("CustomComparer", CustomComparer = class CustomComparer {
        /**
         * @param compareFunction - The custom comparison function.
         */
        constructor(compareFunction) {
          this.compareFunction = compareFunction;
        }
        /**
         * Compares two values using the custom comparison function.
         * @param a - The first value.
         * @param b - The second value.
         * @returns The result of the custom comparison function.
         */


        compare(a, b) {
          return this.compareFunction(a, b);
        }

      });
      /**
       * Compares two Date objects.
       */


      _export("DateComparer", DateComparer = class DateComparer {
        /**
         * Compares two dates.
         * @param a - The first date.
         * @param b - The second date.
         * @returns The difference in time between the two dates.
         */
        compare(a, b) {
          return a.getTime() - b.getTime();
        }

      });
      /**
       * Compares two objects based on a specified property.
       * @template T - The type of the objects to be compared.
       */


      _export("ObjectPropertyComparer", ObjectPropertyComparer = class ObjectPropertyComparer {
        /**
         * @param property - The property of the objects to compare.
         */
        constructor(property) {
          this.property = property;
        }
        /**
         * Compares two objects based on the specified property.
         * @param a - The first object.
         * @param b - The second object.
         * @returns A negative number if a[property] < b[property], zero if a[property] = b[property], 
         * a positive number if a[property] > b[property].
         */


        compare(a, b) {
          if (a[this.property] < b[this.property]) {
            return -1;
          } else if (a[this.property] > b[this.property]) {
            return 1;
          } else {
            return 0;
          }
        }

      });
      /**
       * Type definition for a constructor of a Comparer.
       * @template T - The type of the values to be compared.
       */


      /**
       * Factory class to create comparer instances based on type.
       */
      _export("ComparerFactory", ComparerFactory = class ComparerFactory {
        /**
         * Creates a comparer instance for the specified type or a custom comparer.
         * @template T - The type of the values to be compared.
         * @param type - The type of comparer to create.
         * @param customComparer - Optional custom comparison function.
         * @returns The comparer instance.
         * @throws If no comparer is found for the specified type.
         */
        static createComparer(type, customComparer) {
          if (customComparer) {
            return new CustomComparer(customComparer);
          }

          const comparerConstructor = this.comparerMap.get(type);

          if (!comparerConstructor) {
            throw new Error(`No comparer found for type: ${type}`);
          }

          return new comparerConstructor();
        }
        /**
         * Registers a new comparer type with its constructor.
         * @template T - The type of the values to be compared.
         * @param type - The type key for the comparer.
         * @param comparerConstructor - The constructor of the comparer.
         */


        static registerComparer(type, comparerConstructor) {
          this.comparerMap.set(type, comparerConstructor);
        }

      });
      /**
       * Interface for objects that can be compared for equality.
       * @template T - The type of the object to be compared.
       */


      ComparerFactory.comparerMap = new Map([['number', NumberComparer], ['string', StringComparer], ['date', DateComparer]]);

      /**
       * Base class for equatable objects, providing utility methods for comparison.
       * @template T - The type of the object to be compared.
       */
      _export("EquatableBase", EquatableBase = class EquatableBase {
        /**
         * Compares two equatable objects for equality.
         * @template T - The type of the objects to be compared.
         * @param a - The first object.
         * @param b - The second object.
         * @returns True if the objects are equal, otherwise false.
         */
        static areEqual(a, b) {
          if (a === b) return true;
          if (a === null || b === null) return false;
          return a.equals(b);
        }
        /**
         * Compares two arrays of equatable objects for equality.
         * @template T - The type of the objects to be compared.
         * @param a - The first array.
         * @param b - The second array.
         * @returns True if the arrays are equal, otherwise false.
         */


        static areArraysEqual(a, b) {
          if (a.length !== b.length) return false;

          for (let i = 0; i < a.length; i++) {
            if (!a[i].equals(b[i])) return false;
          }

          return true;
        }
        /**
         * Performs a deep equality check on two objects.
         * @template T - The type of the objects to be compared.
         * @param a - The first object.
         * @param b - The second object.
         * @returns True if the objects are deeply equal, otherwise false.
         */


        static deepEqual(a, b) {
          if (a === b) return true;
          if (typeof a !== 'object' || typeof b !== 'object') return false;
          if (a === null || b === null) return false;
          const keysA = Object.keys(a);
          const keysB = Object.keys(b);
          if (keysA.length !== keysB.length) return false;

          for (const key of keysA) {
            if (!b.hasOwnProperty(key)) return false;
            if (!EquatableBase.deepEqual(a[key], b[key])) return false;
          }

          return true;
        }
        /**
         * Creates an instance of an equatable object from a JSON string.
         * @template T - The type of the object to be created.
         * @param json - The JSON string.
         * @param ctor - The constructor of the object.
         * @returns The created object.
         */


        static fromJSON(json, ctor) {
          const obj = new ctor();
          Object.assign(obj, JSON.parse(json));
          return obj;
        }
        /**
         * Generates a hash code for an object.
         * @template T - The type of the object.
         * @param obj - The object.
         * @returns The hash code.
         */


        static hashCode(obj) {
          const str = JSON.stringify(obj);
          let hash = 0;
          if (str.length === 0) return hash;

          for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0;
          }

          return hash;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ffebb16ecc4347936aeac4d3cc1d4b1af9b5fdb.js.map