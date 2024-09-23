package com.green.H_Hospital.item.controller;

import com.green.H_Hospital.item.service.ItemService;
import com.green.H_Hospital.item.vo.CategoryVO;
import com.green.H_Hospital.item.vo.ImgVO;
import com.green.H_Hospital.item.vo.ItemVO;
import com.green.H_Hospital.util.FileUploadUtil;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController {

    @Resource(name = "itemService")
    private ItemService itemService;

    //아이템 리스트 조회
    @GetMapping("/getItemList")
    public List<ItemVO> getItemList(){
        return itemService.getItemList();
    }

    //아이템 상세정보 조회
    //보류

    //카테고리 목록 조회
    @GetMapping("/getCateList")
    public List<CategoryVO> getCateList(){
        return itemService.getCateList();
    }

    //상품 등록
    //첨부파일이 포함된 데이터가 전달되면 자바에서 데이터를 받는 문법도 달라진다.
    //첨부파일이 함께 전달되면 @RequestBody 어노테이션을 작성하지 않는다.
    //첨부파일 정보는 MultipartFile 객체를 사용하여 전달받을 수 있다.
    //MultipartFile 사용방법
    //@RequestParam("전달되는 첨부파일 데이터명") MultipartFile 변수명
    @PostMapping("/insertItem")
    public void insertItem(ItemVO itemVO
        , @RequestParam("mainImg")MultipartFile mainImg
        , @RequestParam("subImg") MultipartFile subImg ){

        //---- 파일 업로드 ----
        //메인이 되는 이미지 첨부 후 첨부된 원본 파일명, 첨부된 파일명을 리턴 받음
        ImgVO mainImgVO = FileUploadUtil.fileUpload(mainImg);
        mainImgVO.setIsMain("Y");

        //서브가 되는 이미지 첨부 후 첨부된 원본 파일명, 첨부된 파일명을 리턴 받음
        ImgVO subImgVO = FileUploadUtil.fileUpload(subImg);
        subImgVO.setIsMain("N");

        //등록할 상품의 item_code 조회
        int nextItemCode = itemService.getNextItemCode();

        //itemVO에 조회한 item_code 저장
        itemVO.setItemCode(nextItemCode);

        //상품 정보 등록
        itemService.insertItem(itemVO);

        //itemVO 객체에 이미지 정보를 다 저장
        //1. imgVO를 여러개 저장할 수 있는 List 생성
        List<ImgVO> imgList = new ArrayList<>();

        //2. imgList 에 첨부된 이미지 정보 저장
        imgList.add(mainImgVO);
        imgList.add(subImgVO);

        //3. itemVO 에 imgList 저장
        itemVO.setImgList(imgList);

        //상품 이미지 정보 등록
        itemService.insertImgs(itemVO);
    }

}
