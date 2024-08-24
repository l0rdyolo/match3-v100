System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, SingletonComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SoundManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../Legacy/Singleton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76343pLfJRCe6PyX6NadYG2", "SoundManager", undefined);

      __checkObsolete__(['_decorator', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundManager", SoundManager = (_dec = ccclass('SoundManager'), _dec2 = property({
        type: AudioSource
      }), _dec(_class = (_class2 = class SoundManager extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "soundList", _descriptor, this);

          this.soundsMap = new Map();
        }

        onLoad() {
          super.onLoad();
          this.soundList.forEach(sound => {
            this.soundsMap.set(sound.node.name, sound);
          });
        }

        playSound(key, loop = false) {
          const audioSource = this.soundsMap.get(key);

          if (audioSource) {
            audioSource.loop = loop;
            audioSource.play();
          }
        }

        stopSound(key) {
          const audioSource = this.soundsMap.get(key);

          if (audioSource && audioSource.playing) {
            audioSource.stop();
          }
        }

        setVolume(key, volume) {
          const audioSource = this.soundsMap.get(key);

          if (audioSource) {
            audioSource.volume = volume;
          }
        }

        setGlobalVolume(volume) {
          this.soundsMap.forEach(audioSource => {
            audioSource.volume = volume;
          });
        }

        stopAllSounds() {
          this.soundsMap.forEach(audioSource => {
            if (audioSource.playing) {
              audioSource.stop();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a8a8fe1ecdaf2277d01e64b4316191085ba88317.js.map