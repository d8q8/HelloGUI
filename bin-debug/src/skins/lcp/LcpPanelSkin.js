var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var lcp;
    (function (lcp) {
        var LcpPanelSkin = (function (_super) {
            __extends(LcpPanelSkin, _super);
            function LcpPanelSkin() {
                _super.call(this);
                this.height = 300;
                this.width = 400;
                this.elementsContent = [this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            LcpPanelSkin.prototype.__3_i = function () {
                var t = new egret.gui.Label();
                t.text = "标签";
                t.width = 228;
                t.x = 12;
                t.y = -43;
                return t;
            };
            LcpPanelSkin.prototype.__4_i = function () {
                var t = new egret.gui.Button();
                t.label = "点我";
                t.x = 57;
                t.y = 67;
                return t;
            };
            LcpPanelSkin.prototype.__5_i = function () {
                var t = new egret.gui.Panel();
                t.height = 200;
                t.width = 250;
                t.x = 77;
                t.y = 37;
                t.elementsContent = [this.__3_i(), this.__4_i()];
                return t;
            };
            return LcpPanelSkin;
        })(egret.gui.Skin);
        lcp.LcpPanelSkin = LcpPanelSkin;
        LcpPanelSkin.prototype.__class__ = "lcp.LcpPanelSkin";
    })(lcp = skins.lcp || (skins.lcp = {}));
})(skins || (skins = {}));
