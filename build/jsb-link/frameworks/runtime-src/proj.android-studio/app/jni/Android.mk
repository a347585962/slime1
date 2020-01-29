define all-files-under
$(patsubst ./%,%, \
  $(shell cd $(LOCAL_PATH) ; \
          find $(1) -name "$(2)" -and -not -name ".*") \
 )
endef

define all-cpp-files-under
$(call all-files-under,$(1),*.cpp)
endef

define all-c-files-under
$(call all-files-under,$(1),*.c)
endef

LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := cocos2djs_shared

LOCAL_MODULE_FILENAME := libcocos2djs

ifeq ($(USE_ARM_MODE),1)
LOCAL_ARM_MODE := arm
endif

FILE_INCLUDES := $(shell find $(LOCAL_PATH)/../../../Classes -type d)

LOCAL_SRC_FILES := $(call all-cpp-files-under,../../../Classes) \
    $(call all-c-files-under,../../../Classes) \
    $(call all-cpp-files-under,.) \

LOCAL_C_INCLUDES := $(shell find $(LOCAL_PATH)/../../../Classes -type d)

#LOCAL_C_INCLUDES := $(LOCAL_PATH)/../../../Classes

LOCAL_STATIC_LIBRARIES := cocos2dx_static

include $(BUILD_SHARED_LIBRARY)

$(call import-module, cocos)
