// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class DownSubGameMG extends cc.Component {
    private static _instance: any;
    public static getInstance(): DownSubGameMG {
        if (DownSubGameMG._instance == null)
            DownSubGameMG._instance = new DownSubGameMG();
        return DownSubGameMG._instance;
    }
    

    start () {

    }
    datalist = [];
    downZip(subname:string){

        //国外 美国硅谷
        // var downUrl = "https://unicornfoodhall.oss-us-west-1.aliyuncs.com/";
        //国内
        var downUrl = "https://unnicornfallcn.oss-cn-chengdu.aliyuncs.com/";
        var url = downUrl + subname + ".zip";

        // ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'UnicornFoodHall/' + subname);
        
        var dirpath = cc.path.join((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/'),"UnicornFoodHall",subname,"/");
        var filepath = cc.path.join(dirpath,"game.zip");
        if(jsb.fileUtils.isDirectoryExist(dirpath))
            jsb.fileUtils.removeDirectory(dirpath)
        jsb.fileUtils.createDirectory(dirpath);
        
        console.log("测试下载----zip");
        console.log("url---->" + url);
        

        var downloader = new jsb.Downloader();
        var self = this;
        var index = 0;
        downloader.setOnTaskError(function(sender,errorCode,errorCodeInternal,errorStr){
            
            console.log(`errorStr = ${errorStr || ""}\n`);
        })
    
        downloader.setOnTaskProgress(function(sender,bytesReceived,totalBytesReceived,totalBytesExpected){
            
            var str = "下载大小 = " + bytesReceived + "," + "总大小 = "
             + totalBytesReceived + "," + "预期总大小 = " 
             + totalBytesExpected + "," + "进度 = " +
              Math.floor(totalBytesReceived / totalBytesExpected * 10000)/100 + "%\n";
            console.log(str);
            
            // console.log(bytesReceived,totalBytesReceived,totalBytesExpected,Math.floor(totalBytesReceived / totalBytesExpected * 10000)/100 + "%");
        })
    
        downloader.setOnFileTaskSuccess(function(sender){
            
            
            console.log(`------------------download success\n`);
        })
    
        downloader.createDownloadFileTask(url, filepath, "download_test");

    }

}
